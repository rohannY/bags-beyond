const multer = require('multer');
const uniqid = require('uniqid'); 
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + uniqid() + path.extname(file.originalname))
    }
});

const upload = multer({ storage : storage });

const cloudinary = require("cloudinary").v2;
const fs = require('fs')


// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

async function uploadToCloudinary(locaFilePath) {
  var mainFolderName = "main"
  var filePathOnCloudinary =mainFolderName + "/" + path.basename(locaFilePath);
  return cloudinary.uploader.upload(locaFilePath,{"public_id":filePathOnCloudinary})
  .then((result) => {
    fs.unlinkSync(locaFilePath)
    return {
      message: "Success",
      url:result.url
    };
  }).catch((error) => {
    fs.unlinkSync(locaFilePath)
    return {message: "Fail",};
  });
}

function buildSuccessMsg(urlList){
    var response = [];
    for(var i=0;i<urlList.length;i++){
      response.push(urlList[i]);
    }
    return response;  
  }

  module.exports={uploadToCloudinary,buildSuccessMsg,upload};