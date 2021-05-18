const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shopapi:shopapi@cluster0.genkf.mongodb.net/ProductDb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

// Open the connection to the server


router.get('/', homeController.getProducts);
router.get('/getallproducts', homeController.getProducts);
router.get('/products',homeController.getHome);
router.post('/addnewproduct', homeController.postData);
router.put('/updateProduct', homeController.updateProduct);
router.delete('/deleteProduct/:productId', homeController.deleteData);

module.exports = router;
