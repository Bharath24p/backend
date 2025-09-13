const router=require('express').Router();
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controllers/product');
const  verifyTokenAndAdmin  = require('../../../../middleware/validateToken');
//CREATE
router.post("/",verifyTokenAndAdmin,createProduct); 
//UPDATE
router.put("/:id",verifyTokenAndAdmin,updateProduct);   
//DELETE
router.delete("/:id",verifyTokenAndAdmin,deleteProduct);
//GET PRODUCT
router.get("/find/:id",getProduct);
//GET ALL PRODUCTS
router.get("/",getAllProducts);
module.exports=router;