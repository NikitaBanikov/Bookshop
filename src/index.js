import { Slider } from "./Slider.js";
import { HeaderNavigation } from "./HeaderNavigation.js";
import { Categories } from "./Categories.js";
import { CardsWrapper } from "./CardsWrapper.js";
import "../css/base.css";

export const cardsWrapper = document.querySelector('.cards-wrapper');

Slider();

HeaderNavigation();

Categories();

CardsWrapper();