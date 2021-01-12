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
}
