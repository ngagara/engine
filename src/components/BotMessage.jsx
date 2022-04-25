import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

export const BotMessage = () => {
  const [value, setValue] = useState("");

  const handelChangeValue = (e) => {
    setValue(e.target.value);
  };

  const sendingBot = (e) => {
    e.preventDefault();
    const url = `https://api.telegram.org/bot1515628709:AAE5ZtZBVK2_5SuA1AkuvEpV4tgPfXoK-ZE/sendMessage?chat_id=354877482&text=${value}`;
    fetch(url).then((res) => res.json());
  };

  return (
    <Box
      sx={{ width: 500, maxWidth: "100%", marginTop: "20px", display: "flex" }}
    >
      <TextField
        onChange={(e) => handelChangeValue(e)}
        value={value}
        fullWidth
        label="Send Bot Message"
        id="fullWidth"
      />
      <IconButton
        aria-label="fingerprint"
        color="secondary"
        onClick={(e) => sendingBot(e)}
      >
        <Fingerprint />
      </IconButton>
    </Box>
  );
};
