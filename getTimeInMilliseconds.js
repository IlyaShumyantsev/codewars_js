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

