//temperature converter
const converter = (source, valNum) => {
  valNum = parseFloat(valNum);
  let inputFahrenheit = document.getElementById("inputFahrenheit");
  let inputCelsius = document.getElementById("inputCelsius");
  let inputKelvin = document.getElementById("inputKelvin");
  if (source == "inputFahrenheit") {
    inputCelsius.value = ((valNum - 32) / 1.8).toFixed(2);
    inputKelvin.value = ((valNum - 32) / 1.8 + 273.15).toFixed(2);
  }
  if (source == "inputCelsius") {
    inputFahrenheit.value = (valNum * 1.8 + 32).toFixed(2);
    inputKelvin.value = (valNum + 273.15).toFixed(2);
  }
  if (source == "inputKelvin") {
    inputFahrenheit.value = ((valNum - 273.15) * 1.8 + 32).toFixed(2);
    inputCelsius.value = (valNum - 273.15).toFixed(2);
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
