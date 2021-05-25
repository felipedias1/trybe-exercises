function verificaPalindrome (palavra) {
  
  let verif = ''; 
  
  for(i = 1; i <= palavra.length; i += 1) {
  verif += palavra[palavra.length-i];
  }

  if (verif == palavra) {
    return true;        
  } else {
    return false;
  }
} 

console.log(verificaPalindrome("ala"));
