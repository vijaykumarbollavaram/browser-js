inputText.addEventListener('change', function(event) {
    console.log("Change event", this.value);
});

inputText.addEventListener('input', function(event) {
    console.log("input type event", this.value);
});

inputText.addEventListener('copy', function(event) {
    event.clipboardData.setData('text/plain', "Hello World");
    event.preventDefault(); // Prevent default copy action
})

inputText.addEventListener('paste', function(event) {
    console.log("paste event", event.clipboardData.getData('text/plain'));
})