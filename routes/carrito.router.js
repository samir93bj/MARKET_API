import express from "express";
import CarroService from "../service/carrito.service.js";

const router = express.Router();
const service = new CarroService;

router.get("/", async(req, res, next) => {

    try{

        const carros = await service.list();

        res.status(200).json({
            msg: "get carritos",
            carros
        });
    }
    catch(error){
        next(error);
    }
});

router.get("/:id", async(req, res, next) => {
    try{
        res.status(200).json({
            msg: "get carrito"
        });
    }
    catch(error){
        next(error);
    }
});

router.post("/", async(req, res, next) => {
    try{
        res.status(201).json({
            msg: "get carrito"
        });
    }
    catch(error){
        next(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try{
        res.status(200).json({
            msg: "put carrito"
        });
    }
    catch(error){
        next(error);
    }
});

router.delete("/:id", async(req, res, next) => {
    try{
        res.status(200).json({
            msg: "delete carrito"
        });
    }
    catch(error){
        next(error);
    }
});

export { router }