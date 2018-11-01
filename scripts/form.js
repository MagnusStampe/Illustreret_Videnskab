"use strict";

const section = document.querySelector("#buy_form");
const returnBtn = document.querySelector("#return");
const confirmBtn = document.querySelector("#confirm");

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init()");
  returnBtn.addEventListener("click", goLeft);
  confirmBtn.addEventListener("click", goRight);
  confirmBtn.addEventListener("click", function(event) {
    event.preventDefault();
  });
}

function goLeft() {
  console.log("goLeft()");

  if (section.classList.value === "purchase") {
    //FORM 1 to OUT
    document.querySelector("#return_a").setAttribute("href", "index.html");
  } else if (section.classList.value === "user_information") {
    //FORM 2 to 1
    console.log("User Information to Purchase");

    //Class setup
    section.classList.remove("user_information");
    section.classList.add("purchase");

    //Return button
    returnBtn.textContent = "Tilbage til startside";
  } else if (section.classList.value === "payment") {
    //FORM 3 to 2
    console.log("Payment to User Information");

    //Class setup
    section.classList.remove("payment");
    section.classList.add("user_information");

    //Confirm button
    confirmBtn.value = "Næste";
  }
}

function goRight() {
  console.log("goRight()");

  if (section.classList.value === "purchase") {
    //FORM 1 to 2
    console.log("Purchase to User Information");

    //Class setup
    section.classList.remove("purchase");
    section.classList.add("user_information");

    //Return button
    returnBtn.textContent = "Tilbage";
    document.querySelector("#return_a").setAttribute("href", "#");
  } else if (section.classList.value === "user_information") {
    //FORM 2 to 3
    console.log("User Information to Payment");

    //Class setup
    section.classList.remove("user_information");
    section.classList.add("payment");

    //Confirm button
    confirmBtn.value = "Gennemfør betaling";
  } else if (section.classList.value === "payment") {
    document.querySelector("#buy_form form").submit();
  }
}
