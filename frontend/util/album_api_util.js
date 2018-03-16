export const getAlbumTracks = id => {
  return $.ajax({
    method: "GET",
    url: `/api/albums/${id}`
  });
};

export const getAlbums = () => {
  return $.ajax({
    method: "GET",
    url: "/api/albums/"
  });
};

export const createAlbum = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/albums/",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
