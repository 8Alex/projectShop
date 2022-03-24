import "./scss/index.scss";
import "./js/burger.js";
import "./js/search.js";
import "./js/cart.js";

import {
    goodsInBasket
} from "./js/goods.js";

import {
    initCatalog
} from "./js/catalog";
import {
    initProductPage
} from "./js/product";
import {
    initProductMain
} from "./js/mainProducts";

const catalog = document.getElementById('catalog');
const productPage = document.getElementById('product')
const mainPage = document.getElementById('main')

if (catalog) {
    initCatalog().then(() => {
        goodsInBasket();
    })
}

if (productPage) {
    initProductPage()
}

if (mainPage) {
    initProductMain()
}