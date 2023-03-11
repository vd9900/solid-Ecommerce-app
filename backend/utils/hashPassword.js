const bcrypt = require("bcryptjs");

exports.hashPassword = async function (password) {
  const hashedpassword = await bcrypt.hash(password, 10);
  return hashedpassword;
};
