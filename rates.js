/* The day rate, given a rate per hour */

function dayRate(ratePerHour) {
  return ratePerHour * 8;
}
console.log(dayRate(15));

/* Calculates the number of days in a budget, rounded down */

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}
console.log(daysInBudget(2259, 10));

/* Calculates the discounted rate for large projects, rounded up */

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRate = ratePerHour * 8;
  const fullMonths = Math.floor(numDays / 22);
  const remainder = numDays % 22;
  const fullPrice = dayRate * 22;
  const discountMonth = fullMonths * fullPrice * (1 - discount);
  const noDiscountAmount = remainder * dayRate;

  return Math.ceil(discountMonth + noDiscountAmount);
}
