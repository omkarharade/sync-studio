const express = require("express");
const router = express.Router();
const singleFileUpload = require("../middlewares/singleFileUpload");
const { upload } = require("../controllers/productController");

router.get("/check", function (req, res) {

    res.send({
        message : "check api output working"
    })
} )


router.post("/upload-csv", singleFileUpload, upload)


module.exports = router;

