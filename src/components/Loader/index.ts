import { BaseElement } from "../../BaseElement";
import template from "./index.html";

export class Loader extends BaseElement {
  loader: HTMLDivElement;
  pieces: NodeListOf<HTMLDivElement>;

  constructor() {
    super();
    this.template = template;
    this.loader = this.shadowRoot.querySelector(".loader");
    this.pieces = this.loader.querySelectorAll(".piece");
  }

  static get observedAttributes() {
    return ["color", "size"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "color":
        this.pieces.forEach((piece) =>
          piece.style.setProperty("--color", newValue)
        );
        break;
      case "size":
        this.loader.style.setProperty("--size", newValue);
    }
  }
}

customElements.get("drk-loader") ?? customElements.define("drk-loader", Loader);
