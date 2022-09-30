import { BaseElement } from "../../BaseElement";
import template from "./index.html";

export class Container extends BaseElement {
  loader: HTMLDivElement;
  pieces: NodeListOf<HTMLDivElement>;

  constructor() {
    super();
    this.template = template;
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
    }
  }
}

customElements.get("drk-container") ??
  customElements.define("drk-container", Container);
