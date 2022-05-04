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
    path: "books",
    name: "Книги",
    icon: null,
    disabled: false,
    component: null
  },
  {
    id: 2,
    path: "",
    name: "AR",
    icon: null,
    disabled: true,
    component: null
  },
  {
    id: 3,
    path: "",
    name: "Пользователи",
    icon: null,
    disabled: true,
    component: null
  }
];

export const SIDEBAR_MENU = [
  {
    id: 1,
    path: "plot",
    name: "Сюжет",
    icon: <TreeIcon />,
    disabled: false,
    component: null
  },
  {
    id: 2,
    path: "images",
    name: "Изображения",
    icon: <ImageIcon />,
    disabled: false,
    component: null
  },
  {
    id: 3,
    path: "sounds",
    name: "Звуки",
    icon: <SoundIcon />,
    disabled: false,
    component: null
  },
  {
    id: 4,
    path: "",
    name: "Инвентарь",
    icon: <InventoryIcon />,
    disabled: true,
    component: null
  },
  {
    id: 5,
    path: "",
    name: "Тестирование",
    icon: <BugIcon />,
    disabled: true,
    component: null
  },
  {
    id: 6,
    path: "",
    name: "Монетизация",
    icon: <MoneyIcon />,
    disabled: true,
    component: null
  },
  {
    id: 7,
    path: "settings",
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
