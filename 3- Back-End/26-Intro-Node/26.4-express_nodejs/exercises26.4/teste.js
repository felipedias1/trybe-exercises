var Rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
  return Rand() + Rand(); // to make it longer
};

console.log(token());  // "bnh5yzdirjinqaorq0ox1tf383nb3xr"