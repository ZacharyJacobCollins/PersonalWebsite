//This assignment is weird.  If want modularity of seperating suit and rank fine, but then why specify arrays and ask to use the same modular number%13 in both?  Weird.
var ranks = ['2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function Suit(number) {
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

function Rank(number) {  //rank is the numbering
  number = number%13;
  if (number<=10) {
    return number;
  }
  else {
    return ranks[number];
  }
}

function PrintCards() {
  for(var i=0; i<=51; i++) {
    x = "<p>" + Rank(i) +Suit(i) + "</p>";
    document.write(x);
  }
}
