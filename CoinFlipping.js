function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while(headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if(result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  return attempts;
}
console.log( "It took " + fiveHeadsSync() + " attempts to get five heads");
console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
  return new Promise( (resolve, reject) => {
    var attempts = fiveHeadsSync();
    if (attempts < 100) {
      resolve("Got five heads in " + attempts + " tries");
    } else {
      reject("Coin has been flipped more than 100 times without getting five heads in a row");
    }
  });
}

fiveHeads()
  .then( res => console.log(res) )
  .catch( err => console.log(err) );
console.log( "When does this run now?" );
  