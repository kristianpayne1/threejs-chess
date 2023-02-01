export const calculatePiecePositions = (FEN) => {
  const fenPositions = FEN.split(" ")[0].split("/");
  let positions = [];

  let row = -9;
  fenPositions.forEach((chars) => {
    row += 2;
    let column = -9;
    chars.split("").forEach((char) => {
      const parsedInt = parseInt(char);
      // is piece char
      if (isNaN(parsedInt)) {
        column += 2;
        positions.push([char, column, 0.4, row]);
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
