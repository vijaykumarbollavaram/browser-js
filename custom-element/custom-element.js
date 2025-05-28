class Task extends HTMLElement {
  constructor() {
    super()
  }
  static get observedAttributes() {
    return ["name"]
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
  }
  connectedCallback() {
    console.log(this.innerHTML)
    console.log("connected");
    const a = this.getAttribute('name')
    console.log(a);
  }

}

customElements.define('hello-name', Task)


const but = document.getElementById('button');
but.addEventListener('click', function() {
  const ele = document.querySelector('hello-name')
  ele.setAttribute('name', "Akash");
})