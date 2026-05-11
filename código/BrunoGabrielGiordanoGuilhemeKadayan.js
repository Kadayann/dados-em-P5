let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = createSlider(0, 100, 50);
  slider.position(width * 0.18, height / 2 - 100);
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
  let descricaoDetalhada;

  if (valor < 33) {
    cor = color(70, 170, 120);
    titulo = "Conservador";

    descricao =
      "Prioriza segurança e reduz riscos.\n\n" +
      "Aprova apenas perfis mais confiáveis.\n" +
      "Reduz chances de inadimplência.\n" +
      "Crescimento mais controlado.";

    descricaoDetalhada =
      "A abordagem conservadora prioriza a segurança financeira do banco.\n\n" +
      "Nesse perfil, o algoritmo tende a ser mais restritivo na concessão de crédito, aprovando principalmente clientes com maior confiabilidade e menor risco de inadimplência.\n\n" +
      "Como resultado, a carteira cresce de forma mais lenta, porém com maior segurança.";

  } else if (valor < 66) {
    cor = color(230, 190, 60);
    titulo = "Balanceado";

    descricao =
      "Busca equilíbrio entre risco e crescimento.\n\n" +
      "Mantém uma estratégia moderada.\n" +
      "Controla o risco sem limitar demais aprovações.\n" +
      "Gera uma expansão mais equilibrada.";

    descricaoDetalhada =
      "A abordagem balanceada busca um ponto intermediário entre segurança e crescimento.\n\n" +
      "Nesse perfil, o algoritmo aceita um nível moderado de risco, permitindo aprovar mais clientes sem abrir mão de critérios importantes de controle.\n\n" +
      "Como resultado, a estratégia favorece uma expansão equilibrada da carteira.";

  } else {
    cor = color(220, 80, 80);
    titulo = "Agressivo";

    descricao =
      "Maximiza aprovações e crescimento.\n\n" +
      "Aceita perfis com maior risco.\n" +
      "Aumenta o potencial de crescimento.\n" +
      "Eleva a exposição à inadimplência.";

    descricaoDetalhada =
      "A abordagem agressiva prioriza o crescimento da carteira e o aumento das aprovações.\n\n" +
      "Nesse perfil, o algoritmo é menos restritivo e aceita clientes com maior nível de risco, buscando ampliar o alcance da concessão de crédito.\n\n" +
      "Como resultado, há maior potencial de retorno e expansão, mas também maior risco.";
  }

  desenharGradiente(cor);

  slider.style("background", cor.toString());

  let blocoX = width * 0.32;

  noStroke();
  fill(30);
  textAlign(CENTER);
  textSize(42);
  text("Estratégia do Modelo", blocoX, height / 2 - 210);

  fill(80);
  textSize(18);
  text("Ajuste o nível de risco aceito pelo sistema", blocoX, height / 2 - 175);

  fill(70);
  textSize(15);
  textAlign(LEFT);
  text("Conservador", blocoX - 250, height / 2 - 115);

  textAlign(RIGHT);
  text("Agressivo", blocoX + 250, height / 2 - 115);


  rectMode(CENTER);

  noStroke();
  fill(0, 35);
  rect(blocoX + 8, height / 2 + 128, 610, 290, 22);

  fill(cor);
  stroke(50);
  strokeWeight(2);
  rect(blocoX, height / 2 + 120, 600, 280, 22);

  noStroke();
  fill(255);
  textAlign(CENTER);

  textSize(36);
  text(titulo, blocoX, height / 2 + 25);

  textSize(20);
  textLeading(32);
  text(descricao, blocoX, height / 2 + 85);


  let caixaX = width * 0.62;
  let caixaY = height / 2 - 150;
  let caixaLargura = 470;
  let caixaAltura = 430;

  rectMode(CORNER);

  noStroke();
  fill(0, 25);
  rect(caixaX + 8, caixaY + 8, caixaLargura, caixaAltura, 22);


  fill(255, 235);
  stroke(cor);
  strokeWeight(3);
  rect(caixaX, caixaY, caixaLargura, caixaAltura, 22);


  noStroke();
  fill(cor);
  textAlign(CENTER);
  textSize(30);
  text(titulo, caixaX + caixaLargura / 2, caixaY + 60);


  fill(50);
  textAlign(LEFT);
  textSize(18);
  textLeading(30);

  text(
    descricaoDetalhada,
    caixaX + 40,
    caixaY + 105,
    caixaLargura - 80,
    caixaAltura - 130
  );
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
  slider.position(width * 0.18, height / 2 - 100);
}