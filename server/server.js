const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const cors = require("cors");
const fs = require("fs");
const PORT = 3001;

const app = express();
app.use(express.static("./uploads"));
app.use(cors());
app.post("/uploading", upload.single("file"), (req, res, next) => {
  console.log(req.file, req.body.name);
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;

  fs.rename(`./uploads/${req.file.filename}`, newFileName, () => {
    console.log("renamed");
  });
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("running on: ", PORT);
});
