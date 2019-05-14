let apiRouter = require("express").Router();

let productRouter = require("./products-router");

apiRouter.use("/products", productRouter);

module.exports = apiRouter;
