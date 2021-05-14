import { fetchData } from "../helpers/fetch-data";
import { createElement } from "../helpers/create-element";
import { nav_menu } from "../constants";
import data from "../../data.json";

export const createMenu = () => {
  const { nav } = fetchData(data);
  nav.forEach((item) => {
    const elem = createElement({
      tagN: "a",
      classN: ["menu__item"],
      attributes: { href: item.href },
    });
    elem.innerText = item.text;
    nav_menu.appendChild(elem);
  });
};
