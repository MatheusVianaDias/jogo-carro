//yAtor
let xAtor = 100
let yAtor = 555

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 60, 70)
}



function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor = yAtor - 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor = yAtor + 3;
  }
}