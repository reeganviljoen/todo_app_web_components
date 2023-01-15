export default class TodoItemFormComponent extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    this.data();
  }

  data() {
    this.attachShadow({ mode: "open"});

    const formElement = document.createElement("div")
    formElement.innerHTML = this.formHTML();

    this.shadowRoot.append(formElement)
  }

  createTodo(){

  }

  formHTML() {
    return (`
      <h2> new to-do </h2>
      <form>
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title"><br><br>
        <label for="description">description:</label><br>
        <input type="text" id="description" name="description"><br><br>
        <button>Submit</button>
      </form>
    `)
  }
}