
const {ProductService} = require("../services")

const productService = new ProductService();
const { SuccessCodes, ClientErrorCodes, ServerErrorCodes } = require("../utils/error-codes");

const upload = (req, res) => {

    try {
        if (!req.file) return res.status(ClientErrorCodes.BAD_REQUEST).send("No file uploaded");
        const filePath = req.file.path;

        const data = productService.uploadFile(filePath);

        return res.status(SuccessCodes.CREATED).json({
			data: data,
			success: true,
			err: {},
			message: "file data uploaded successfully",
		});

    } catch (error) {
		console.log(error);
		return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
			data: {},
			success: false,
			message: "Not able to upload file data",
			err: error,
		});
	}
}

module.exports = {
    upload,
}