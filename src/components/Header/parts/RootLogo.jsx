import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Logo } from "../../../img/Logo";

const RootLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Logo />
      <Typography variant="h6" noWrap component="div">
        engine
      </Typography>
    </Box>
  );
};

export default RootLogo;
