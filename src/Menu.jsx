import { Modal, Box, Typography } from "@mui/material";
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: 'calc(100% - 20px)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    padding: 4,
    '&:hover, &:focus': {
        outline: 'none',
    } 
  };

const Menu = () => {
    return (
        <Modal open={true} hideBackdrop>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    ThreeJS Chess
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
};

export default Menu;