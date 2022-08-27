let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//carro
let xCarro = 850
let yCarro = 60
let velocidadeCarro1= 2;

//carro 2
let xCarro2 = 850
let yCarro2 = 220
let velocidadeCarro2= 2.5;

//carro 3
let xCarro3 = 850
let yCarro3 = 140
let velocidadeCarro3= 3.2;

//yAtor
let yAtor = 555

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/onepiece.png");
  imagemCarro = loadImage("imagens/akaino.png");
  imagemCarro2 = loadImage("imagens/aaokiji.png");
  imagemCarro3 = loadImage("imagens/kizuru.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
}

function mostraAtor() {
  image(imagemDoAtor, 100, yAtor, 60, 70)
}

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, 80, 70)
  image(imagemCarro2, xCarro2,yCarro2, 80, 70)
  image(imagemCarro3, xCarro3, yCarro3, 80, 70)
}

function movimentaCarro(){
  xCarro -= velocidadeCarro1
  xCarro2 -= velocidadeCarro2
  xCarro3 -= velocidadeCarro3
}

function voltaPosicaoInicialDoCarro(){
  if (xCarro < -50){
    xCarro = 850;
  }
  if (xCarro2 < -50){
    xCarro2 = 850;
  }
  if (xCarro3 < -50){
    xCarro3 = 850;
  }
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor = yAtor - 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor = yAtor + 3;
  }
}



