import { OrbitControls, Stage } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
// import { useState } from "react";
import Chessboard from "./Chessboard";

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0.5, 0], fov: 35 }} dpr={[1, 2]}>
      <Stage
        intensity={0.4}
        preset="rembrandt"
        shadows="accumulative"
        adjustCamera={1.75}
        environment="city"
      >
        <Chessboard />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </Canvas>
  );
};

export default App;
