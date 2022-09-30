import { BaseElement } from "../../BaseElement";
import { Loader } from "../Loader";
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
      case "color":
        this.changeButtonStyle("--color", newValue);
        break;
      case "background":
        this.changeButtonStyle("--background", newValue);
        break;
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
    const buttonContent = this.button.innerHTML;
    const prevPadding = this.button.style.padding;

    this.button.disabled = true;
    this.button.innerHTML = "";
    this.button.style.padding = ".5rem 4rem";
    this.button.append(new Loader());

    await this.onClick(event);

    this.button.style.padding = prevPadding;
    this.button.innerHTML = buttonContent;
    this.button.disabled = false;
  };
}

customElements.get("drk-button") ?? customElements.define("drk-button", Button);
