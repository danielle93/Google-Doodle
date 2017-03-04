// YOUR SCRIPTS GO HERE

//Draw SVG
var line = $('#heart').drawsvg({
  duration : 1000,
  reverse: false,
  stagger: 1500
});

//Random Number Generator
var limit = 3;
var randNum = Math.floor(Math.random() * limit);
//console.log(randNum);

//Click on Random SVG
$('.corgiButt').click(function () {
    var tmp = true;
    //animate stroke drawing
line.drawsvg('animate');
});



//Random Images
var img0 = 'img/corg0.svg';
var img1 = 'img/corg1.svg';
var img2 = 'img/corg2.svg';
var img3 = 'img/corg3.svg';
var img4 = 'img/corg4.svg';
var img5 = 'img/corg5.svg';
var img6 = 'img/corg6.svg';
var img7 = 'img/corg7.svg';

// Get Random Number
var max = 8;
var numRand = Math.floor(Math.random() * max);

var numRand2 = Math.floor(Math.random() * max);

// Display randomized images
$('#random').attr('src', eval('img' + numRand));
$('#random2').attr('src', eval('img' + numRand2));