const { encryptString, decryptString } = require('simple-encrypter');

/**
 * encrypt String
 * 
 * @param string normalString un ecrypted string
 * 
 * @return string encrypted string
 */
export function encrypt(normalString) {
    normalString        = String(normalString);
    let encryptedString = '';

    if (typeof normalString !== 'undefined' && normalString.length > 0) {
        encryptedString = encryptString(normalString);
    }

    return encryptedString;
}


/**
 * decrypt String
 * 
 * @param string encryptedString
 * 
 * @return string decrypted string
 */
export function decrypt(encryptedString) {
    let decryptedString = '';

    if (typeof encryptedString !== 'undefined' && encryptedString.length > 0) {
        decryptedString = decryptString(encryptedString);
    }

    return decryptedString;
}