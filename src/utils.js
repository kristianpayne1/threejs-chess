export const calculatePiecePositions = (FEN) => {
  const fenPositions = FEN.split(" ")[0].split("/");
  let positions = [];

  let row = -9;
  fenPositions.forEach((chars) => {
    row += 2;
    let column = -9;
    chars.split("").forEach((type) => {
      const parsedInt = parseInt(type);
      // is piece type
      if (isNaN(parsedInt)) {
        column += 2;
        positions.push([type, positionToChar(column, row), column, 0.4, row]);
      } else {
        column += parsedInt * 2;
      }
    });
  });
  return positions;
};

export const isPieceWhite = (char) => char == char.toUpperCase();

export const getType = (char) => {
  switch (char.toLowerCase()) {
    case "p":
      return "pawn";
    case "r":
      return "rook";
    case "n":
      return "knight";
    case "b":
      return "bishop";
    case "q":
      return "queen";
    case "k":
      return "king";
    default:
      return null;
  }
};

export const positionToChar = (column, row) =>
  String.fromCharCode(97 + (column + 8) / 2) + (-row + 9) / 2;
export const charToPosition = (char) => {
  return [2 * (char.charCodeAt(0) - 97) - 7, -(2 * char[1] - 9)];
};
// temporary while I figure out how to size box automatically
export const getBBox = (piece) => {
  switch (piece.toLowerCase()) {
    case "p":
      return 2.5;
    case "r":
      return 2.75;
    case "n":
      return 3.25;
    case "b":
      return 3.4;
    case "q":
      return 3.75;
    case "k":
      return 4.25;
    default:
      return 1.5;
  }
};

export const charToUnicode = (char) => {
  switch (char) {
    case "q":
      return "\u2655";
    case "r":
      return "\u2656";
    case "b":
      return "\u2657";
    case "n":
      return "\u2659";
  }
};
