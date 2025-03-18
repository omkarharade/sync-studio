const express = require("express");
const router = express.Router();
const singleFileUpload = require("../middlewares/singleFileUpload");
const { upload, getByCategory, getBySubCategory, getByPartNumber, getCategories, getSubCategories } = require("../controllers/productController");

router.get("/check", function (req, res) {

    res.send({
        message : "check api output working"
    })
} )


router.post("/upload-csv", singleFileUpload, upload)

router.get("/products/category/", getByCategory);
router.get("/products/sub-category/", getBySubCategory);
router.get("/products/part-number/", getByPartNumber)
router.get("/products/categories/", getCategories)
router.get("/products/sub-categories/", getSubCategories)



module.exports = router;

