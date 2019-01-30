
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
}
