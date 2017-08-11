(function reset() {
  document.getElementById('name-input').value = "Example";
}());

function changeText() {
  var input = document.getElementById('name-input');
  var show = document.getElementById('name-show');

  show.innerHTML = input.value;
}

// function changeColor(newColor) {
//   $("#para").css('color', newColor);
// }
