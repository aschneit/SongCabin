export const getArtist = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};
