import data from "../data.json";
export const nav = document.querySelector(".nav");
export const nav_menu = nav.querySelector(".nav__menu");
export const sub_menu = nav.querySelector(".nav__subMenu");
export const productList = document.querySelector(".productList");
export const productList_body = productList.querySelector(".productList__body");
export const result = document.querySelector(".result");
export const resTitle = result.querySelector(".result__title");
export const dropdown = result.querySelectorAll(".dropdown");
export const param_body = result.querySelectorAll(".param__body");

const title = document.head.querySelector("title");
title.innerText = data.page_meta.title;
