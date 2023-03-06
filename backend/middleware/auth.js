const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = await req.cookies;
  // console.log(token);
  if (!token) {
    res.status(401).json({ error: "Please login first" });
  } else {
    const decodedData = jwt.verify(token, "GJ78LHUILY0HKLHKJ8T7GFHG");
    req.user = await User.findById(decodedData.id);
    // console.log(req.user);
    next();
  }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({ error: "your not allowed to access this" });
    } else {
      next();
    }
  };
};
