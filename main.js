var colors = []
var numSquares = 6
var pickedColor 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            if (this.textContent === "Easy") {
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        });
    }
    return i;
}



// adding colors in array to the squares in the html file
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        // add  click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab background color of clicked square
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                displayMessage.textContent = 'Nicccee!!!';
                resetButton.textContent = "Play again ?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                this.style.background = '#232323';
                displayMessage.textContent = 'Try again';
            }
        });
    }
    return i;
}

function reset() {
    // generate all new colors
    colors = genRandomColors(numSquares);
    // pick new random color from display
    pickedColor = pickColor();
    // change color display to match those of picked color
    colorDisplay.textContent = pickedColor;
    // set message display to none
    resetButton.textContent = 'New colors'
    displayMessage.textContent = '';
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';  
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
}



resetButton.addEventListener("click", function () {
    reset();
})


function changeColors(color) {
    // loop through all the colors and change all to the selected color
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function genRandomColors(num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    // when we get an array from th DOM, spaces are automatically added in between commas
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function init() {
    colorDisplay.textContent = pickedColor;
    setupModeButtons();
    setupSquares();
    reset();
}
// initialize code
init();
