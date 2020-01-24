json.user do
  json.extract! @user, :id, :band_name, :email, :band_description, :band_location, :band_website
  json.image_url asset_path(@user.image.url)
  if @user.most_recent_album.present?
    json.most_recent_album @user.most_recent_album.id
  end
end


json.albums do
  @user.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :description, :artist_id
      json.image_url asset_path(album.image.url)
      json.track_ids do
        (json.array! (album.tracks.map(&:id)))
      end
    end
  end
end

json.tracks do
  @user.albums.flat_map(&:tracks).each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :order, :album_id
        json.audio_url asset_path(track.audio.url)
    end
  end
end
