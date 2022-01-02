import { Paper } from "@mui/material";

const Background = ({ children, theme }: any) => {
  const style =
    theme.palette.mode === "light"
      ? "linear-gradient(50deg, rgba(74,11,168,1) 0%, rgba(118,68,193,1) 24%, rgba(255,93,178,1) 66%, rgba(249,176,214,1) 100%)"
      : theme.palette.background.default;

  return (
    <Paper
      sx={{
        background: style,
        borderRadius: "0",
        height: "100vh",
      }}
    >
      {children}
    </Paper>
  );
};

export default Background;
