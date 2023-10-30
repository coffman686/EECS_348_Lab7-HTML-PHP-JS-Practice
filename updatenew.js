function updateParagraph() {
    var widthb = document.getElementById("widthb").value;
    var bRed = document.getElementById("bRed").value;
    var bGreen = document.getElementById("bGreen").value;
    var bBlue = document.getElementById("bBlue").value;
    var bgRed = document.getElementById("bgRed").value;
    var bgGreen = document.getElementById("bgGreen").value;
    var bgBlue = document.getElementById("bgBlue").value;
    var updatedParagraph = document.getElementById("paragraph");
    updatedParagraph.style.borderColor = `rgb(${bRed}, ${bGreen}, ${bBlue})`;
    updatedParagraph.style.borderWidth = widthb
    updatedParagraph.style.backgroundColor = `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`;
    }