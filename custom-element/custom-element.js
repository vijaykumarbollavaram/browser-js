class MyElement extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    console.log("connected")
    this.innerHTML = "Hello"
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name, oldAttr, newAttr) {
    console.log(name, oldAttr, newAttr)
  }
}

customElements.define("custom-element", MyElement)

const ele = document.getElementById("button")
ele?.addEventListener('click', function() {
  const customEle = document.querySelector("custom-element")
  customEle.setAttribute("name", "Ramesh")
})