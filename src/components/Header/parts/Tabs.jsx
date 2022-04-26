import { useState } from "react";
import Tab from "./Tab";

const MENU = [
  {
    id: 1,
    link: "/",
    name: "Книги"
  },
  {
    id: 2,
    link: "/test",
    name: "Тест бота"
  }
];

const Tabs = () => {
  // const [value, setValue] = useState("Мои Компании");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <ul>
      {MENU &&
        MENU.map((link) => (
          <Tab key={link.id} link={link.link} name={link.name} />
        ))}
    </ul>
  );
};

export default Tabs;
