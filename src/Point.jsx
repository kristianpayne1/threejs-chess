import React, { useState, useEffect } from "react";
import { charToUnicode, getBBox } from "./utils";
import { Html } from "@react-three/drei";
import { Box, Button } from "@mui/material";
import { PromotionBoxStyle, PromotionPieceButton } from "./muiStyles";

const Point = ({
  position = [0, 0.5, 0],
  to,
  promotionList,
  captured = "",
  promotionSelect,
  showPromotionSelect = () => {},
  onSelected = () => {},
  setSelectedPiece = () => {},
}) => {
  const [hovered, setHovered] = useState(false);
  const height = getBBox(captured);

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    else document.body.style.cursor = "default";
  }, [hovered]);

  return (
    <group position={[position[0], height / 2 + 0.4, position[1]]}>
      <mesh
        scale={[1.5, height, 1.5]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerMissed={() => {
          if (!promotionSelect || Object.keys(promotionSelect)[0] === to) {
            setSelectedPiece("");
            showPromotionSelect();
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (promotionList) showPromotionSelect({ [to]: promotionList });
          else onSelected();
        }}
      >
        <boxGeometry />
        <meshLambertMaterial
          color={"#00ff00"}
          opacity={!captured ? 0 : 0.5}
          transparent
        />
      </mesh>
      {!captured && (
        <mesh scale={0.25}>
          <sphereGeometry />
          <meshLambertMaterial />
        </mesh>
      )}
      {promotionSelect?.[to] && (
        <Html center>
          <Box sx={PromotionBoxStyle}>
            {promotionSelect[to].map((piece) => (
              <Button
                key={piece}
                className="promotionPieceButton"
                onClick={() => {
                  onSelected(piece);
                  showPromotionSelect();
                }}
                sx={PromotionPieceButton}
              >
                {charToUnicode(piece)}
              </Button>
            ))}
          </Box>
        </Html>
      )}
    </group>
  );
};

export default Point;
