import { Modal, Box } from "@mui/material";
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

const Menu = ({ children }) => {
  return (
    <Modal open={true} hideBackdrop>
      <Box display="flex" flexDirection="column" rowGap="25px" sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default Menu;
