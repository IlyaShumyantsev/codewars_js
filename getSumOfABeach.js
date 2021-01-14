// Beaches are filled with sand, water, fish, and sun.
// Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

function getSumOfABeach(beach) {
  let words = ["sand", "water", "fish", "sun"];
  return words.reduce((sum, current) => {
    let matchesList = beach.toLowerCase().match(new RegExp(current, "g"));
    return matchesList !== null ? sum += matchesList.length : sum += 0;
  }, 0);
}

