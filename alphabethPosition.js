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

