const cloudinary = require("cloudinary").v2;
console.log(
  process.env.CLOUD_NAME,
  process.env.CLOUD_API_KEY,
  process.env.CLOUD_SECRET
);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = cloudinary;
