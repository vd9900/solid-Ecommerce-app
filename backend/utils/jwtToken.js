exports.sendToken = async (res, user, statusCode) => {
  try {
    const token = await user.getJWTToken();

    //options for cookie
    const options = {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 100),
      httpOnly: true,
    };
    res
      .status(statusCode)
      .cookie("token", token, options)
      .json({ sucess: true, user, token });
  } catch (error) {
    // console.log(error)
    res.status(404).json({ sucess: false, error });
  }
};
