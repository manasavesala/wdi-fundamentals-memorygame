
var cards=["queen", "queen", "king", "king"];

var cardsInPlay=[];
var checkForMatch = function(){
  if(cardsInPlay[0]==cardsInPlay[1]){
      alert("you found a match");
      }else if(cardsInPlay[0]!==cardsInPlay[1]){
      alert("Sorry,try again.");
    }
}

var flipCard = function(cardId){

  cardsInPlay.push(cards[cardId]);
  if(cardsInPlay.length===2){
    checkForMatch();
  }

  console.log("User flipped " + cards[cardId]);
}

 flipCard(0);
 flipCard(2);