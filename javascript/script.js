// Update the values (.value being what the user inputs)
const update = () => {
  let bill = document.getElementById("yourBill").value;
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;
  console.log({ bill, tipPercent, split });
};

// Update values using all inputs
document.getElementById("globalInput").addEventListener("input", update);
