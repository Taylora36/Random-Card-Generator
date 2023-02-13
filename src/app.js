/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  // document.querySelector(".card").classList.add("&diams;");
  document.querySelector(".number").innerHTML = generateRandomNumber();
  let randomSuit = generateRandomSuit();
  console.log(randomSuit);
    document.querySelector(".top-suit").innerHTML = randomSuit;
    document.querySelector(".bottom-suit").innerHTML = randomSuit;
  
    
  
};
function generateRandomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "J",
    "K",
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
}
let generateRandomSuit = () => {
  let suit = ["&diams;", "&hearts;", "&spades;", "&clubs;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
