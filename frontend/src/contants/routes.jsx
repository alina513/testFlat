import { RoutesEnum } from "./RoutesEnum";
export const getRoutes = () => [
  { path: RoutesEnum.HOME, label: "Про нас" },
  { path: RoutesEnum.FLATS, label: "Список квартир" },
  { path: RoutesEnum.FAVORITES, label: "Список обраних" },
];
