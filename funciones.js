function grilla (x, y, cant, cant2, tam, tam2) {
  for (let i= 0; i < cant; i++) {
    for (let j = 0; j < cant2; j++) {
      let centroX = x+i*tam + tam / 2;
      let centroY = y+j*tam2 + tam2 / 2;

      let distancia = dist(mouseX, mouseY, centroX, centroY);
      let angulo = 0;
      let distMax = 150;
      let zero = 0;

      // determino que al pasar el mouse sobre el rectangulo, gira 180 grados
      if (distancia < distMax) {
        angulo = map(distancia, zero, distMax, PI, zero);
      }

      push();
      translate(centroX, centroY);
      rotate(angulo);
      // los rectangulos se pintan de rojo si el mouse está muy cerca
      if (distancia < 20) {
        fill(255, 0, 0);
      } else {
        if (parImpar(i, j)) {
          if (invertirColores) {
            fill(0);
          } else {
            fill(255);
          }
        } else {
          if (invertirColores) {
            fill(255);
          } else {
            fill(0);
          }
        }
      }
      rectMode(CENTER);
      rect(zero, zero, tam, tam2);
      pop();
    }
  }
}

function parImpar (num1, num2) {
  if ((num1 + num2)% 2 == 0) {
    return true;
  } else {
    return false;
  }
}
