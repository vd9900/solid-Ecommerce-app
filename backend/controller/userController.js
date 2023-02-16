const user = require("../models/userModel");
const { sendToken } = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js");

// const comparePassword = user.comparePassword;

// Register

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await user.create({
      name,
      email,
      password,
      avatar: {
        public_id: "abc123",
        url: "profile_png",
      },
    });
    sendToken(res, newUser, 201);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

//Login user

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  //   check exist & correct password
  if (!email || !password) {
    return res.json({ error: "please enter email and password" });
  }
  const User = await user.findOne({ email }).select("+password");
  if (!User) {
    return res.json({ error: "user not exist" });
  }
  const isPasswordMatched = await User.comparePassword(password);

  if (!isPasswordMatched) {
    return res.json({ error: "wrong email or password" });
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
      error: "user not found",
    });
  } else {
    // get resetPassword Token
    const resetToken = await User.getResetPasswordToken();

    await User.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/vi/password/${resetToken}`;

    const message = `Your password reset link \n\n ${resetPasswordUrl}`;

    try {
      await sendEmail({
        email: User.email,
        subject: `E-commerce password Recovery`,
        message,
      });

      res.status(200).json({
        sucess: true,
        message: `Email sent to ${User.email} successfully!`,
      });
    } catch (error) {
      User.resetPasswordToken = undefined;
      User.resetPasswordExpire = undefined;
      await User.save({ validateBeforeSave: false });
      res.status(500).json(error.message);
    }
  }
};

//GET user detail

exports.getuserDetail = async (req, res, next) => {
  const User = await user.findById(req.user.id);

  res.status(200).json({
    sucess: true,
    User,
  });
};

exports.getUserForgotDetail = async (req, res) => {
  const User = await user.findById(req.user.id).select("+password");
  // console.log(User.password)

  const isOldPasswordMatch = await User.comparePassword(req.body.oldPassword);

  // if (!isOldPasswordMatch) {
  //   return res.status(400).json("old password is incorrect");
  // }

  // if (req.body.newPassword !== req.body.confirmPassword) {
  //   return res.status(400).json("old password is incorrect");
  // }

  User.password = req.body.confirmPassword;

  await User.save({ validateBeforeSave: false });

  sendToken(res, User, 201);
};

exports.updateProfile = async (req, res) => {
  const newUserDeatail = {
    name: req.body.name,
    email: req.body.email,
  };

  const User = await user.findByIdAndUpdate(req.user.id, newUserDeatail, {
    new: true,
    runValidators: true,
    useFindAndModifiy: false,
  });

  res.status(200).json({
    sucess: true,
    newUserDeatail,
  });
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
