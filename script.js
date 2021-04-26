'use strict';

// Validátor na JSON https://braincast.nl/samples/jsoneditor/ => https://jsonformatter.curiousconcept.com/#
/* Má se psát přes tečkovou notaci, nebo by stačilo pro např. potíže použít pole, protože budu vždy přistupovat ke všem hodnotám najednou?? */

const imgElm = document.querySelector('.img');
imgElm.src = 'obrazky/pampeliska.jfif';
imgElm.alt = 'smetánka lékařská alias pampeliška';

const byliny = {
  jmeno: 'olše lepkavá',
  lecenePotize: [
    'průjem',
    'nachlazení',
    'kloktadlo na záněty dýchacích cest',
    'rozpraskané bradavky u kojících',
  ],
  sbiranaCast: ['list'],
  obdobiSberu: ['duben'],
  poznamka: '',
};

console.log(byliny);
