import {Request, Response} from "express";
import EmailService from "../services/EmailService";

const users = [
    {name:"Carlos Eduardo", email:'carlos@gmail.com'}
];

export default {
    async index(req:Request, res:Response){
        return res.json(users);
    },
    async create(req:Request, res:Response){
       const emailService = new EmailService(); 
        emailService.sendMail({
          to: {name:"Carlos", email:"carlos@gmail.com"},
           message:{subject:"Test email", body:"this is a test email"}
        });

        return res.send("Worked!!");
    }
}