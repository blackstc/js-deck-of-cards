//grabbing with the ID "cards"
var showCards = document.getElementById("cards");

//onclick of button run function.
showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};


function displayCards(){
  //creates new variable deck, that calls newDeck function
  var deck = newDeck();
  //sets new variable to the call of shuffledCards function
  var shuffledCards = shuffleCards(deck);


  for(var i=0; i < deck.length; i++){
    //creates a variable that creats a div element in the HTML
    var card = document.createElement('div');
    //sets the class of the new div to "card"
    card.className = "card";
    //grabbing the section with the id name "container"
    var cardContainer = document.getElementById('container');
    //appends the new div to the section with the id container
    cardContainer.appendChild(card);
    //sets the background image of the new div to a specified url.
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];
}

// Shuffles the Deck
function shuffleCards(cardDeck){}
