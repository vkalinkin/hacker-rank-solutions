function breakingRecords(scores) {  // Write your code here
  let max = scores[0];
  let min = scores[0];
  let breakBest = 0;
  let breakWorst = 0;
  for (let a = 1; a < scores.length; a++) {
    const current = scores[a];
    if (current > max) {
      breakBest++;
      max = current;
    } else if (current < min) {
      breakWorst++
      min = current;
    }
  }
  const output = [breakBest, breakWorst];
  return output;
}
