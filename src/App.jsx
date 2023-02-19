import { Loader } from "@react-three/drei";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  OrthographicCamera,
  Stage,
} from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Chessboard from "./Chessboard";
// import Loader from "./Loader";
import Piece from "./Piece";
import { calculatePiecePositions } from "./utils";
import { EffectComposer, Outline } from "@react-three/postprocessing";

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const App = () => {
  const piecePositionsMap = calculatePiecePositions(FEN);
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
            {piecePositionsMap.map(([piece, ...position], index) => (
              <Piece
                key={`${piece}-${index}`}
                piece={piece}
                position={position}
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
        {/* <EffectComposer multisampling={0} disableNormalPass={true}>
          <Outline
            blur
            visibleEdgeColor="white"
            edgeStrength={100}
            width={500}
          />
        </EffectComposer> */}
      </Canvas>
      <Loader containerStyles={{ background: "#004474" }} />
    </>
  );
};

export default App;
