let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = createSlider(0, 100, 50);
  slider.position(width / 2 - 250, height / 2 - 100);
  slider.size(500);

  slider.style("-webkit-appearance", "none");
  slider.style("height", "10px");
  slider.style("border-radius", "10px");
  slider.style("outline", "none");
}

function draw() {
  let valor = slider.value();

  let cor;
  let titulo;
  let descricao;

  if (valor < 33) {
    cor = color(70, 170, 120);
    titulo = "Conservador";
    descricao =
      "Prioriza segurança e reduz riscos.\n\n" +
      "Aprova apenas perfis mais confiáveis.\n" +
      "Reduz chances de inadimplência.\n" +
      "Crescimento mais controlado.";
  } else if (valor < 66) {
    cor = color(230, 190, 60);
    titulo = "Balanceado";
    descricao =
      "Busca equilíbrio entre risco e crescimento.\n\n" +
      "Mantém uma estratégia moderada.\n" +
      "Controla o risco sem limitar demais aprovações.\n" +
      "Gera uma expansão mais equilibrada.";
  } else {
    cor = color(220, 80, 80);
    titulo = "Agressivo";
    descricao =
      "Maximiza aprovações e crescimento.\n\n" +
      "Aceita perfis com maior risco.\n" +
      "Aumenta o potencial de crescimento.\n" +
      "Eleva a exposição à inadimplência.";
  }

  // fundo com gradiente 
  desenharGradiente(cor);

  // cor da barra
  slider.style("background", cor.toString());

  // título
  noStroke();
  fill(30);
  textAlign(CENTER);
  textSize(42);
  text("Estratégia do Modelo", width / 2, height / 2 - 210);

  // subtítulo
  fill(80);
  textSize(18);
  text(
    "Ajuste o nível de risco aceito pelo sistema",
    width / 2,
    height / 2 - 175
  );

  // labels da barra
  fill(70);
  textSize(15);
  textAlign(LEFT);
  text("Conservador", width / 2 - 250, height / 2 - 115);

  textAlign(RIGHT);
  text("Agressivo", width / 2 + 250, height / 2 - 115);

  // sombra da caixa
  noStroke();
  fill(0, 35);
  rectMode(CENTER);
  rect(width / 2 + 8, height / 2 + 128, 610, 290, 22);

  // caixa principal
  fill(cor);
  stroke(50);
  strokeWeight(2);
  rect(width / 2, height / 2 + 120, 600, 280, 22);

  // texto da caixa
  noStroke();
  fill(255);
  textAlign(CENTER);

  textSize(36);
  text(titulo, width / 2, height / 2 + 25);

  textSize(20);
  textLeading(32);
  text(descricao, width / 2, height / 2 + 85);
}

function desenharGradiente(corBase) {
  let corTopo = color(245);
  let corBaixo = lerpColor(color(255), corBase, 0.18);

  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let corLinha = lerpColor(corTopo, corBaixo, inter);

    stroke(corLinha);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  slider.position(width / 2 - 250, height / 2 - 100);
}