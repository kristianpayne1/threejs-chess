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
  if (char.includes("N")) char = char.split("N")[1];

  return [2 * (char.charCodeAt(0) - 97) - 7, -(2 * char[1] - 9)];
};
