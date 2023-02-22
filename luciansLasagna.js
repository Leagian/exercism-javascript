const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

/* Determines the number of minutes the lasagna still needs to remain in the oven to be properly prepared */

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
console.log(remainingMinutesInOven(10));
// minutes restantes dans le four = 40mins - le temps actuel

/* Given a number of layers, determines the total preparation time */

function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}
console.log(preparationTimeInMinutes(2));
// temps de préparation en minutes = 2mins * couches

/* Calculates the total working time. That is, the time to prepare all the layers of lasagna, and the time already spent in the oven */

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
console.log(totalTimeInMinutes(2, 10));
/* Temps total en minutes : temps de préparation en minutes + le temps actuel */
