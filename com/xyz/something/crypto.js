/*
* Node.js Crypto
* https://www.javatpoint.com/nodejs-crypto
*
* The Node.js Crypto module supports cryptography.
* It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions.
*
* What is Hash
* A hash is a fixed-length string of bits i.e. procedurally and deterministically generated from some arbitrary block of source data.
*
* What is HMAC
* HMAC stands for Hash-based Message Authentication Code. It is a process for applying a hash algorithm to both data and a secret key that results in a single final hash.
* */

// Encryption Example using Hash and HMAC
function test1() {
    const crypto = require('crypto');
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
        .update('Welcome to JavaTpoint')
        .digest('hex');
    console.log(hash);
}

// Encryption example using Cipher
function test2() {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', 'a password');
    var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
}

// Decryption example using Decipher
function test3() {
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', 'a password');
    var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
}

// test1();
// test2();
test3();