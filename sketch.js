let figura;
let fig = [];
let n = 1;

var speech;
let palavra = " Exibição de três figuras";
let conf;
console.log('ml5 version: ', ml5.version)

let soundClassifier;

function preload() {
  fig[1] = loadImage('seventhSealChess.jpeg');
  fig[2] = loadImage('turkishAngoraCat.jpeg');
  fig[3] = loadImage('pink-e-cerebro.jpg');
  let prob = {
    probabilityThreshold: 0.9999
  }
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', prob);
}


function setup() {

  createCanvas(200, 200);
  let botao = createButton('clique aqui');
  createP('Diga, em Inglês, números de um a três.');

  soundClassifier.classify(gotResults);

  speech = new p5.Speech();

  //speech.onStart = voiceReady();
  botao.mousePressed(voiceReady);
}

function gotResults(error, results) {
  if (error) {
    console.log('erro : ', error);
  }
  palavra = results[0].label;
  conf = results[0].confidence;
  console.log(palavra, conf);

  //createP('confiança: ' + conf);
  if (palavra == 'one') {
    //figura = fig1;
    palavra1 = 'Mostrando figura um';
    console.log(palavra);
    n=1;
  } else if (palavra == 'two') {
    //figura = fig1;
    palavra1 = 'Mostrando figura dois';
    console.log(palavra);
    n=2;
  } else if (palavra == 'three') {
    //figura = fig1;
    palavra1 = 'Mostrando figura três';
    console.log(palavra);
    n=3;
  } else { palavra1 = ('Eu não tenho essa figura, ainda.'); 
  }


  speech.speak(palavra1);
  createP(palavra);
}

function voiceReady() {

  console.log(speech.voices);

  speech.setPitch(random(0.5, 1));

  speech.setLang('pt-BR');

  speech.speak(palavra);

  console.log(speech.voices);
}

function draw() {
  background(fig[n]);
//  image(fig[n], 0, 0)
}
