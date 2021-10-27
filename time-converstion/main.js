function timeConversion(s) {
  console.log('s8', s[8]);
  if (s[8] === "P") {
    if (s[0] === "1" && s[1] === "2") {
      let output = "12"
      for (let a = 2; a < 8; a++) {
        output = output + s[a];
      }
      return output;
    } else {
      let hour = s[0] + s[1];
      console.log('hour: ', hour);
      console.log('type of hour: ', typeof (hour));
      hour = parseInt(hour) + 12;
      console.log('new hour: ', hour);
      console.log('type of hour: ', typeof (hour));

      let minutes = "";
      for (let a = 2; a < 8; a++) {
        minutes = minutes + s[a];
      }

      console.log('minutes: ', minutes);

      const output = hour.toString() + minutes;
      return output;
    }
    console.log('pm route');

  } else {
    console.log('am route');
    console.log("s0: ", s[0]);
    console.log(typeof (s[0]));
    console.log("s1: ", s[1]);
    console.log(typeof (s[1]));
    const one = "1";
    console.log('type of one: ', typeof (one));
    const two = "2";
    console.log('type of two: ', typeof (two));
    if (s[0] === "1" && s[1] === "2") {
      console.log("first");
      let output = "00"
      for (let a = 2; a < 8; a++) {
        output = output + s[a];
      }
      return output;
    } else {
      console.log("second");
      let output = "";
      for (let a = 0; a < 8; a++) {
        output = output + s[a];
      }
      return output;
    }
  }
}
