
function theBeatlesPlay (musicians, instruments) {
var artists = [];

for (var counter = 0; counter < musicians.length; counter++) {
  var artistSkill = musicians[counter] + ' plays ' + instruments[counter];
  artists[counter] = artistSkill;
}
 return artists;
}


function johnLennonFacts(facts) {
  var factCounter = 0;
  
  while(factCounter < facts.length) {
    facts[factCounter] = facts[factCounter] + '!!!';
    factCounter++;
  }
  return facts;
}

function iLoveTheBeatles (inputNumber) {
  var ilb = [];
  
  if (inputNumber < 15) {
    var counter = 0;
    do {
      ilb[counter] = 'I love the Beatles!';
      counter++;
    } while (counter-1 < inputNumber);
    
    return ilb;
  }
  else
  {
    //ilb[0] = 'I love the Beatles!';
    //return ilb;
    return 'I love the Beatles!';
    
  }

}

