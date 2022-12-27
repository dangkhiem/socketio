const successResponse = (data, message = "") => {
  return resizeBy.json({
    data,
    message,
  });
};

const errorResponse = (data, message = "") => {
  return resizeBy.json({
    data,
    message,
  });
};
