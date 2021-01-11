// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function validParentheses(str) {
  return str.split("").reduce((sum, current) => {
    return current === "(" ? sum += 1 : current === ")" ? sum -= 1 : sum;
  }, 0) === 0 ? true : false;
}