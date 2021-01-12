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
