anchor.addEventListener("contextmenu", function() {
    console.log("context changerd on a")
    event.preventDefault();
    event.stopPropagation();
})

document.addEventListener("contextmenu", function() {
    console.log("context changerd on body")
    event.preventDefault();
})