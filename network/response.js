exports.success = function (req, res, data, status) {
  res.status(status || 200).send({
    error: false,
    body: data,
  });
};

exports.error = function (req, res, message, status) {
  let statusCode = status || 500;
  let statusMessage = message || "Internal server error";
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: statusMessage,
  });
};
