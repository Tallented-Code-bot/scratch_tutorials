const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  hash: String,
  //salt: String,
});
const User = mongoose.model("user", UserSchema);

UserSchema.methods.setPassword = function (password) {
  const saltRounds = 10;

  //this.salt = crypto.randomBytes(16).toString("hex");

  bcrypt.hash(password, saltRounds, (err, hash) => {
    this.hash = hash;
  });
};

UserSchema.methods.checkPassword = function (password) {
  let result;
  bcrypt.compare(password, this.hash, (err, compareResult) => {
    result = compareResult;
  });
  return result;
};

module.exports = User;
