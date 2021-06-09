/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let body = document.querySelector("body");
let suits = ["spade", "club", "heart", "diamond"];
let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
body.onload = function() {
  let cardSelector = Math.floor(Math.random() * 12) + 1;
  let cardNumber = cardNumbers[cardSelector];
  let mainCard = document.getElementById("card");
  let render = document.getElementById("cardNumber");
  render.innerHTML = cardNumber;
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      let symbol1 = document.createElement("H1");
      let symbol2 = document.createElement("H1");
      symbol1.classList.add("spade");
      symbol2.classList.add("spade");
      symbol1.innerHTML = "&#9824;";
      symbol2.innerHTML = "&#9824;";
      mainCard.insertBefore(symbol1, render);
      mainCard.appendChild(symbol2);
      break;
    case 1:
      let symbol3 = document.createElement("H1");
      let symbol4 = document.createElement("H1");
      symbol3.classList.add("club");
      symbol4.classList.add("club");
      symbol3.innerHTML = "&#9827;";
      symbol4.innerHTML = "&#9827;";
      mainCard.insertBefore(symbol3, render);
      mainCard.appendChild(symbol4);
      break;
    case 2:
      let symbol5 = document.createElement("H1");
      let symbol6 = document.createElement("H1");
      symbol5.classList.add("heart");
      symbol6.classList.add("heart");
      symbol5.innerHTML = "&#9829;";
      symbol6.innerHTML = "&#9829;";
      mainCard.insertBefore(symbol5, render);
      mainCard.appendChild(symbol6);
      break;
    case 3:
      let symbol7 = document.createElement("H1");
      let symbol8 = document.createElement("H1");
      symbol7.classList.add("diamond");
      symbol8.classList.add("diamond");
      symbol7.innerHTML = "&#9830;";
      symbol8.innerHTML = "&#9830;";
      mainCard.insertBefore(symbol7, render);
      mainCard.appendChild(symbol8);
      break;
  }
};
