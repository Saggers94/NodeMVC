const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");
// const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
// you shouldn't execute the function, instead you just pass the reference to the function
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

// exports.routes = router;
module.exports = router;
// exports.products = products;
