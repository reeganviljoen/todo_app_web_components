export default class TodoItemComponent extends HTMLElement {
  constructor() {
      super();
    }
    
  data() {
    this.setProps();
    this.attachShadow({ mode: "open"});

    const todoItemElement = document.createElement("div")
    todoItemElement.innerHTML = this.todoItemHTML();
    
    this.shadowRoot.append(todoItemElement)
  }

  connectedCallback() {
    this.data();
  }

  setProps() {
    this.title = this.hasAttribute("title") ? this.getAttribute("title") : "Lorem Ipsum";
    this.description = this.hasAttribute("description") ? this.getAttribute("description") : "Lorem ipsum dolor sit amet,\
                                                                                       consectetur adipiscing elit, \
                                                                                       sed do eiusmod tempor incididunt\
                                                                                        ut labore et dolore magna aliqua.";
  }

  todoItemHTML() {
    return(`
      <h2"> ${this.title}</h2>
      <p> ${this.description}</p>
    `)
  }
}