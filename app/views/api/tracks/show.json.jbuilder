
json.extract! @track, :id, :title, :order, :album_id
json.audio_url asset_path(@track.audio.url)

  });
};
