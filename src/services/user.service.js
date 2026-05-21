import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import AppError from "../errors/AppError.js"
import jwt from "jsonwebtoken"



const registerUser = async ({firstname,lastname,email,password,role}) => {
    const existingUser = await userModel.findByEmail(email)
    if (existingUser.length > 0) {
        throw new AppError("❌ Email déjà utilisé ❌")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await userModel.register(firstname,lastname,email,hashedPassword,role)
    return result 
}

const loginUser = async ({ email, password }) => {
const user = await userModel.findByEmail(email)
 if (user.length === 0) {
        throw new AppError("❌ Email ou mot de passe incorrect", 401);
    }
const users = user[0]

const isPasswordValid = await bcrypt.compare(password, users.password);
if (!isPasswordValid) {
        throw new AppError("❌ Email ou mot de passe incorrect", 401);
}
const token = jwt.sign({
    user_id: users.id, firstname: users.firstname, email: users.email, role: users.role},
    process.env.JWT_SECRET,
    {expiresIn: "1d"}
);
return token
}
const findAll = async () => {
const result = await userModel.userFindAll() 
return result
}
export default {
    loginUser,
    registerUser,
    findAll
}