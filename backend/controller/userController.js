const user = require("../models/userModel");
const { sendToken } = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js");

// const comparePassword = user.comparePassword;

// Register

exports.registerUser = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const newUser = await user.create({
      username,
      email,
      password,
      avatar: {
        public_id: "abc123",
        url: "profile_png",
      },
    });
    console.log(newUser);
    sendToken(res, newUser, 201);
  } catch (error) {
    res.status(500).json({ sucess: false, error: error.message });
    // console.log(error.message);
  }
};

//Login user

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  //   check exist & correct password
  if (!email || !password) {
    return res.json({ error: "please enter email and password" });
  }
  const User = await user.findOne({ email }).select("+password");
  if (!User) {
    return res.json({ error: { email: "user not exist" } });
  }
  const isPasswordMatched = await User.comparePassword(password);

  if (!isPasswordMatched) {
    return res.json({ error: { password: "wrong password" } });
  } else {
    sendToken(res, User, 200);
  }
};

// Logout  user

exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    sucess: true,
    message: "logout sucessed",
  });
};

// forgot password

exports.forgotPassword = async (req, res, next) => {
  const User = await user.findOne({ email: req.body.email });
  if (!User) {
    res.status(404).json({
      success: false,
      error: "user not found",
    });
  } else {
    try {
      // generate random 4 digit otp
      let randomNum = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");
      console.log(randomNum);

      sendEmail(req.body.email, randomNum)
        .then((message) => {
          req.session.otp = randomNum;
          res.status(200).json({
            sucess: true,
            message: message,
          });
        })
        .catch((error) => {
          res.status(500).json(error.message);
        });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

//GET user detail

exports.getuserDetail = async (req, res, next) => {
  try {
    const User = await user.findOne({ email: req.user.email });
    console.log(User);
    res.status(200).json({
      sucess: true,
      message: User,
    });
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: error,
    });
  }
};

exports.checkOTP = async (req, res) => {
  console.log(req.body);
  console.log(req.session);
  res.json("hello");
  // sendToken(res, User, 201);
};

exports.updateProfile = async (req, res) => {
  try {
    const User = await user.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModifiy: false,
    });

    res.status(200).json({
      sucess: true,
      newUserDeatail,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// get all user detail
exports.getAllUser = async (req, res) => {
  const User = await user.find();
  if (!User) {
    return res.status(404).json("user not founded");
  }
  res.status(200).json({
    sucess: true,
    User,
  });
};

// get one user (admin)

exports.getOneUser = async (req, res) => {
  const User = await user.findById(req.query.id);
  if (!User) {
    return res.status(404).json("user not founded");
  }
  res.status(200).json({
    sucess: true,
    User,
  });
};
