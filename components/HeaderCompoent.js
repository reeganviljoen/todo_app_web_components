export default class HeaderComponent extends HTMLElement {
  constructor() {
      super();
      this.setProps();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open"});
    const header_element = document.createElement("span")
    header_element.textContent = this.text;
    header_element.setAttribute("class", "header");
    this.shadowRoot.append(header_element)
  }

  setProps() {
    this.text = this.hasAttribute("text") ? this.getAttribute("text") : "no text provided";
  }
}