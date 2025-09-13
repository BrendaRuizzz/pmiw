// Brenda Ruiz com1
// obra nº8: "Acordes poco convencionales"
// link del video: https://youtu.be/C2WDVHrteWQ

let img;
let cant = 10;
let cant2 = 40;
let tam;
let tam2;
let invertirColores = false;

function preload () {
  img = loadImage ("data/ref.jpg");
}

function setup() {
  createCanvas (800, 400);
  tam = height/cant;
  tam2 = height/ cant2;
}

function draw() {
  image (img, 0, 0, 400, 400);
  grilla (400, 0, cant, cant2, tam, tam2);
  grilla(480, 90, 24, 6, tam2, tam);
}

function mousePressed () {
  invertirColores = !invertirColores;
}
