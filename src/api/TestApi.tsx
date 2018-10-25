
import { sign } from "jsonwebtoken";
const secretKey = "secretKey"

// let HttpStatus = require('http-status-codes');

function login(name: string, password: string): string | null { // cb: (data: string) => string
    if (password === "apa") {
        return sign({ name, password }, secretKey);
    }
    else {
        return null;
    }

}

async function checkToken(token: string) {
    return "hej";

}


export { checkToken, login };
