import React, { useState, useEffect } from "react";
import { getBBox } from "./utils";

const Point = ({ position = [0, 0.5, 0], onSelected, captured = "" }) => {
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
        onClick={onSelected}
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
    </group>
  );
};

export default Point;
