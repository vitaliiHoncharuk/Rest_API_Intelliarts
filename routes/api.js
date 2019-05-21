let router = require("express").Router();

let productRouter = require("./products-router");

router.use("/products", productRouter);

module.exports = router;
