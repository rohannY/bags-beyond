const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/user.model");

exports.protect = asyncHandler(async (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken || !authToken.startsWith("Bearer")) {
        return next(new ErrorResponse("Forbidden", 403));
    }
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
        return next(new ErrorResponse("oyehoye", 403));
    }
    req.user = await User.findById(decoded.id).select("-password");
    next();
});