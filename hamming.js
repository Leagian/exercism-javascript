function distance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error("Strings must be of the same length");
  }
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
}
console.log(distance("ROSE", "RUSE"));
