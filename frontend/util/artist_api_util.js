export const getArtist = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const updateArtist = artist => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${artist.id}`,
    data: {artist}
  });
};
