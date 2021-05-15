import { resTitle } from "../constants";
import data from "../../data.json";

export const setResValues = () => {
  const { stock } = data;
  resTitle.innerText = `${stock.length} Results found`;
};
