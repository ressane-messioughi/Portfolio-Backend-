import { body } from "express-validator";

export const valideContact = [

body("subject")
.notEmpty()
.isLength({ min:2 , max:100}).withMessage("Le Sujet doit contenire minimum 2 caractères ❌"),
// body("email")
// .notEmpty()
// .isEmail(),
body("text")
.notEmpty()
.isLength({ min:10 , max:2000}).withMessage("Le Message doit contenire minimum 10 caractères ❌"),
]