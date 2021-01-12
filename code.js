// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
  const numbers = A.reduce((sum, element) => {
    sum[element] = (sum[element] || 0) + 1;
    return sum;
  }, {});
  for (const [key, value] of Object.entries(numbers)) {
    if (value % 2) return Number(key);
  }
  return "nothing";

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function isValidParentheses(str) {
  let count = 0;
  for (let item of str.split("")) {
    item === "(" ? count += 1 : item === ")" ? count -= 1 : count += 0;
    if (count < 0) return false;
  }
  return !count;

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let vowels = /["aeiou"]/g;
  let match = str.match(vowels);
  return match !== null ? match.length : 0;
}

// make negative
function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}

// replace A => T, T => A, G => C, C => G
function DNAStrand(dna) {
  return [...dna].map((item) => DNAStrand.pairs[item]).join("");
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

//Complete the solution so that it reverses the string passed into it. 'world'  =>  'dlrow'
const reverseString = (str) => str.split("").reverse().join("");

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

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1 
// (Condition 2) not fulfilled).
function bouncingBall(height,  bounce,  windowHeight) {
  const BALL_FALL_DOWN = 1;
  const BALL_JUMP_UP = 1;
  if (height > 0 && bounce > 0 && bounce < 1 && windowHeight < height) {
    return BALL_FALL_DOWN + BALL_JUMP_UP + bouncingBall(height * bounce, bounce, windowHeight);
  }
}

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s) {
  const MAX_HOUR = 23, MAX_MINUTES = MAX_SECONDS= 59;
  const MIN_HOUR = MIN_MINUTES = MIN_SECONDS = 0;
  const SECONDS_IN_MINUTE = 60, SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
  const MILLI = 1000;
  const condition = h <= MAX_HOUR && h >= MIN_HOUR && m <= MAX_MINUTES && m >= MIN_MINUTES && s <= MAX_SECONDS && s >= MIN_SECONDS;
  if (condition) {
    return (h * SECONDS_IN_HOUR + m * SECONDS_IN_MINUTE + s) * MILLI;
  }
  return -1;
}

// Beaches are filled with sand, water, fish, and sun.
// Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
function getSumOfABeach(beach) {
  let words = ["sand", "water", "fish", "sun"];
  return words.reduce((sum, current) => {
    let matchesList = beach.toLowerCase().match(new RegExp(current, "g"));
    return matchesList !== null ? sum += matchesList.length : sum += 0;
  }, 0);
}
