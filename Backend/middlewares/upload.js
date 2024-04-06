const multer = require("multer");
// const fs = require("fs");
const filepath = require("path");

const filter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limit = (req, file, cb) => {
  if (file.fileSize == 1024 * 1024) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const itemimgstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    checkDir("itemImage")
    cb(null, filepath.join(__dirname, "../public/images/itemImages"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const itemImage = multer({
  storage: itemimgstorage,
  fileFilter: filter,
  limits: limit,
});

module.exports = { itemImage };
