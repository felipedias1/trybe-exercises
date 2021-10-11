let piece = "BiShOp";
let nmPiece = piece.toLowerCase();

switch (nmPiece) {
  case "king":
    console.log("one square in any direction");
    break;
    
  case "queen":
    console.log("diagonally, horizontally, or vertically any number of squares.");
    break;

  case "rook":
    console.log("horizontally or vertically any number of squares.");
    break;

  case "bishop":
    console.log("diagonally any number of squares.");
    break;

  case "knight":
    console.log("in an ‘L’ shape’: two squares in a horizontal or vertical direction");
    break;

  case "pawn":
    console.log("vertically forward one square");
    break;
    
  default:
    console.log("Nome da peça inválido");
    break;
} 