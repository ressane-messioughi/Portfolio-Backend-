
import {body} from "express-validator"


export const valideRegister = [
    body("firstname") 
        .notEmpty().withMessage("Le Prénom est obligatoire ! ❌"),
    body("lastname")
        .notEmpty().withMessage("Le Nom est obligatoire ! ❌"),
    body("email")
        .notEmpty().withMessage("L'Email ne peut pas être vide ! ❌")
        .isEmail().withMessage("Format de l'email invalide ! ❌"),
    body("password") 
        .notEmpty().withMessage("Le mots de passe est obligatoire pour pouvoir s'inscrire ❌")
        .isLength({ min: 6 }).withMessage('Le mot de passe doit comporter au moins 6 caractères ❌'),
    

]
export const valideLogin = [
    body("email")
        .notEmpty().withMessage("L'Email ne peut pas être vide ! ❌")
        .isEmail().withMessage("Format de l'email invalide ! ❌"),
    body("password") 
        .notEmpty().withMessage("Le mots de passe est obligatoire pour pouvoir s'inscrire ❌")
        .isLength({ min: 6 }).withMessage('Le mot de passe doit comporter au moins 6 caractères ❌'),
    

]