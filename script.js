function compute_x_multiply_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x * y;
  return z;
}

function ask_xy() {
  var x = document.getElementById("myForm").elements[0].value;
  var y = document.getElementById("myForm").elements[1].value;
  var z = compute_x_multiply_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "30px";
  x.style.color = "brown";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}
