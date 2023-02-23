/* a fast attack can be made if the knight is sleeping */

function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/* A useful spy captures information, which they can't do if everyone's asleep */

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/* You'll get caught by the archer if you signal while they're awake */

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/* The final stage in the plan: freeing Annalyn's best friend */
function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (petDogIsPresent && !archerIsAwake) ||
    (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake)
  );
}
