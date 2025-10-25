import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/constants.js";

export function authMiddleware(req, res, next){
    const token = req.cookies['auth'];

    if(!token){
        return next();
    }

    try{
        const decodeToken = jwt.verify(token, JWT_SECRET);
        req.user = decodeToken;
        req.isAuthenticated = true;

        next()
    }catch(err){
        res.clearCookie('auth');
        res.redirect('/users/login');
    }
}