json.extract! user, :id, :band_name, :email, :band_description, :band_location, :band_website
json.image_url asset_path(user.image.url)
