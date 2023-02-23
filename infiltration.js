/* a fast attack can be made if the knight is sleeping */

function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake ? false : true;
}

/* A useful spy captures information, which they can't do if everyone's asleep */

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}

/* You'll get caught by the archer if you signal while they're awake */

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}

/* The final stage in the plan: freeing Annalyn's best friend */
function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  } else if (
    !petDogIsPresent &&
    prisonerIsAwake &&
    !knightIsAwake &&
    !archerIsAwake
  ) {
    return true;
  } else {
    return false;
  }
}
