//carro
let xCarro = 850
let yCarro = 60
let velocidadeCarro1 = 2;

//carro 2
let xCarro2 = 850
let yCarro2 = 220
let velocidadeCarro2 = 2.5;

//carro 3
let xCarro3 = 850
let yCarro3 = 140
let velocidadeCarro3 = 3.2;

//carro 4
let xCarro4 = 850
let yCarro4 = 470
let velocidadeCarro4 = 3.5;

//carro 5
let xCarro5 = 850
let yCarro5 = 390
let velocidadeCarro5 = 4.5;

//carro 6
let xCarro6 = 850
let yCarro6 = 310
let velocidadeCarro6 = 5.0;

function mostraCarro() {
    image(imagemCarro, xCarro, yCarro, 80, 70)
    image(imagemCarro2, xCarro2, yCarro2, 80, 70)
    image(imagemCarro3, xCarro3, yCarro3, 80, 70)
    image(imagemCarro4, xCarro4, yCarro4, 80, 70)
    image(imagemCarro5, xCarro5, yCarro5, 80, 70)
    image(imagemCarro6, xCarro6, yCarro6, 80, 70)

  }
  
  function movimentaCarro() {
    xCarro -= velocidadeCarro1
    xCarro2 -= velocidadeCarro2
    xCarro3 -= velocidadeCarro3
    xCarro4 -= velocidadeCarro4
    xCarro5 -= velocidadeCarro5
    xCarro6 -= velocidadeCarro6
  }
  
  function voltaPosicaoInicialDoCarro() {
    if (xCarro < -50) {
      xCarro = 850;
    }
    if (xCarro2 < -50) {
      xCarro2 = 850;
    }
    if (xCarro3 < -50) {
      xCarro3 = 850;
    }
    if (xCarro4 < -50) {
        xCarro4 = 850;
      }
    if (xCarro5 < -50) {
        xCarro5 = 850;
      }
    if (xCarro6 < -50) {
        xCarro6 = 850;
      }
  }