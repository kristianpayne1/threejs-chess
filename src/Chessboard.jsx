import { Clone, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const Chessboard = () => {
  const ref = useRef();
  const { scene } = useGLTF("/chessboard.glb");

  return <Clone object={scene} receiveShadow position={[0, 0.175, 0]} />;
};

export default Chessboard;
