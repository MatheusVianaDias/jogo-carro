let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro = loadImage("imagens/carro-1.png");
}

function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 555, 35, 35);
    image(imagemDoCarro, 500, 70, 70, 50);
    
  }