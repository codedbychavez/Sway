import * as classes from "./css/index.scss";

import { HomeComponent } from "./components/Pages/Home/HomeComponent";

const app = {
  init() {
    customElements.define("home-component", HomeComponent);
    const homeComponent = document.querySelector("home-component");
    homeComponent.init();
  },
};

app.init();

// document.body.className = classes.body;
