// import { Exomine } from "./Exomine.js";
import { Governors } from "./Governors.js"

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = Governors();
};

renderAllHTML();