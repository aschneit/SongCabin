@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :description, :artist_id
    json.artist album.artist.band_name
    json.image_url asset_path(album.image.url)
  end
end
