import { StateManager } from "../../../utils/StateManager";

export class HomeComponent extends HTMLElement {
  constructor() {
    super();
    // Setup the component
    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        /* Component styles here */
      </style>
      <div>
        <!-- Component markup here -->
        Hello
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }

  // This is the data that will be used to setup the component

  state = {
    counter: 0,
  };

  init() {
    // Tell the StateManager to use the state object from this file
    StateManager.init(this.state);
    // // Listen for state changes and the state object from this file
    document.addEventListener("stateChange", this.syncState);
    // // Setup the increment and decrement buttons
    this.setupIncrementButton();
    this.setupDecrementButton();
    console.log("Home page initialized");
  }

  syncState() {
    this.state = StateManager.getState();
  }

  incrementCounter() {
    this.state.counter++;
    StateManager.updateAppState(this.state);
  }

  decrementCounter() {
    this.state.counter--;
    StateManager.updateAppState(this.state);
  }

  setupIncrementButton = () => {
    const button = document.getElementById("counter-button-increment");
    button?.addEventListener("click", this.incrementCounter);
  };

  setupDecrementButton = () => {
    const button = document.getElementById("counter-button-decrement");
    button?.addEventListener("click", this.decrementCounter);
  };
}
