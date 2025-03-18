const {ProductRepository} = require("../repository/index")


class ProductService {
    
    constructor(){

        this.productRepository = new ProductRepository();
    }

    uploadFile(filePath){

        try {

            this.productRepository.uploadProductData(filePath);

        } catch (error) {
            console.log("something went wrong in product service > upload file", error)
            throw {error}
        }
    }

    async getProductsByCategory(category){

        try {
            const productsData = await this.productRepository.getAllProductsByCategory(category);
            return productsData;
            
        } catch (error) {
            console.log("error from product service > getProductsByCategory", error);
            throw error;
        }
    }

    async getProductsBySubCategory(subCategory){

        try {
            const productsData = await this.productRepository.getAllProductsBySubCategory(subCategory);
            return productsData;

        } catch (error) {
            console.log("error from product repository > getProductsBySubCategory", error);
        }
    }

    async getProductsByPartNumber(partNumber){

        try {
            const productsData = await this.productRepository.getProductsByPartNumber(partNumber);
            return productsData;

        } catch (error) {
            console.log("error from product service > getProductsByPartNumber", error);
            throw error;
        }
    }

    async getAllCategories(){

        try {
            const categories = await this.productRepository.getAllCategories();
            return categories;

        } catch (error) {
            console.log("error from product service > getAllCategories", error);
            throw error;
        }
    }

    getAllSubCategories(category){

        try {
            const subCategories = this.productRepository.getAllSubCategories(category);
            return subCategories;
        } catch (error) {
            console.log("error from product service > getAllSubCategories", error);
            throw error;
        }
    }
}

module.exports = ProductService;

