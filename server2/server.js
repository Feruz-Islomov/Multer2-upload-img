const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "iuploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "." + file.mimetype.split("/")[1];
    // cb(null, Date.now() + path.extname(file.originalname));
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
const app = express();

app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(express.static("iuploads"));
app.post("/uploading", upload.single("file"), (req, res, next) => {
  res.send(req.body);
  console.log(req.file.filename);
});
app.get("/items", (req, res) => {
  res.sendFile("/1630587757897.jpeg");
});
app.listen("3002", () => {
  console.log("running on_3002");
});
