/*Variables*/
  var Body = document.getElementById('Body');
  var Red = document.getElementById('Red');
  var Orange = document.getElementById('Orange');
  var Yellow = document.getElementById('Yellow');
  var Green = document.getElementById('Green');
  var Blue = document.getElementById('Blue');
  var Purple = document.getElementById('Purple');
/*Functions*/
  var redClick = function () {
    Body.style.backgroundColor = 'Red';
  };
  var orangeClick = function () {
    Body.style.backgroundColor = 'Orange';
  };
  var yellowClick = function () {
    Body.style.backgroundColor = 'Yellow';
  };
  var greenClick = function () {
    Body.style.backgroundColor = 'Green';
  };
  var blueClick = function () {
    Body.style.backgroundColor = 'Blue';
  };
  var purpleClick = function () {
    Body.style.backgroundColor = 'Purple';
  };
/*Event Listeners*/
  Red.addEventListener('click', redClick);
  Orange.addEventListener('click', orangeClick);
  Yellow.addEventListener('click', yellowClick);
  Green.addEventListener('click', greenClick);
  Blue.addEventListener('click', blueClick);
  Purple.addEventListener('click', purpleClick);
