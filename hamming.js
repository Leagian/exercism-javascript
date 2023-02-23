function distance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error("Strings must be of the same length");
  }
  let distance = 0;
  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str2[i]) {
      distance += 1;
    }
  }
  return distance;
}
console.log(distance("ROSE", "RUSE"));
