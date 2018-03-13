export const getArtist = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const updateArtist = (user, formData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  });
};
