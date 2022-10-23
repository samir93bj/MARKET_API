import express from "express";

import {router as productRouter } from "../routes/producto.router.js";
import {router as carritoRouter } from "../routes/carrito.router.js";

const router = express.Router();

function apiRouter(app){
    app.use('/api',router);
    router.use('/productos', productRouter);
    router.use('/carrito', carritoRouter);
}

export { apiRouter };
