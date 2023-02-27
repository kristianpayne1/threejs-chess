import React, { useState, useEffect } from "react";

const Point = ({ position = [0, 0.5, 0], char, onSelected }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    else document.body.style.cursor = "default";
  }, [hovered]);

  return (
    <group position={[position[0], 1, position[1]]}>
      <mesh
        scale={1.5}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => onSelected(char)}
      >
        <boxGeometry />
        <meshLambertMaterial color={"#ff0000"} opacity={0} transparent />
      </mesh>
      <mesh scale={0.25}>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>
    </group>
  );
};

export default Point;
