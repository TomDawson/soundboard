/* Obtain number of elements with class name .soundboard-object */
var soundboardObjectCount = document.querySelectorAll(".soundboard-object").length;

/* Add click event listener to all .soundboard-object elements */
for (var i = 0; i < soundboardObjectCount, i++) {
    document.querySelector(".soundboard-object")[i].addEventListener("click", playSound());
}

function playSound() {
    console.log("soundboard-object-clicked");
}

window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
} 
