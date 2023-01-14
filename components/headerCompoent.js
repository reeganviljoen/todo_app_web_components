export default class HeaderComponent extends HTMLElement {
  constructor() {
      super();
    }
    
  data() {
    this.setProps();
    this.attachShadow({ mode: "open"});

    const headerElement = document.createElement("div")
    headerElement.innerHTML = this.headerHTML();
    
    this.shadowRoot.append(headerElement)
  }

  connectedCallback() {
    this.data();
  }

  setProps() {
    this.text = this.hasAttribute("text") ? this.getAttribute("text") : "no text provided";
  }

  headerHTML() {
    return(`
      <h1 class="header"> ${this.text}</h1>
    `)
  }
}