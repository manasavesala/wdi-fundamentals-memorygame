
var cards=["queen", "queen", "king", "king"];

var cardsInPlay=[];
var cardOne;

cardOne= cards[2];

cardsInPlay.push(cardOne);


console.log("User flipped " + cardOne);

var cardTwo;
cardTwo= cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if(cardsInPlay.length===2){
  if(cardsInPlay[0]==cardsInPlay[1]){
    alert("you found a match");
  }else if(cardsInPlay[0]!==cardsInPlay[1]){
    alert("Sorry,try again.");
  }
}