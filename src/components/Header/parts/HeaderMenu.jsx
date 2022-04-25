import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const MENU = [
  {
    id: 1,
    link: "/",
    name: "Мои Компании"
  }
  // {
  //   id: 2,
  //   link: "/test",
  //   name: "Тест бота"
  // }
];

const HeaderMenu = () => {
  const [value, setValue] = useState("Мои Компании");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ ml: 2 }}
      >
        {MENU &&
          MENU.map((item) => (
            <Tab
              sx={{ textTransform: "capitalize" }}
              key={item.id}
              value={item.name}
              label={item.name}
              component={Link}
              to={item.link}
            />
          ))}
      </Tabs>
    </Box>
  );
};

export default HeaderMenu;
