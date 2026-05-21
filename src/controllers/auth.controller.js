import userService from "../services/user.service.js";

const login = async (req, res, next) => {
const {email, password} = req.body
console.log("BODY LOGIN:", req.body);
const token = await userService.loginUser({email, password})
return res.status(201).json({ token })
}
const registerUser = async (req, res, next) => {
const {firstname, lastname, email, password, role} = req.body
const newUser = await userService.registerUser({firstname,lastname, email, password, role})
return res.status(201).json({message: "Nouvelle utilisateur créer avec succès ! ✅", newUser})
}

const findAllUser = async (req, res, next) => {
const result = await userService.findAll()
return res.json(result)
}
export default {
    login,
    registerUser,
    findAllUser
}