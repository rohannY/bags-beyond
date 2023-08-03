const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV == "development") console.log(err);
    const error = { ...err };
    error.message = err.message;
    error.name = err.name;
    
  res
  .status(error.status || 500)
  .json({ success: false, error: error.message || "Internal Server Error" });
};
module.exports = errorHandler;
