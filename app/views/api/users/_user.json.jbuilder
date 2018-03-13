json.extract! user, :id, :band_name, :email, :band_description, :band_location, :band_website
json.image_url asset_path(user.image.url)
json.most_recent_album user.most_recent_album.id
