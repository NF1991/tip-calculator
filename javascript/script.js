const formatMoney = (value) => {
  value = Math.ceil(value * 100) / 100;
  // Round up the numbers
  value = Number(value).toFixed(2);
  // Add currency symbol
  return "£ " + value;
};

const formatSplit = (value) => {
  if (value <= 1) {
    return value + " person";
  } else {
    return value + " people";
  }
};

// Update the values (.value being what the user inputs)
const update = () => {
  // Convert string to a number
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;

  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(
    bill + tipValue
  );
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
  document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
};

// Update values using all inputs
document.getElementById("globalInput").addEventListener("input", update);
