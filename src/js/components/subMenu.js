import { fetchData } from "../helpers/fetch-data";
import { createElement } from "../helpers/create-element";
import { sub_menu } from "../constants";
import data from "../../data.json";

export const createSubMenu = () => {
  const { breadcrumbs } = fetchData(data);
  breadcrumbs.forEach((item) => {
    const elem = createElement({
      tagN: "a",
      classN: ["subMenu__item"],
      attributes: { href: item.href },
    });
    elem.innerText = item.text;
    sub_menu.appendChild(elem);
  });
};
