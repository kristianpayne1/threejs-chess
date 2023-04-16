import { Box, IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoopIcon from "@mui/icons-material/Loop";
import React from "react";

const HUD = ({ stopGame = () => {}, restartGame = () => {} }) => {
  return (
    <Box
      display={"flex"}
      gap={"5px"}
      position={"absolute"}
      top={"10px"}
      left={"10px"}
    >
      <Tooltip title="Back to main menu" arrow placement="bottom">
        <IconButton onClick={stopGame}>
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Restart game" arrow placement="bottom">
        <IconButton onClick={restartGame}>
          <LoopIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HUD;
