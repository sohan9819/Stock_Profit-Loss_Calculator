const form = document.querySelector("#form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const initial = form.initial.value;
  const quantity = form.quantity.value;
  const current = form.current.value;

  if (initial === "" || quantity === "" || current === "") {
    result.innerText = "Enter all the fileds";
  } else if (initial < 0 || quantity < 0 || current < 0) {
    result.innerText = "Negative values are not allowed";
  } else {
    console.log(initial, quantity, current);

    const sellingPrice = current;
    const costPrice = initial;
    const Profit = profit(sellingPrice, costPrice);
    const Loss = loss(costPrice, sellingPrice);

    if (Profit >= 0) {
      console.log(profitPrecentage(Profit, costPrice));
      result.innerText = `You have made a profit of ${
        Profit * parseInt(quantity)
      } that is ${profitPrecentage(Profit, costPrice)}%`;
    } else if (Loss >= 0) {
      console.log(lossPercentage(Loss, costPrice));
      result.innerText = `You have made a loss of ${
        Loss * parseInt(quantity)
      } that is ${lossPercentage(Loss, costPrice)}%`;
    }
  }
});

const profit = (sellingPrice, costPrice) => {
  return sellingPrice - costPrice;
};
const profitPrecentage = (Profit, costPrice) => {
  return (Profit / costPrice) * 100;
};
const loss = (costPrice, sellingPrice) => {
  return costPrice - sellingPrice;
};
const lossPercentage = (Loss, costPrice) => {
  return (Loss / costPrice) * 100;
};
