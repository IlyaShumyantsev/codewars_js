//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" 
const toCamelCase = str => {
  let regExp = /[-_](?<letter>\w)/g;
  return str.replace(regExp, (_, letter) => letter.toUpperCase());
};

//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
const disemvowel = str => str.replace(/[aeiou]/gi, "");

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.
//"a" = 1, "b" = 2, etc.
//alphabetPosition("The sunset sets at twelve o' clock.")
function alphabetPosition(text) {
  const SHIFT_CHAR_CODE = 64;
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - SHIFT_CHAR_CODE)
    .join(" ");
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  let counterX = 0, counterO = 0;
  [...str].map((item) => {
    item.toLowerCase() === "x" ? ++counterX : item.toLowerCase() === "o" ? ++counterO : item;
  });
  return counterO - counterX === 0 ? true : false;
}

// этот вариант лучше
function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
