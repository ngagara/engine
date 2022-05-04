import plug from "./img/plug.png";
import {
  TreeIcon,
  ImageIcon,
  SoundIcon,
  InventoryIcon,
  BugIcon,
  MoneyIcon,
  SettingsIcon
} from "./img/icons";

export const NAV_MENU = [
  {
    id: 1,
    link: "/",
    name: "Книги",
    icon: null,
    disabled: false,
    component: null
  },
  {
    id: 2,
    link: "ar",
    name: "AR",
    icon: null,
    disabled: true,
    component: null
  },
  {
    id: 3,
    link: "users",
    name: "Пользователи",
    icon: null,
    disabled: true,
    component: null
  }
];

export const SIDEBAR_MENU = [
  {
    id: 1,
    link: "plot",
    name: "Сюжет",
    icon: <TreeIcon />,
    disabled: false,
    component: null
  },
  {
    id: 2,
    link: "images",
    name: "Изображения",
    icon: <ImageIcon />,
    disabled: false,
    component: null
  },
  {
    id: 3,
    link: "sounds",
    name: "Звуки",
    icon: <SoundIcon />,
    disabled: false,
    component: null
  },
  {
    id: 4,
    link: "inventory",
    name: "Инвентарь",
    icon: <InventoryIcon />,
    disabled: true,
    component: null
  },
  {
    id: 5,
    link: "testing",
    name: "Тестирование",
    icon: <BugIcon />,
    disabled: true,
    component: null
  },
  {
    id: 6,
    link: "monetization",
    name: "Монетизация",
    icon: <MoneyIcon />,
    disabled: true,
    component: null
  },
  {
    id: 7,
    link: "settings",
    name: "Настройки",
    icon: <SettingsIcon />,
    disabled: false,
    component: null
  }
];

export const NEW_BOOK = {
  id: 1,
  name: "Новая книга",
  src: plug
};
