export const createTrack = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks/",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
