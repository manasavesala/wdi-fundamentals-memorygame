
var cards=[
{
  rank : " queen",
  suit : " hearts ",
  cardImage: "images/queen-of-hearts.png "
},
{
  rank : " queen",
  suit : " diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank : " king",
  suit : " hearts ",
  cardImage: " images/king-of-hearts.png"
},
{
  rank: "king" ,
  suit: "diamonds",
  cardImage: "images/king-of-dimonds.png"
}
];


var score = 0;
var cardsInPlay=[];
var checkForMatch = function(){
  if(cardsInPlay[0]==cardsInPlay[1]){
        score++;
        alert("you found a match");
      } else if(cardsInPlay[0]!==cardsInPlay[1]){
        alert("Sorry,try again.");
    }

    cardsInPlay = [];
    alert("Score: " + score);
}

var flipCard = function(){

  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage)
  if(cardsInPlay.length===2){
    checkForMatch();
  }

  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}


var createBoard = function(){
  for(var i=0; i<cards.length;i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();


















