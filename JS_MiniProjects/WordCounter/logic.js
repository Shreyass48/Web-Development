let text = document.getElementById("text");

text.addEventListener("input", function () {
  // find chars here
  var data = this.value;
  let char = data.length; // arr so .length method

  document.getElementById("char").innerHTML = char; // replace actual html

  data = data.trim(); // use to trim string & ending spaces

  // find words
  let words = data.split(" "); // making words arr

  let cleanlist = words.filter(function (el) {
    // clean words arr (internal spaces)
    if (el != " ") return el;
  });

  document.getElementById("word").innerHTML = cleanlist.length;
});
