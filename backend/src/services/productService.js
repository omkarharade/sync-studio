const {ProductRepository} = require("../repository/index")


class ProductService {
    
    constructor(){

        this.productRepository = new ProductRepository();
    }

    uploadFile(filePath){

        try {

            this.productRepository.uploadProductData(filePath);

        } catch (error) {
            console.log("something went wrong in productRepository - upload file")
            throw {error}
        }
    }
}

module.exports = ProductService;

