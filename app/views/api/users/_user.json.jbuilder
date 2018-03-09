json.extract! user, :id, :band_name, :email, :band_description, :band_location, :band_website

json.album_ids do
  (json.array! (user.albums.map { |album| album.id }))
end
