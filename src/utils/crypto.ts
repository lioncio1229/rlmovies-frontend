import CryptoJS from "crypto-js";

export function encrypt(plainText: string) : void
{
    return CryptoJS.AES.encrypt(plainText, import.meta.env.VITE_PASSWORD_SECRET_KEY).toString();
}