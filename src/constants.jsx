import plug from './img/plug.png';
import {TreeIcons} from './img/icons';

export const NAV_MENU = [{
    id: 1,
    link: "/",
    name: "Книги"
  },
  {
    id: 2,
    link: "ar",
    name: "AR"
  },
  {
    id: 3,
    link: "users",
    name: "Пользователи"
  }
];

export const SIDEBAR_MENU = [{
  id: 1,
  link: "plot",
  name: "Сюжет",
  icon: <TreeIcons/>
},
{
  id: 2,
  link: "images",
  name: "Изображения",
},
{
  id: 3,
  link: "sounds",
  name: "Звуки",
},
{
  id: 4,
  link: "inventory",
  name: "Инвентарь",
},
{
  id: 5,
  link: "testing",
  name: "Тестирование",
},
{
  id: 6,
  link: "monetization",
  name: "Монетизация",
},
{
  id: 7,
  link: "settings",
  name: "Настройки",
}
];

export const NEW_BOOK = {
  id: 1,
  name: "Новая книга",
  src: plug
};