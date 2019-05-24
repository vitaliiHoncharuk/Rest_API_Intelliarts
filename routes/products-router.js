let productsRouter = require("express").Router();
let productController = require("../controllers/product-controller");


productsRouter.get('/', productController.getAll);

productsRouter.get('/purchase', productController.getLastElement);

productsRouter.get('/report', productController.report);

productsRouter.post('/', productController.registerProduct);

productsRouter.delete('/',productController.deleteByDate);


module.exports = productsRouter;
