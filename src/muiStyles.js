export const MenuBoxStyle = {
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

export const PromotionBoxStyle = {
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
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  height: "fit-content",
  width: "160px",
  "&:hover, &:focus": {
    outline: "none",
  },
};

export const PromotionPieceButton = {
  fontSize: "45px",
  padding: 0,
  color: "black",
};
