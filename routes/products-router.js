let productsRouter = require("express").Router();
let {
    getLastElement,
    report,
    getAll
} = require("../controllers/product-controller");

// /api/product/

productsRouter.get('/', getAll);

productsRouter.get('/purchase', getLastElement);

productsRouter.get('/report', report);

productsRouter.post('/', productController.registerProduct);

productsRouter.delete('/:date', productController.deleteByDate);


module.exports = productsRouter;
