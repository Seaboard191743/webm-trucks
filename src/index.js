import "./scss/style.scss";

import { createMenu } from "./js/components/menu";
import { createSubMenu } from "./js/components/subMenu";
import { createProductItem } from "./js/components/productList";
import { setResValues } from "./js/components/result";
createMenu();
createSubMenu();
createProductItem();
setResValues();
