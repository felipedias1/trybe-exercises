function checkword(word,ending) {
  let invEnding = "";
  let invword = "";
  
  for(let i = 1; i <= ending.length; i += 1) {
    invEnding += ending[ending.length-i];
  }

  for(let i = 1; i <= ending.length; i += 1) {
    invword += word[word.length-i];
  }

  if (invword == invEnding) {
    return true;    
  } else {
    return false;
  }
};
console.log(checkword("Felipe", "lipi"));