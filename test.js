function defaultWeight() {
  document.getElementById("test-div").style.fontWeight = "normal";
  console.log(document.getElementById("test-div").style.fontWeight);
  document.getElementById("test-div").style.color = "black"
}

function buttonBold() {
  if (document.getElementById("test-div").style.fontWeight == "normal") {
    console.log("normal " + document.getElementById("test-div").style.fontWeight);
    document.getElementById("test-div").style.fontWeight = "bold";
    document.getElementById("bold-button").innerHTML = "normal";
  }
  else {
    console.log("bold " + document.getElementById("test-div").style.fontWeight);
    document.getElementById("test-div").style.fontWeight = "normal";
    document.getElementById("bold-button").innerHTML = "bold";
  }
}

function buttonColor() {
  var color = getRandomColor();
  var rgb = hexToRgb(color);
  console.log(color + ": " + rgb.r + ", " + rgb.g + ", " + rgb.b)
  document.getElementById("test-div").style.color = color;
  document.getElementById("color-button").innerHTML = color;
}

function buttonBackgroundColor() {
  var color = getRandomColor();
  document.body.style.backgroundColor = color;
  setContrast(hexToRgb(color));
  document.getElementById("background-button").innerHTML = color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function buttonText() {
  console.log(document.getElementById("text-entry").value);
  document.getElementById("test-div").innerHTML = 
  document.getElementById("text-entry").value;
}

// listens for the enter key and presses "text-button" when it hears it
function processKey(e) {
  if (e == null) {
    e = window.event;
  }
  if (e.keyCode == 13) {
    document.getElementById("text-button").click();
    return false;
  }
}

function calculateFunction() {
  let one = Number(document.getElementById("first-number").value);
  let two = Number(document.getElementById("second-number").value);
  let op = document.getElementById("operators").value;
  console.log(one + " " + op + " " + two);

  switch (op) {
    case "plus":
      document.getElementById("sum").innerHTML = (one + two);
      break;
    case "minus":
      document.getElementById("sum").innerHTML = (one - two);
      break;
    case "mult":
      document.getElementById("sum").innerHTML = (one * two);
      break;
    case "divide":
      document.getElementById("sum").innerHTML = (one / two);
      break;
    default:
      break;
  }
  
}

const hexToRgb = hex => {
  // turn hex val to RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
      ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
      : null
}

function setContrast(rgb) {
  // randomly update
  rgb.r = Math.round(Math.random() * 255);
  rgb.g = Math.round(Math.random() * 255);
  rgb.b = Math.round(Math.random() * 255);

  // http://www.w3.org/TR/AERT#color-contrast
  var o = Math.round(((parseInt(rgb.r) * 299) +
                      (parseInt(rgb.g) * 587) +
                      (parseInt(rgb.b) * 114)) / 1000);
                      
  console.log("o: " + o);
  var fore = (o > 125) ? 'black' : 'white';
  var back = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
  //$('#bg').css('color', fore); 
  document.body.style.color = fore;
  //$('#bg').css('background-color', back);
  

}
