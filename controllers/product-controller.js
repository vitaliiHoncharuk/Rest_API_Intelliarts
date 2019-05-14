let Products = require("../models/products");

let productController = {};



productController.getAll = async (req, res, next) => {
    try {
        res.status(200).json(await Products.aggregate(
            [
                {
                    $group: {
                            _id: "$date",
                            item: {$push: "$item"},
                            price: {$push: "$price"},
                            currency: {$push: "$currency"}
                            }
                },
                { $sort :{_id:-1}}
            ]
        ).sort({date : 1}));
    }
    catch (e) {
        next(e);
    }
};

productController.getLastElement =  async (req, res, next) => {
    try {
        res.status(200).json(await Products.find().sort({'_id':-1}).limit(1));
    }
    catch (e) {
        next(e);
    }
};

productController.registerProduct = async (req, res, next) => {
    try {
        let body = req.body;
        let dateTime = new Date(body.date).getTime();
        res.status(201).json(Products.create(await addProduct(body.date,body.price,body.currency,body.item,dateTime)));
    }
    catch (e) {
        next(e);
    }
};


productController.deleteByDate = async (req, res, next) => {
    try {
        let reqDate =(new Date(req.body.date));
        reqDate.setUTCHours(0);
        reqDate.setDate(reqDate.getDate()+1);
        res.status(202).json(await Products.deleteMany({date : reqDate}));
    }
    catch (e) {
        next(e);
    }
};

productController.report = async (req, res, next) => {
    try {
        res.status(200).json(await Products.aggregate(
            [
                {
                    $group : {
                        _id : { currency:  "$currency" , year : { $year: "$date" }  },
                        sum : { $sum : "$price"},

                    }

                },
            ]
        ));
    }
    catch (e) {
        next(e);
    }
};


module.exports = productController;





async function addProduct(date,price,currency,item,dateTime) {
    await  Products.create({
        date : new Date(date),
        price: price,
        currency : currency,
        item : item,
        dateTime : dateTime
    });
}
