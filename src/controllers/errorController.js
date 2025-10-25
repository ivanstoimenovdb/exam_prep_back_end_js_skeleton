import { Router } from "express";

const errorController = Router();

errorController.all('/*path', (req, res) => {
    res.send('Not found !');
})

export default errorController;