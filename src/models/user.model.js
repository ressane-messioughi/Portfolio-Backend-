import db from "../config/db.js"

const findByEmail = async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [result] = await db.query(sql,[email]);
    return result 
}
const register = async (firstname,lastname,email,hashedPassword,role) => {
    const sql = "INSERT INTO users (firstname,lastname,email,password,role) VALUES (?,?,?,?,?)"
    const [result] = await db.query(sql, [firstname, lastname, email, hashedPassword, role])
    return result
}
const userFindAll = async () => {
const sql = "SELECT * FROM users"
const [result] = await db.query(sql) 
return result
}
export default {
    findByEmail,
    register,
    userFindAll
}