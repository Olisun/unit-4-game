$(document).ready(function() {

  var ruby = $('#ruby');
  var diamond = $('#diamond');
  var yellowThingy = $('#yellowThingy');
  var emerald = $('#emerald');

  ruby.on("click", function() {
    alert('ruby has been clicked')
  });

  diamond.on("click", function() {
    alert('diamond has been clicked')
  });

  yellowThingy.on("click", function() {
    alert('yellowThingy has been clicked')
  });

  emerald.on("click", function() {
    alert('emerald has been clicked')
  });


});