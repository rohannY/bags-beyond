const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  address: {
    type: String,
    required: [false],
  },
  isAdmin:{
    type:Boolean,
    default:false,
  }
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.getSignToken = function () {
  return jwt.sign({ id: this._id, isAdmin:this.isAdmin }, process.env.JWT_SECRET);
};

userSchema.methods.matchPassword = async function (passwordEntered) {
  return await bcrypt.compare(passwordEntered + "", this.password + "");
};

module.exports = mongoose.model("User", userSchema);
