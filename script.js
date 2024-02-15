const button_element = document.getElementById("btn");
const payment_element = document.getElementById("id_payment");
const principal_element = document.getElementById("principal_input").value;
const rate_element = document.getElementById("rate_input").value;
const monthsToPay_element = document.getElementById("monthsToPay_input").value;

function calculateLoan() {
    // console.log("clicked")
    const interest_element = (principal_element * (rate_element * 0.01)) / monthsToPay_element;
    console.log(interest_element);
    console.log(monthsToPay_element);
    const monthlyPayment = (principal_element / monthsToPay_element + interest_element).toFixed(3);
    payment_element.innerText = `Monthly payment: ${monthlyPayment}`;

}

button_element.addEventListener("click", calculateLoan);