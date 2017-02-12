// Get the modal
var modal = document.getElementById("signUpModal");

// Get the button that opens the modal
var btn = document.getElementById("signUpButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the body
var body = document.querySelector("body");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    body.className = "modal-open";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    body.className = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.className = "";
    }
}