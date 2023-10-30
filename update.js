document.addEventListener('DOMContentLoaded', function (){

    function updateParagraph() {
        var width = document.getElementById("width").value;
        var bRed = document.getElementById("bRed").value;
        var bGreen = document.getElementById("bGreen").value;
        var bBlue = document.getElementById("bBlue").value;
        var bgRed = document.getElementById("bgRed").value;
        var bgGreen = document.getElementById("bgGreen").value;
        var bgBlue = document.getElementById("bgBlue").value;
        var updatedParagraph = document.getElementById("paragraph")
        updatedParagraph.style.borderWidth = width;
        updatedParagraph.style.borderColor = `rgb(${bRed}, ${bGreen}, ${bBlue})`;
        updatedParagraph.style.backgroundColor = `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`;
    }


    document.body.addEventListener('click', function(event) {

        if (event.target.id == 'applyButton'){

            applyChanges();
        }
    });
    
});