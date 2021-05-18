const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log("===================", req);
    const products = {
        name: req.body.name,
        id: req.body.id
    }
    console.log(products);
    res.render("single-product");
  });                                                                                                                                                   

module.exports = router;
