//temperature converter
const convert = (degree) => {
  var x;
  if (degree == "C") {
    x = (document.getElementById("c").value * 9) / 5 + 32;
    document.getElementById("f").value = Math.round(x);
  } else {
    x = ((document.getElementById("f").value - 32) * 5) / 9;
    document.getElementById("c").value = Math.round(x);
  }
};

//miles and feet converter
const toFeet = () =>
  (document.getElementById("feetValue").value =
    document.getElementById("milesValue").value * 5280);
const toMiles = () => {
  document.getElementById("milesValue").value =
    document.getElementById("feetValue").value / 5280;
  //conditional ternary operator
  var msg = document.getElementById("feetValue").value == "777" ? "LUCKY!" : "";
  document.getElementById("msg").innerHTML = msg;
};
