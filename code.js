var lines, markov, data, x = 160, y = 240;

function preload() {

  data = loadStrings('data/textsource.txt');

}

function setup() {
  createCanvas(500, 500);

  textFont('times', 12);
  textAlign(LEFT);

  lines = ["click to (re)generate!"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data.join(' '));

  drawText();
}

function drawText() {

  //background(255);
  //text(lines.join(' '), x, y, 400, 400);
  select('#text').html(lines.join(' '));
}

function mouseClicked() {

  x = y = 50;
  lines = markov.generateSentences(30);
  drawText();
}
