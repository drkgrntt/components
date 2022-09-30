import { BaseElement } from "../../BaseElement";
import template from "./index.html";

export class Field extends BaseElement {
  constructor() {
    super();
    this.template = template;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["validation"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "validation":
        this.shadowRoot.querySelector("[data-validation]").textContent =
          newValue;
    }
  }
}

customElements.get("drk-field") ?? customElements.define("drk-field", Field);
