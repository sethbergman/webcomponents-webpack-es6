import { WebComponent } from "web-component";

@WebComponent("hello-world", {
  template: require("./hello-world.html"),
  shadowDOM: true,
  isPolymer: `<hello-world></hello-world>`
})
export default class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this._who = '';
    this._name = '';  //this property is bind to element attribute becouse of observedAttributes
  }

  // static get observedAttributes() {
  //   return ["who", "name"];
  // }

  // Only called for the who attributes due to observedAttributes
  // attributeChangedCallback() {
  //   this._who = newValue; this is handled by WebComponent decorator
  //   this._updateRendering();
  // }

  connectedCallback() {
    //  this is handled by WebComponent decorator
    if (this.hasAttribute('who' || 'name')) {
      this._who = this.getAttribute('who');
      this._name = this.getAttribute('name');
    }
    this._updateRendering();
  }

  // Decorator creates setter/getter methods for observed attributes
  //we do not have to do this

  // get name() {
  //   return this._name;
  // }
  //
  // set who(v) {
  //   this.setAttribute("who", v);
  // }

  _updateRendering() {
    if (this.shadowRoot) {
      this.shadowRoot.querySelector("#who").textContent = `, ${this._who}`;
      this.shadowRoot.querySelector("#name").textContent = `, ${this._name}`;
    }
  }
}
