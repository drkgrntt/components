import { BaseElement } from "../../BaseElement";
import template from "./index.html";

export class Button extends BaseElement {
  button: HTMLButtonElement;
  onClick: (event: MouseEvent) => void = (_) => {};

  constructor() {
    super();
    this.template = template;
    this.button = this.shadowRoot.querySelector("button");
  }

  static get observedAttributes() {
    return ["color", "background", "click"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "click":
        this.changeClickHandler(newValue);
        break;
    }
  }

  changeClickHandler(value: string) {
    this.onClick = (event) => new Function("event", value)(event);
  }

  changeButtonStyle(name: string, value: string) {
    this.button.style.setProperty(name, value);
  }

  connectedCallback() {
    this.button.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this.handleClick);
  }

  handleClick = async (event: MouseEvent) => {
    this.button.disabled = true;
    this.button.querySelector(".loader")?.classList.remove("hidden");
    this.button.querySelector("slot")?.classList.add("hidden");

    await this.onClick(event);

    this.button.disabled = false;
    this.button.querySelector(".loader")?.classList.add("hidden");
    this.button.querySelector("slot")?.classList.remove("hidden");
  };
}

customElements.get("drk-button") ?? customElements.define("drk-button", Button);
