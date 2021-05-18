const mongoose = require("mongoose");
const Products = require('../models/products');
const ProductsList = require('../models/ProductsList');





exports.getHome = (req, res) => {
    res.status(200).json({
        message:[{
            name: "Anil",
            location: "Bangalore",
        },
        {
            name: "Anil2",
            location: "Bangalore",
        },
        {
            name: "Anil3",
            location: "Bangalore",
        },
        {
            name: "Anil4",
            location: "Bangalore",
        }]
    });
};
exports.getProducts = (req, res) => {
    ProductsList.find().select().then((result) => {
        if (!result) {
            res.status(404).json({
                message: "product id  is not available",
                erro: err
            });
        }
        res.status(200).json({
            message: "Your List of products",
            productList: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Internal Server Error!",
            erro: err
        });
    });
}
// Post controller // 

exports.postData = (req, res, next) => {
    const product = new ProductsList({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price
    });
    console.log("product", product);
    product.save().then((result) => {
        console.log("result", result);
        res.status(201).json({
            message: "your product is created succefully",
            data: result
        });
        next();
    }).catch((err) => {
        res.status(400).json({
            message: "product is not created",
            errro: err
        });
    });
}


exports.updateProduct = (req, res, next) => {
    ProductsList.updateOne(
        {
        _id: req.body.id
        }, 
       {
           name: req.body.name,
           price:req.body.price
       }).then((result) => {
        console.log("result", result);
        res.status(201).json({
            message: "your product is Updated succefully",
            data: result
        });
        next();
    }).catch((err) => {
        res.status(400).json({
            message: "product is not upfated!",
            errro: err
        });
    });
}
exports.deleteData = (req, res, next) => {
    const _id = req.params.productId;
    ProductsList.remove({ _id: _id }).exec().then(result => {
        res.status(201).json({
            message: "This product is deleted successfully! " + _id,
            deletedProduct: result
        });
        next();
    }).catch((error) => {
        console.log(error);
        res.status(500).json({
            message: "this product is not existed",
            error: err
        });
    });
}


