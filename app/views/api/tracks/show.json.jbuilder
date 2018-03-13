json.extract! @track, :id, :title, :order, :album_id
json.image_url asset_path(@track.audio.url)

export const createAlbum = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks/",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
