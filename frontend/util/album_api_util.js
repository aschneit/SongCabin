export const getAlbumTracks = id => {
  return $.ajax({
    method: "GET",
    url: `/api/albums/${id}`
  });
};
