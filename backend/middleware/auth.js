const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const _auth = await req.headers.authorization;
    // console.log("token is here", _auth);
    if (!_auth) {
      res.status(401).json({ error: "Please login first" });
    } else {
      const decodedData = await jwt.verify(_auth, "GJ78LHUILY0HKLHKJ8T7GFHG");
      req.user = await User.findById(decodedData.id);

      next();
    }
  } catch (error) {
    res.status(500).json({ error: "something went wrong!" });
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
