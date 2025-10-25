import User from "../modules/user.js";


export function register(email, password){
    return User.create({email, password});
}