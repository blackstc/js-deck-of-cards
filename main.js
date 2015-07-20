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

    var reset = document.createElement('button');
    cardContainer.appendChild(reset);

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



  //creates 52 card deck with suits
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push({
        card: ranks[i].card,
        suit: suits[j]
        });
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(deck){
    var output = [];
    var workingArray = deck.slice(0);
    var current = workingArray.length;

    while (current) {
      var random = Math.floor(Math.random() * current);
      output.push(workingArray.splice(random, 1)[0]);
      current--;
    }
    return output;
}
