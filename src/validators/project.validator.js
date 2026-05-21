import { body, param } from "express-validator"

export const valideProject = [
param('id').isNumeric().optional(),
body("title")
    .notEmpty().withMessage("Le Titre est obligatoire ! ❌")
    .isLength({ min : 2}).withMessage("Le Titre doit contenir minimum 2 caractères ❌"),
body("description")
    .optional()
    .isLength({ max: 2000}),
body("tech_stack")
    .optional()
    .isLength({ max: 255}),
body("github_url")
  .optional({ checkFalsy: true })
  .isURL(),

body("demo_url")
  .optional({ checkFalsy: true })
  .isURL(),

body("image_url")
  .optional({ checkFalsy: true })
  // .isURL(),

]