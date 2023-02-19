import { Clone, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const Chessboard = () => {
  const ref = useRef();
  const { scene } = useGLTF("assets/chessboard.glb?url");

  return <Clone object={scene} receiveShadow position={[0, 0.175, 0]} />;
};

export default Chessboard;
