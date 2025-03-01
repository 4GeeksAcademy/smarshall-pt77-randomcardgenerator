import "./style.css";

window.onload = function() {
  
    let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuitNumber = Math.floor(Math.random() * suit.length);
    let selectedSuit = suit[randomSuitNumber];
    
    document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
    document.getElementById('aCard').className = "";
    document.getElementById('aCard').classList.add("card");
    document.getElementById('aCard').classList.add(getSuiteClass(selectedSuit));
  }
  
  function getSuiteClass(suit) {
    switch (suit) {
      case "Diamonds": return "suit-diamonds";
      case "Spades": return "suit-spades";
      case "Hearts": return "suit-hearts";
      case "Clubs": return "suit-clubs";
    }
  }