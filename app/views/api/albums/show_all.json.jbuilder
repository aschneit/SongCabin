json.extract! @album, :id, :title, :description, :artist_id
json.image_url asset_path(@album.image.url)
json.track_ids do
  (json.array! (@album.tracks.map { |track| track.id }))
end
