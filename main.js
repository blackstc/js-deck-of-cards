//making a variable that grabs the id "cards"
var showCards = document.getElementById("cards");

//onclick of button run function and hide after click
showCards.onclick = function(){

  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  cardContainer.style.display = "";
  showCards.style.display = "none";
  displayCards();

    if (document.getElementById('newReset') === null) {
    resetBtn();
  } else {
    var reShowCards = document.getElementById('new');
    reShowCards.style.display = "";
  }

};

//
function displayCards(){
  //creating a new variable that calls newDeck function
  var deck = newDeck();
  //creates a new variable the calls the shuffleCards function with the argument of deck
  var shuffledCards = shuffleCards(deck);
  //
  for(var i=0; i < deck.length; i++){
    //creates a variable that creates a div element in the html
    var card = document.createElement('div');
    //sets class of new div to "card"
    card.className = "card";
    //grabs the section with id container
    var cardContainer = document.getElementById('container');
    //appends new div to the section with the div container
    cardContainer.appendChild(card);
    //sets the backgorund image of the new div to a specialized url
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
    current --;
    }
    return output;
}


function resetBtn(){
  var resetButton = document.createElement('button');
  var text = document.createTextNode("Reset!");
  var deal = document.getElementById('cards');

  resetButton.id = "newReset";
  resetButton.appendChild(text);
  deal.parentNode.insertBefore(resetButton, deal);
//creates variable to get new reDeal button
  var resetCards = document.getElementById('newReset');
//function that shows shuffled cards when redeal button is clicked
  resetCards.onclick = function(){
    var cardContainer = document.getElementById('container');
    cardContainer.innerHTML = "";
    cardContainer.style.display = "";
    resetCards.style.display = "none";

    if (document.getElementById('new') === null) {
      reDeal();
    } else {
      var reShowCards = document.getElementById('new');
      reShowCards.style.display = "";
    }
  };
}



//creates reDeal button and appends to dom
function reDeal(){
  var reDealButton = document.createElement('button');
  var text = document.createTextNode("Re-deal?");
  var cardContainer = document.getElementById('container');

  reDealButton.id = "new";
  reDealButton.appendChild(text);
  cardContainer.parentNode.appendChild(reDealButton);
//creates variable to get new reDeal button
  var reShowCards =document.getElementById('new');
  var resetBtn = document.getElementById('newReset')
//function that shows shuffled cards when redeal button is clicked
  reShowCards.onclick = function(){
    var cardContainer = document.getElementById('container');
    cardContainer.innerHTML = "";
    cardContainer.style.display = "";
    resetBtn.style.display = "";
    reShowCards.style.display = "none";

    displayCards();
  };
}
