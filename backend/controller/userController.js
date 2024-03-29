const user = require("../models/userModel");
const { hashPassword } = require("../utils/hashPassword");
const { sendToken } = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js");
const storeImage = require("../utils/storeImage");

// const comparePassword = user.comparePassword;
storeImage.config({
  cloud_name: "dtsxq1mlu",
  api_key: "567644344666746",
  api_secret: "W0wiwCrwT9KxRvuDEbsTrbsaGss",
});

// Register

exports.registerUser = async (req, res, next) => {
  try {
    const checkUser = await user.findOne({ email: req.body.email });

    if (checkUser)
      return res
        .status(500)
        .json({ sucess: false, error: { email: "User already exist" } });

    const { username, email, password } = req.body;
    const securePass = await hashPassword(password);
    // console.log(req.body);
    const newUser = await user.create({
      username,
      email: String(email).toLowerCase(),
      password: securePass,
      avatar: {
        public_id: "me",
        url: "https://res.cloudinary.com/dtsxq1mlu/image/upload/v1681038720/user_Profiles/jgcd594knxu01_kf2yzy.webp",
      },
    });

    // console.log(newUser);
    newUser.save((err) => {
      if (err)
        return res
          .status(500)
          .json({ sucess: false, error: "Something went wrong" });
      res.status(201).json({ sucess: true, data: "new account created" });
    });
    await sendToken(res, newUser, 201);
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, error: "Something went wrong,Try agian later" });
    // console.log(error.message);
  }
};

//Login user

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  //   check exist & correct password
  try {
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
  } catch (error) {
    console.log(error);
    return res.json({
      error: { email: "Something went wrong, Try again later" },
    });
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
  const email = String(req?.query?.email).toLowerCase();
  // console.log(email);
  try {
    const User = await user.findOne({ email: email });
    if (!User) {
      res.status(404).json({
        success: false,
        error: { email: "User not found" },
      });
    } else {
      // generate random 4 digit otp
      let randomNum = (Math.floor(Math.random() * 9000) + 1000).toString();
      console.log(randomNum);
      req.session.otp = randomNum;

      sendEmail(req.body.email, randomNum)
        .then((message) => {
          res.status(200).json({
            sucess: true,
            message: message,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json(error.message);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

// upload user profile image

exports.addUserProfileImage = async (req, res, next) => {
  // console.log(
  //   process.env.CLOUD_NAME,
  //   process.env.CLOUD_API_KEY,
  //   process.env.CLOUD_SECRET
  // );
  const { image } = req.body;
  try {
    const result = await storeImage.uploader.upload(image, {
      folder: "user_Profiles",
    });
    const NewUser = await user.findOneAndUpdate(
      { email: req.user.email },
      {
        avatar: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      }
    );
    res.status(201).json({
      success: true,
      message: NewUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
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
  console.log("hello", req.query.otp);
  console.log("me", req.session.otp);
  try {
    if (req.query.otp === req.session.otp) {
      req.session.isMatched = true;
      res.status(200).json({
        success: true,
        data: "OTP matched!",
      });
    } else {
      if (!req.session.otp) {
        res.status(200).json({
          success: false,
          error: "OTP exipred",
        });
      } else {
        res.status(200).json({
          success: false,
          error: "OTP does not match!",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      error: "Something went wrong!",
    });
  }
};

exports.createNewPassword = async (req, res) => {
  // console.log(req.body);
  const password = req.body.password;
  const email = req.body.email;
  console.log(email, password);
  console.log("jello");
  console.log(req.session);
  try {
    const User = await user.find({ email });
    // console.log(User);
    if (User) {
      const securePass = await hashPassword(password);
      const UpdateUserPassword = await user.updateOne(
        { email: req.body.email },
        {
          $set: {
            password: securePass,
          },
        }
      );
      console.log(UpdateUserPassword);
      if (UpdateUserPassword.acknowledged) {
        res.status(201).json({
          success: true,
          data: "password has been changed",
        });
      } else {
        res.status(404).json({
          success: false,
          data: "something went worng!",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "something went worng!",
    });
  }
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
      message: "profile updated",
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
    success: true,
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
