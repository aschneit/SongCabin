export const getArtist = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const updateArtist = (artist, formData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${artist.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  });
};
