import {
    GizmoHelper,
    GizmoViewport,
    OrbitControls,
    OrthographicCamera,
    Stage,
    Loader,
} from "@react-three/drei/";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Chessboard from "./Chessboard";
// import Loader from "./Loader";
import Piece from "./Piece";
import { calculatePiecePositions, charToPosition } from "./utils";
import { Chess } from "chess.js";
import Point from "./Point";

// const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const chess = new Chess();

const Game = ({ }) => {
    const [selectedPiece, setSelectedPiece] = useState("");
    const [piecePositions, setPiecePositions] = useState([]);

    const moves =
        selectedPiece !== ""
            ? chess.moves({ square: selectedPiece, verbose: true })
            : [];

    console.log(moves);

    useEffect(() => {
        if (chess.isGameOver()) console.log("GAME OVER");
        else if (chess.turn() === "b") {
            const moves = chess.moves();
            const move = moves[Math.floor(Math.random() * moves.length)];
            chess.move(move);
            setPiecePositions(calculatePiecePositions(chess.fen()));
        } else {
            setPiecePositions(calculatePiecePositions(chess.fen()));
        }
    }, [chess.turn()]);

    return (
        <>
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <Stage
                        intensity={0.4}
                        shadows="accumulative"
                        environment="city"
                        adjustCamera={1.1}
                    >
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
                                piece={move.piece}
                                position={charToPosition(move.to)}
                                captured={move.captured}
                                onSelected={() => {
                                    chess.move({ from: move.from, to: move.to });
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
        </>
    )
};

export default Game;