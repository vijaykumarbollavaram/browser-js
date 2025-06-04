grandParent.addEventListener('click', function(e) {
    console.log("Grand parent in capture")
    
}, true)
parents.addEventListener('click', function(e) {
    console.log("Parent in capture")
}, false)
child.addEventListener('click', function(e) {
    console.log("Child in capture")
}, true)

grandParent.addEventListener('click', function(e) {
    console.log("Grand parent in bubbling")
})
parents.addEventListener('click', function(e) {
    console.log("Parent in bubbling")
})
child.addEventListener('click', function(e) {
    console.log("Child in bubbling")
})