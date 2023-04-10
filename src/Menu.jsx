import { Modal, Box, Typography } from "@mui/material";
import { Center, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "calc(100% - 20px)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  padding: 4,
  "&:hover, &:focus": {
    outline: "none",
  },
};

const Menu = () => {
  return (
    <Modal open={true} hideBackdrop>
      <Box sx={style}>
        <Canvas>
          <Center>
            <Text3D
              font="./Roboto_Bold.json"
              size={1.5}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              Chess
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </Canvas>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default Menu;
