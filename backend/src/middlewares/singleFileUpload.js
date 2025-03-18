const multer = require("multer");

// Configure Multer for file uploads
const upload = multer({ dest: "uploads/" });

const singleFileUpload = upload.single("file");

module.exports = singleFileUpload;