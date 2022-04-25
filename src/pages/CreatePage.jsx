import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const CreatePage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/company");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 180,
          height: 150
        },
        marginTop: "20px",
        marginButtom: "20px",
        cursor: "pointer"
      }}
    >
      <Paper elevation={2} sx={{ padding: "8px" }} onClick={handleClick}>
        <Typography variant="h6" component="p">
          Компания 1
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <AddIcon sx={{ fontSize: 44 }} />
      </Paper>
    </Box>
  );
};

export default CreatePage;
