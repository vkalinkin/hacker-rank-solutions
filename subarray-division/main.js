function birthday(s, d, m) {
  let count = 0;
  const end = s.length - (m - 1);
  for (let a = 0; a < end; a++) {
    const currentFirst = a;
    let currentCount = 0;
    for (let b = 0; b < m; b++) {
      currentCount += s[a + b];
    }
    if (currentCount === d) {
      count = count + 1;
    }
  }
  return count;
}
