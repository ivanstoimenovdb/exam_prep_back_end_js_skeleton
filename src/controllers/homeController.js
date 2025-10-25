import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('It works!');
});

homeController.post('/', (req, res) =>{
    res.send('It works!');
    console.log(req.body);
    
});

export default homeController;