import React, { useEffect, useState } from "react";
import { useGLTF, Clone, Edges } from "@react-three/drei";
import { getType, isPieceWhite } from "./utils";

const Piece = ({
  piece = "",
  char = "",
  position = [0, 0.5, 0],
  turn,
  setSelectedPiece = () => {},
}) => {
  const [hovered, setHovered] = useState(false);
  const color = isPieceWhite(piece) ? "white" : "black";
  const type = getType(piece);
  const gltfModel = [color, type].join("_");

  const pieceURL = new URL(`../public/${gltfModel}.glb`, import.meta.url).href;
  const { scene } = useGLTF(pieceURL);

  useEffect(() => {
    if (hovered && turn === "w" && color !== "black")
      document.body.style.cursor = "pointer";
    else document.body.style.cursor = "default";
  }, [hovered]);

  const onSelect = () =>
    turn === "w" && color !== "black" && setSelectedPiece(char);

  return (
    <Clone
      object={scene}
      castShadow
      receiveShadow
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={onSelect}
      inject={
        <Edges
          scale={1}
          threshold={200} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
          color="black"
        />
      }
    />
  );
};

export default Piece;
