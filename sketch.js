let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
//carro
let xCarro = 850
//yAtor
let yAtor = 555

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();

}

function mostraAtor() {
  image(imagemDoAtor, 100, yAtor, 35, 35)
}

function mostraCarro() {
  image(imagemCarro, xCarro, 70, 70, 50)
}

function movimentaCarro() {
  xCarro -=2;
}

function movimentaCarro(){
  if (keyIsDown(UP_DOWN)){
    yAtor -=3;
  }
}