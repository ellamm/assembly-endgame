import { words } from "./words";

export function getFarewellText(language) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  return options[getRandomIndex(options)];
}

function getRandomIndex(property) {
  return Math.floor(Math.random() * property.length);
}

export function getRandomWord() {
  return words[getRandomIndex(words)];
}
