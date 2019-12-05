/*
* Node.js Punycode
* https://www.javatpoint.com/nodejs-punycode
*
* Punycode is an encoding syntax which is used to convert Unicode (UTF-8) string of characters to basic ASCII string of characters.
* Since host names only understand ASCII characters so Punycode is used. It is used as an internationalized domain name (IDN or IDNA).
* Let's understand it with an example:
*
* Assume if you search for mañana.com in your browser so your browser (which is IDNA enabled) first convert this to punycode xn--maana-pta.com because the character ñ is not allowed in regular domain name.
* It is not supported in older versions.
*
* Punycode.js is bundled with Node.js v0.6.2 and later versions.
* If you want to use it with other Node.js versions then use npm to install punycode module first. You have to use require ('punycode') to access it.
* */

/*
* punycode.decode(string)
* It is used to convert a Punycode string of ASCII symbols to a string of Unicode symbols.
* */
function test1() {
    punycode = require('punycode');
    console.log(punycode.decode('maana-pta'));
}


/*
* punycode.encode(string)
* It is used to convert a string of Unicode symbols to a Punycode string of ASCII symbols. 
* */
function test2() {
    punycode = require('punycode');
    console.log(punycode.encode('☃-⌘'));
}

/*
* punycode.toASCII(domain)
* It is used to convert a Unicode string representing a domain name to Punycode. Only the non-ASCII part of the domain name is converted. 
* */
function test3() {
    punycode = require('punycode');
    console.log(punycode.toASCII('mañana.com'));
}

/*
* punycode.toUnicode(domain)
* It is used to convert a Punycode string representing a domain name to Unicode. Only the Punycoded part of the domain name is converted. 
* */
function test4() {
    punycode = require('punycode');
    console.log(punycode.toUnicode('xn--maana-pta.com'));
}

test1();
test2();
test3();
test4();