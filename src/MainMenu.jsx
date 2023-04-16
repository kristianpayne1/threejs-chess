import React from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GitHubIcon from "@mui/icons-material/GitHub";

const MainMenu = ({ startGame = () => {} }) => {
  return (
    <>
      <Typography textAlign="center" variant="h6" component="h2">
        ThreeJS - Chess
      </Typography>
      <Box display="flex" flexDirection="column" rowGap="10px">
        <FormControl disabled size="small" variant="standard" fullWidth>
          <InputLabel>Difficulty</InputLabel>
          <Tooltip title="Locked - AI makes random moves" arrow placement="top">
            <Select value={"Easy"} label="Difficulty" onChange={() => {}}>
              <MenuItem value={"Easy"}>Easy</MenuItem>
            </Select>
          </Tooltip>
        </FormControl>
        <Button
          size="large"
          fullWidth
          variant="contained"
          startIcon={<PlayArrowIcon />}
          onClick={startGame}
        >
          Play
        </Button>
        <Button
          fullWidth
          size="small"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Rules_of_chess"
        >
          How to play
        </Button>
      </Box>
      <Tooltip title="Check out my Github" arrow placement="top">
        <IconButton
          sx={{ width: "fit-content", margin: "auto" }}
          target="_blank"
          href="https://github.com/kristianpayne1"
        >
          <GitHubIcon></GitHubIcon>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default MainMenu;
