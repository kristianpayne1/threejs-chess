import React from "react";
import { useGLTF, Clone } from "@react-three/drei";
import { getType, isPieceWhite } from "./utils";

const Piece = ({ piece = "", position = [0, 0.5, 0] }) => {
  const color = isPieceWhite(piece) ? "white" : "black";
  const type = getType(piece);
  const gltfModel = [color, type].join("_");
  const { scene } = useGLTF(`/${gltfModel}.glb`);

  return <Clone object={scene} castShadow receiveShadow position={position} />;
};

export default Piece;
