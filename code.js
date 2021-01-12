//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" 
const toCamelCase = str => {
  let regExp = /[-_](?<letter>\w)/g;
  return str.replace(regExp, (_, letter) => letter.toUpperCase());
};