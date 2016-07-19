var randomButton = $('.random');
var resetButton = $('.reset');

$(function() {

randomButton.on('click', function() {
  var randomColor = 'rgb(' +
                    (Math.floor(Math.random() * 255)) +
                    ',' +
                    (Math.floor(Math.random() * 255)) +
                    ',' +
                    (Math.floor(Math.random() * 255)) +
                    ')';
  $('body').css('background-color', randomColor);
});

resetButton.on('click', function() {
  $('body').css('background-color', '#FFF')
});

});
