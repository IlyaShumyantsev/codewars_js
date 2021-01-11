// count X and O
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