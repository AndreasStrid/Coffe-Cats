import axios from "axios";
// import * as request from 'request';
import { API_URL } from '../content/Variables'


async function login(name: string, password: string) {

    return await axios.post(API_URL.base + API_URL.loginIn, { name, password })
        .then((res) => {
            // tslint:disable-next-line:no-console
            console.log(res);
            return res;
        })
        .catch((error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
            return error;
        });
}

async function checkToken(token: string | null) {
    return await axios.post(API_URL.base + API_URL.checkToken, { token })
        .then((res) => {
            // tslint:disable-next-line:no-console
            console.log(res);
            return res;
        })
        .catch((error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
            return error;
        });
}

// AxiosResponse<boolean>


// function checkToken(token: string | null): boolean {
//     // async (accessToken, refreshToken, profile, done) => {
//     const apa = async (token: string | null) => {
//         const response = await axios.post(API_URL.base + API_URL.checkToken, { token: token })
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
//     return true;
// }

export { checkToken, login };
