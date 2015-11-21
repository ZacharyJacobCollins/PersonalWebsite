//This assignment is weird.  If want modularity of seperating suit and rank fine, but then why specify arrays and ask to use the same modular number%13 in both?  Weird.
<!--Submission at https://canvas.emich.edu/courses/19308/assignments/92277?module_item_id=604769 and stuff http://www.emunix.emich.edu/~evett/WebProgramming/Assgn_bridgeHands_prelim_1.htm-->

var north = [];
var south = [];
var east  = [];
var west  = [];
var ranks = ['2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function GetDeck() {
  var deck=[];
  for(var i=0; i<=51; i++) {
    deck.push(i);
  }
  return deck;
}

function GetSuit(number) {
  switch(true)
  {
     case (number <= 12):
       return 'C';
     case (number>12 && number<=25):
       return 'D';
     case (number>25 && number<=38):
       return 'H';
     case (number>38 && number<=51):
       return 'S';
     default:
       return ' Oops!  Something went wrong!';
     }
}

function GetRank(number) {  //rank is the numbering
  number = number%13;
  if (number<=10) {
    return number;
  }
  else {
    return ranks[number];
  }
}

function Permute(deck) {
  for (var i=1; i<=1000; i++) {
    var swap = Math.floor(Math.random() * 52);
    var newIndex = Math.floor(Math.random() * 52);
    var temp = deck[newIndex];
    deck[newIndex] = deck[swap];
    deck[swap] = temp;
  }
  return deck;
}

function DealHands() {
  var deck = Permute(GetDeck());
  for (var i=0; i<=12; i++) {
    north.push(GetRank(deck[i])+GetSuit(deck[i]));
  }
  document.write("<p>North: " +north+"</p>");
  for (var i=13; i<=25; i++) {
    south.push(GetRank(deck[i])+GetSuit(deck[i]));
  }
  document.write("<p>South: " +south+"</p>");
  for (var i=26; i<=38; i++) {
    east.push(GetRank(deck[i])+GetSuit(deck[i]));
  }
  document.write("<p>East: " +east+"</p>");
  for (var i=39; i<=51; i++) {
    west.push(GetRank(deck[i])+GetSuit(deck[i]));
  }
  document.write("<p>West: " +west+"</p>");
}


setTimeout(
   function() {
     window.location.reload(1);
   }, 2000);
