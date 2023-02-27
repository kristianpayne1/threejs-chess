import React, { useState } from "react";
import { useGLTF, Clone, Edges, useCursor } from "@react-three/drei";
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

  useCursor(hovered && turn === "w" && color !== "black", "pointer", "auto");

  const onSelect = (char) =>
    turn === "w" && color !== "black" && setSelectedPiece(char);

  return (
    <group>
      {turn === "w" && color !== "black" && (
        <mesh
          position={[position[0], 1, position[2]]}
          scale={1.5}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onPointerMissed={() => setSelectedPiece("")}
          onClick={() => onSelect(char)}
        >
          <boxGeometry />
          <meshLambertMaterial color={"#ffffff"} opacity={0} transparent />
        </mesh>
      )}
      <Clone
        object={scene}
        castShadow
        receiveShadow
        position={position}
        inject={
          <Edges
            scale={1}
            threshold={200} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
            color="black"
          />
        }
      />
    </group>
  );
};

export default Piece;
