import {
  GizmoHelper,
  GizmoViewport,
  Loader,
  OrbitControls,
  OrthographicCamera,
  Stage,
} from "@react-three/drei/";
import { Suspense, useEffect, useState } from "react";
import { calculatePiecePositions, charToPosition } from "./utils";

import { Canvas } from "@react-three/fiber";
import { Chess } from "chess.js";
import Chessboard from "./Chessboard";
import GameOverMenu from "./GameOverMenu";
import HUD from "./HUD";
import Menu from "./Menu";
import Piece from "./Piece";
import Point from "./Point";

// import Loader from "./Loader";

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const chess = new Chess(window.sessionStorage.getItem("fen") || FEN);

const AIMove = ({ setPiecePositions }) => {
  const moves = chess.moves();
  const move = moves[Math.floor(Math.random() * moves.length)];
  try {
    chess.move(move);
    window.sessionStorage.setItem("fen", chess.fen());
    setPiecePositions(calculatePiecePositions(chess.fen()));
  } catch (e) {
    console.error(e);
    AIMove();
  }
};

const getMoves = (selectedPiece) =>
  selectedPiece !== ""
    ? chess
        .moves({ square: selectedPiece, verbose: true })
        .reduce((acc, move) => {
          if (move.promotion) {
            const promotionMoveIndex = acc.findIndex(
              (m) => m.promotion && m.to === move.to
            );
            if (promotionMoveIndex >= 0) {
              acc[promotionMoveIndex] = {
                ...move,
                promotionList: [
                  ...acc[promotionMoveIndex].promotionList,
                  move.promotion,
                ],
              };
              return acc;
            } else {
              return [...acc, { ...move, promotionList: [move.promotion] }];
            }
          } else {
            return [...acc, move];
          }
        }, [])
    : [];

const Game = ({ setIsPlaying = () => {} }) => {
  const [selectedPiece, setSelectedPiece] = useState("");
  const [piecePositions, setPiecePositions] = useState([]);
  const [promotionSelect, showPromotionSelect] = useState(false);
  const [gameOver, setGameOver] = useState();

  const moves = getMoves(selectedPiece);

  const stopGame = () => {
    chess.reset();
    window.sessionStorage.removeItem("fen");
    setIsPlaying(false);
  };

  const restartGame = () => {
    if (gameOver) setGameOver(false);
    chess.reset();
    window.sessionStorage.setItem("fen", chess.fen());
    setPiecePositions(calculatePiecePositions(chess.fen()));
  };

  useEffect(() => {
    if (chess.isGameOver()) {
      if (chess.isCheckmate()) setGameOver("Check mate!");
      else if (chess.isStalemate()) setGameOver("Stalemate!");
      else if (chess.isDraw()) setGameOver("Draw!");
      else if (chess.isThreefoldRepetition())
        setGameOver("Threefold repetition!?");
      else if (chess.isInsufficientMaterial())
        setGameOver("Insufficient Material!?");
    } else if (chess.turn() === "b") {
      AIMove({ setPiecePositions });
    } else {
      setPiecePositions(calculatePiecePositions(chess.fen()));
    }
  }, [chess.turn()]);

  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Stage intensity={0.4} adjustCamera={1.1}>
            {piecePositions.map(([piece, char, ...position], index) => (
              <Piece
                key={`${piece}-${index}`}
                char={char}
                piece={piece}
                position={position}
                turn={chess.turn()}
                setSelectedPiece={setSelectedPiece}
              />
            ))}
            {moves.map((move) => (
              <Point
                key={move.to}
                to={move.to}
                setSelectedPiece={setSelectedPiece}
                position={charToPosition(move.to)}
                promotionList={move.promotionList}
                captured={move.captured}
                promotionSelect={promotionSelect}
                showPromotionSelect={showPromotionSelect}
                onSelected={(promotion) => {
                  chess.move({ ...move, promotion });
                  setSelectedPiece("");
                }}
              />
            ))}
            <Chessboard />
          </Stage>
          <GizmoHelper alignment="top-right" margin={[100, 100]}>
            <GizmoViewport labelColor="white" axisHeadScale={1} />
          </GizmoHelper>
        </Suspense>
        <OrthographicCamera makeDefault position={[0, 10, 0]} />
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
      </Canvas>
      <Loader containerStyles={{ background: "#004474" }} />
      <HUD restartGame={restartGame} stopGame={stopGame} />
      {gameOver && (
        <Menu hideBackdrop={false}>
          <GameOverMenu
            reason={gameOver}
            stopGame={stopGame}
            restartGame={restartGame}
          />
        </Menu>
      )}
    </>
  );
};

export default Game;
