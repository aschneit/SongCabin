export const getAlbums = (query) => {
  return $.ajax({
    method: "GET",
    url: "/api/albums/",
    data: {query}
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
