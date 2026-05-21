import express from "express"
import contactController from "../controllers/contact.controller.js";
import { valideContact } from "../validators/contact.validator.js";
import validate from "../middlewares/validate.js";

const router = express.Router();

router.post('/',valideContact, validate, contactController.sendSimpleEmail);

export default router;
