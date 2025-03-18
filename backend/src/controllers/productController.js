
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


const getByCategory = async (req, res) => {

	try {

		const category = req.body.category;

		const data = await productService.getProductsByCategory(category);

		return res.status(SuccessCodes.OK).json({
			data: data,
			success: true,
			err: {},
			message: "product data fetched by category successfully",
			count: data.length
		});

	} catch (error) {
		console.log(error);
		return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
			data: {},
			success: false,
			message: "unable to fetch products data by category",
			err: error,
		});
	}
}

const getBySubCategory = async (req, res) => {

	try {
		
		const subCategory = req.body.subCategory;

		const data  = await productService.getProductsBySubCategory(subCategory);

		return res.status(SuccessCodes.OK).json({
			data: data,
			success: true,
			err: {},
			message: "product data fetched by sub-category successfully",
			count: data.length
		});

	} catch (error) {
		console.log(error);
		return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
			data: {},
			success: false,
			message: "unable to fetch products data by sub-category",
			err: error,
		});
	}
}

const getByPartNumber = async (req, res) => {

	try {
		
		const partNumber = req.body.partNumber;

		const data = await productService.getProductsByPartNumber(partNumber);

		return res.status(SuccessCodes.OK).json({
			data: data,
			success: true,
			err: {},
			message: "product data fetched by part no. successfully",
		});
		
	} catch (error) {
		return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
			data: {},
			success: false,
			message: "unable to fetch products data by part no.",
			err: error,
		});
	}
}

const getCategories = async (req, res) => {

	try {
		const categories = await productService.getAllCategories();

		return res.status(SuccessCodes.OK).json({
			data: categories,
			success: true,
			err: {},
			message: "product categories fetched successfully",
		});

	} catch (error) {
		return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
			data: {},
			success: false,
			message: "unable to fetch product categories",
			err: error,
		});
	}
}

const getSubCategories = async (req, res) => {

	try {

		const category = req.body.category;
		console.log("category === ", category);
		const subCategories = await productService.getAllSubCategories(category);

		return res.status(SuccessCodes.OK).json({
			data: subCategories,
			success: true,
			err: {},
			message: "product subcategories fetched successfully",
		});

	} catch (error) {
		
	}
}

module.exports = {
    upload,
	getByCategory,
	getBySubCategory,
	getByPartNumber,
	getCategories,
	getSubCategories
}