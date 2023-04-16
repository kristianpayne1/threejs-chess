import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoopIcon from "@mui/icons-material/Loop";

const GameOverMenu = ({
  reason = "",
  restartGame = () => {},
  stopGame = () => {},
}) => {
  return (
    <>
      <Typography
        textAlign="center"
        fontWeight={"bold"}
        variant="h5"
        component="h2"
      >
        Game Over
      </Typography>
      <Typography textAlign="center" variant="h6" component="h3">
        {reason}
      </Typography>
      <Box display="flex" flexDirection="column" rowGap="10px">
        <Button
          size="large"
          fullWidth
          variant="contained"
          startIcon={<LoopIcon />}
          onClick={restartGame}
        >
          Play again
        </Button>
        <Button
          fullWidth
          size="small"
          onClick={stopGame}
          startIcon={<ArrowBackIcon />}
        >
          Back to main menu
        </Button>
      </Box>
    </>
  );
};

export default GameOverMenu;
