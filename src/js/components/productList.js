import { fetchData } from "../helpers/fetch-data";
import { productList_body } from "../constants";
import data from "../../data.json";

export const createProductItem = () => {
  const { stock, page_text, nav } = data;
  stock.forEach((item, i) => {
    const { image, title, make, price, price_currency, ...rest } = item;
    const { year, mileage, mileage_measure, axle_configuration } = rest;
    let paragraph = page_text[i] ? page_text[i].content : "No Data";
    const template = `
          <section class = "productItem">
              <div class = "productItem__image">
                  <img class = "image" src = ${image} alt = ${make}>
              </div>
              <div class = "content">
                <div class = "productItem__content">
                  <div class = "productItem__header">
                    <span class = "productItem__title">${title}</span>
                  </div>
                  <p class = "content__paragraph">${paragraph}</p>
                  <div class = "content__tags">
                    <div class = "content__year">${year}</div>
                    <div class = "content__miles">
                    ${new Intl.NumberFormat("ru-RU").format(
                      mileage
                    )} ${mileage_measure}</div>
                    <div class = "content__axle">${axle_configuration}</div>
                  </div>
                </div>
                <div class = "productItem__price">${price_currency} 
                ${new Intl.NumberFormat("ru-RU").format(price)}</div>
              </div>
          </section>
      `;
    productList_body
      ? productList_body.insertAdjacentHTML("beforeend", template)
      : null;
  });
};
