//JavaScript for adding functionality to this webpage....
var selected = "";

function handleSelection(radio) {
  if (radio.checked) {
    selected = radio.parentElement.querySelector("img").alt;

    console.log(selected);
  }
}

//first, let's find the text where we'll put the result.
var result = document.getElementById("result-text");

/* now, let's find the submit button, then add this function to the HTML DOM 'onclick' event. in other words, make it so that when the button is clicked, it will run this code... */

document.getElementById("mycoolbutton").onclick = function optional_name() {
  /*lets get our variable (months) from the input field: */

  var months = document.getElementById("months").value;

  if (months == "") {
    //handle a blank input
    months = 0; //
    result.innerText =
      "After 0 months, you will have 1 pair, for a total of 2 rabbits!";
  } else {
    //console.log("entered number of months: " + months)
    pairs = compute_rabbits(months);
    //get the answer using our helper function...

    result.innerText =
      "After " +
      months +
      " months, you will have " +
      pairs +
      " pair(s), for a total of " +
      pairs * 2 +
      " rabbits!";
    //now change the text on the page to display the answer properly.
  }
};

/* Helper Functions! */

function compute_rabbits(x) {
  return fib(parseInt(x) + 2);

  //the formula for this particular problem is the n+2th Fibonacci number.
  //source: https://proofwiki.org/wiki/Rabbit_Problem/Solution
}

// you can ignore the code below, it's just a helper function for the fibonacci series. Ref: https://www.geeksforgeeks.org/different-ways-to-print-fibonacci-series-in-java/ (but converted to JavaScript by shm.)
// It's a Dynamic Programming approach that could be improved but that's not the point of this lol.

function fib(x) {
  //console.log("lets make some rabbits...")
  //if you're curious, I'm using BigInts because the numbers can get very big. Rabbits multiply fast!! don't think about it too hard though (unless you need to use very big numbers in the future one day)
  const f = new BigInt64Array(x + 1);

  f[0] = 0n;
  f[1] = 1n;

  for (i = 2; i <= parseInt(x); i++) {
    //console.log("i: " + i + " previous: " + f[i-1] + " ,  " + f[i-2] + 'together: ' + (f[i-1] + f[i-2]));
    f[i] = f[i - 1] + f[i - 2];
    //console.log(" current f[i]:" + f[i]);
  }
  return parseInt(f[x]);
}
/*-- end of helper functions--*/

//end of my javascript for this page!
