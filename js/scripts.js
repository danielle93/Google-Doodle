// YOUR SCRIPTS GO HERE

var img0 = '../img/200-1.jpg';
var img1 = '../img/200-2.jpg';
var img2 = '../img/200-3.jpg';

// Get Random Number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display randomized images
$('#random').attr( 'src', eval('img' + numRand));
