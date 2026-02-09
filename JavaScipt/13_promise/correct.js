const orderInput = document.querySelector('#order-id');
const resultBox = document.querySelector('#result');

async function checkOrder() {
  if (orderInput.value === 'order123') {
    return "Order Delivered";
  } else {
    throw "Order is pending";
  }
}

document.querySelector('#checkBtn').addEventListener("click", async () => {
  try {
    resultBox.innerHTML = await checkOrder();
  } catch (error) {
    resultBox.innerHTML = error;
  }
});
