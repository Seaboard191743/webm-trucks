import { resTitle, dropdown } from "../constants";
import data from "../../data.json";

export const setResValues = () => {
  const { stock } = data;
  resTitle.innerText = `${stock.length} Results found`;
  dropdown.forEach((item, i) =>
    item.addEventListener("click", () => {
      item.classList.toggle("dropdown--active");
    })
  );
};
