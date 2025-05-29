console.log(grandParent)
console.log(paren)
console.log(child)

const customEvent = new Event('cutomEvent', {
  bubbles: true
})

grandParent.addEventListener("cutomEvent", function(e) {
  console.log("custom evnet listner", e.isTrusted)
})

button.addEventListener('click', function(e) {
  console.log("button click", e.isTrusted)
  child.dispatchEvent(customEvent)
})