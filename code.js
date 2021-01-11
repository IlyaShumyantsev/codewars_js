// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s) {
  const condition = h <= 23 && h >= 0 && m <= 59 && m >= 0 && s <= 59 && s >= 0;
  if (condition) {
    return (h * 3600 + m * 60 + s) * 1000;
  }
  return -1;
}