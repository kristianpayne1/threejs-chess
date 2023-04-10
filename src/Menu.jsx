import {
  Modal,
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

const Menu = ({ startGame = () => {} }) => {
  return (
    <Modal open={true} hideBackdrop>
      <Box display="flex" flexDirection="column" rowGap="25px" sx={style}>
        <Typography textAlign="center" variant="h6" component="h2">
          ThreeJS - Chess
        </Typography>
        <Box display="flex" flexDirection="column" rowGap="10px">
          <FormControl disabled size="small" variant="standard" fullWidth>
            <InputLabel>Difficulty</InputLabel>
            <Tooltip
              title="Locked - AI makes random moves"
              arrow
              placement="top"
            >
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
      </Box>
    </Modal>
  );
};

export default Menu;
