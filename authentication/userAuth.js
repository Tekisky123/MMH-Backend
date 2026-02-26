import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

let verifyToken = (token) => {
    let SEC_KEY = process.env.SEC_KEY;
    try {
        let data = jwt.verify(token, SEC_KEY);
        return data.email;
    } catch (error) {
        return "invalid token"
    }
}
let getToken = (email) => {
    let SEC_KEY = process.env.SEC_KEY;
    let token = jwt.sign({ email: email }, SEC_KEY, { expiresIn: "120h" });
    return token;
}
let passwordHash = async (userPassword) => {
    try {
        let hashPass = await bcrypt.hash(userPassword, 10);
        return hashPass;
    } catch (error) {
        console.log(`error while hasshing password`)
    }
}
let checkPassword = async (plainPassword, dbPass) => {
    try {
        let status = await bcrypt.compare(plainPassword, dbPass);
        return status;
    } catch (error) {
        console.log(error)
    }
}

export { passwordHash, checkPassword, getToken, verifyToken }