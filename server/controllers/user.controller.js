const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/user.model");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Register User
// @route   POST /user/reg
// @access  Public
exports.createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password,isAdmin} = req.body;
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    return next(new ErrorResponse(`Email already exists`, 400));
  } else {
    await User.create(req.body);
    res.status(200).json({ success: true });
  }
});

// @desc    Login User
// @route   POST /user/login
// @access  Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.matchPassword(password))) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }
  const jwtToken = user.getSignToken();
  const userData = {
    success: true,
    name: user.name,
    token: jwtToken,
  };
  res.status(200).json(userData);
});

// @desc    Get User Information
// @route   GET /user/acc
// @access  Private
exports.getUser = asyncHandler(async (req, res, next) => {
  const { name, email, address } = await User.findById(req.user.id);
  res.status(200).json({ name, email, address });
});

// @desc    Update User Information
// @route   PUT /user/acc
// @access  Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// @desc    Delete User
// @route   Delete /user/acc
// @access  Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
