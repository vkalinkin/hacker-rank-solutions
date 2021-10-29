function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let a = 0; a < n; a++) {
    let first = ar[a];
    for (let b = (a + 1); b < n; b++) {
      let second = ar[b];
      let combo = first + second;
      if (combo % k === 0) {
        count++
      }
    }
  }
  return count;

}
