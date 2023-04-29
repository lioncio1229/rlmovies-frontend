import CryptoJS from "crypto-js";

export function encrypt(plainText: string) : void
{
    return CryptoJS.AES.encrypt(plainText, 'kXp2r5u8x/A?D(G+').toString();
}