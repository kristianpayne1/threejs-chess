import { Modal, Box } from "@mui/material";
import React from "react";
import { MenuBoxStyle } from "./muiStyles";

const Menu = ({ children, hideBackdrop = true }) => {
  return (
    <Modal open={true} hideBackdrop={hideBackdrop}>
      <Box
        display="flex"
        flexDirection="column"
        rowGap="25px"
        sx={MenuBoxStyle}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default Menu;
