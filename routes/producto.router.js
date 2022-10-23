import express from "express";
import ProductService from "../service/producto.service.js";

const service = new ProductService();
const router = express.Router();

router.get("/", async(req,res,next) => {

    try{

        const products = await service.list();

        res.status(200).json({
            msg: "Get products",
            products
        });
        
    }catch(err){
        next(err);
    }

});

router.get("/:id", async(req,res,next) => {

    try{
        res.status(200).json({
            msg: "Get product id"
        });
    }catch(err){
        next(err);
    }

});

router.post("/", async(req,res,next) => {

    try{
        res.status(200).json({
            msg: "post products"
        });
    }catch(err){
        next(err);
    }

});

router.delete("/:id", async(req,res,next) => {

    try{
        res.status(200).json({
            msg: "delete products"
        });
    }catch(err){
        next(err);
    }

});

router.put("/:id", async(req,res,next) => {

    try{
        res.status(200).json({
            msg: "put products"
        });
    }catch(err){
        next(err);
    }

});

export { router };