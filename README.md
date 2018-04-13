# SongCabin

SongCabin is a single-page, BandCamp-inspired web app for uploading and playing music, built with React, Redux, and Ruby on Rails. It uses custom-designed controls to trigger methods on the HTML audio element and employs a global UI state to enable cross-component audio play. It integrates Amazon Web Services to seamlessly upload, store & deliver image and audio content, and also utilizes FormData objects and nested attributes to upload the data for an album and multiple tracks at once. The Search function uses an event listener to track user input and make a database call for matching Album entries.

[Live Site](https://songcabin.herokuapp.com/)

## Song Player

![Alt Text](http://media.giphy.com/media/6Akhfs63fmDmREErHe/giphy.gif)

The Song Player is an interactive feature allowing the user to play and pause a selected track from an album and scan through the track using a slider.

HTML5's audio element allows for easy embedding of audio in a web page, but to fit the specifications I wanted, I had to hide the native controls and design my own controls using CSS, refs, and click listeners.

```HTML
<audio ref={(audio) => { this.playerAudio = audio; }}
src={playerTrack.audio_url}
onTimeUpdate={this.moveSlider}></audio>
.
.
.          
<div className="player-button" onClick={this.handlePlay}>
  <div className="play">
    <img src={icon}/>
  </div>
</div>
```

When any of the custom-designed play buttons is clicked (either on the main song player, or next to the individual tracks), an action creator is dispatched to update the global UI slice of state, setting the id and play status of the current track:

```Javascript
handlePlay(e) {
  if (!this.props.currentTrack.id) {
    this.props.sendCurrentTrack({id: this.props.leadTrack[0].id, playing: true});
  } else if (this.props.currentTrack.playing === false) {
    this.props.sendCurrentTrack({playing: true});
  } else {
    this.props.sendCurrentTrack({playing: false});
  }
}
```
```Javascript
handleTrack (e) {
  if (e.currentTarget.value !== this.props.currentTrack.id) {
    this.props.sendCurrentTrack({id: e.currentTarget.value, playing: true});

  } else if ((e.currentTarget.value === this.props.currentTrack.id) && (this.props.currentTrack.playing === true)) {
    this.props.sendCurrentTrack({id: e.currentTarget.value, playing: false});

  } else if ((e.currentTarget.value === this.props.currentTrack.id) && (this.props.currentTrack.playing === false)) {
    this.props.sendCurrentTrack({id: e.currentTarget.value, playing: true});

  }
}
```

Any change to this slice of state triggers a method call on the ref referencing the audio element, playing or pausing the track accordingly:

```Javascript
if (this.props.currentTrack.playing === true && this.playerAudio) {
  this.playerAudio.play();
}
if (this.props.currentTrack.playing === false && this.playerAudio) {
  this.playerAudio.pause();
}
```

Finally, listeners are set on the audio element (see first code snippet above) to move the slider according to the track's elapsed time, and on the slider range element to scan to any point in the track where the slider is dragged. The "currentTime" and "duration" methods on the audio element are used to make these calculations.

```Javascript
slider () {
  if (this.playerAudio.currentTime) {
    return (this.playerAudio.currentTime / this.playerAudio.duration * 250);
  } else {
    return 0;
  }
}

moveSlider() {
  this.setState({slider: this.slider()});
}

handleDragSlider (e) {
  this.playerAudio.currentTime = e.currentTarget.value / 250 * this.playerAudio.duration;
}
```
```HTML
<input type="range" value={this.state.slider}
  onChange={this.handleDragSlider} min="1" max="250" className="slider" id="myRange"/>
```

## Album/Track Upload

![Alt Text](http://media.giphy.com/media/31Q33vOwz44qtP1X3o/giphy.gif)

It was a challenge to figure out the best way to upload an album with its information (cover image, description) as well as all of its individual tracks, including sound files, track titles, etc. Active Record's nested attributes class method allows you to save attributes on associated records through the parent. So by enabling nested attributes on the Album model (which has a "has many" association with tracks) and including the track params in the Albums controller's strong params, the process of saving an album with its tracks could be completed through a single AJAX request.

```Ruby
tracks_attributes: [:title, :order, :audio]
```

In the TrackUpload component, when a user enters a track title and selects a track to upload, OnChange listeners trigger dispatch of an action creator to update the trackData slice of state:

```Javascript
update(field) {
  return e => {
    const newState = merge({}, this.state, {track: {[field]: e.currentTarget.value}});
    this.setState(newState, () => {
      this.props.receiveTrackData(this.state.track);
    });
  };
}

updateFile(e) {
  const file = e.currentTarget.files[0];
  const newState = merge({}, this.state, {track: {file: file}});
  this.setState(newState, () => {
    this.props.receiveTrackData(this.state.track);
  });
}
```

The trackData is then used as props in the CreateAlbumForm component, where it is appended to a formData object as a "tracks_attributes" param that will be accessible to the Albums controller when the form is submitted:

```Javascript
handleSubmit(e) {
  const formData = new FormData();
  e.preventDefault();
  this.props.tracks.forEach(track => {
    formData.append('album[tracks_attributes][][title]', track.title);
    formData.append('album[tracks_attributes][][audio]', track.file);
    formData.append('album[tracks_attributes][][order]', track.order);
  });
  const file = this.state.imageFile;
  formData.append("album[title]", this.state.albumTitle);
  formData.append("album[description]", this.state.albumDescription);
  formData.append("album[artist_id]", this.state.albumArtistId);
  if (file) formData.append("album[image]", file);
  this.props
    .processForm(formData)
    .then(() =>
      this.props.history.push(
        `/artists/${this.props.currentUser.id}`
      )
    );
}
```

The end result is that along with the album, the tracks will be added to the database, each with the corresponding album id (the basis of the Active Record association).
