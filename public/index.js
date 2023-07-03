//JavaScript for adding functionality to this webpage....
// I used provided code and customized to my needs.
// Radio SVGs to select mode of transportation
var selected = "walking";
// Setting it to 3.1 for default walking value
var mph = 3.1;
var array_modes = ["walking", "skateboard", "segway", "scooter", "hoverboard"];

function handleSelection(radio) {
  if (radio.checked) {
    selected = radio.parentElement.querySelector("img").alt;
    mph = parseFloat(radio.value);

    document.getElementById("selected-option").textContent = selected;
    // document.getElementById("mph-calculated").textContent = mph;
  }
}
// Sets default value to walking
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("selected-option").textContent = "walking";
});

//first, let's find the text where we'll put the result.
var result = document.getElementById("result-text");

/* now, let's find the submit button, then add this function to the HTML DOM 'onclick' event. in other words, make it so that when the button is clicked, it will run this code... */

document.getElementById("mycoolbutton").onclick = function optional_name() {
  /* Get variable (distance) from the input field: */
  var distance = document.getElementById("distance").value;
  // Remove the string
  if (distance == "") {
    //handle a blank input
    distance = 0; //
    result.innerText = "You must not need to go anywhere... enjoy your day!";
  } else {
    time = compute_distance(distance, mph);
    result.innerText =
      "It will take " + time + " minutes to get there by " + selected + "!";
  }

  // Compute the rest
  var remaining_modes = array_modes.filter(function (mode) {
    return mode !== selected;
  });

  var remaining_list = remaining_modes.map(function (mode) {
    var mode_time = compute_distance(distance, getMphByMode(mode));
    return mode + ": " + mode_time + " minutes";
  });

  document.getElementById("remaining-list").innerHTML =
    remaining_list.join("<br>");
};

/* Helper Functions! */
function compute_distance(distance, mph) {
  var value = (distance / mph) * 60;
  return Math.round(value);
}

function getMphByMode(mode) {
  switch (mode) {
    case "walking":
      return 3.1;
    case "skateboard":
      return 27;
    case "segway":
      return 12;
    case "scooter":
      return 15.5;
    case "hoverboard":
      return 6;
    default:
      return;
  }
}
