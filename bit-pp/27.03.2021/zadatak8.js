var a = [2, 4, 7, 8, 7, 7, 1];

function repeat(e) {
  var match = 0;
  for (i = 0; i < a.length; i++) {
    if (e === a[i]) {
      match += 1;
    }
  }
  return match;
}
result = repeat(7);
console.log(result);


