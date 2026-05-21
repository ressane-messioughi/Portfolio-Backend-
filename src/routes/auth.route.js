import authController from "../controllers/auth.controller.js";
import authorize from "../middlewares/authorize.middleware.js";
import validate from "../middlewares/validate.js";
import {valideRegister, valideLogin} from "../validators/auth.validator.js"
import express from "express"

const router = express.Router()


router.post("/login", valideLogin, validate, authController.login)
router.post("/register", valideRegister , validate ,authController.registerUser)
router.get("/", authController.findAllUser)


export default router