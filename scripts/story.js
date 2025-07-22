// story.js — Handles narrative branching, trust system, and dialogue output

let trust = {
  em: 0,
  vex: 0,
  lux: 0
};

let addiction = 0;
let luxLoyalty = 0;

function applyDialogueChoice(character, choiceEffect) {
  if (trust[character] !== undefined) {
    trust[character] += choiceEffect;
  }
}

function applyAddiction(amount) {
  addiction += amount;
  if (addiction > 10) addiction = 10;
  if (addiction < 0) addiction = 0;
}

function setLuxLoyalty(level) {
  luxLoyalty = level;
}

function getStoryState() {
  return {
    trust,
    addiction,
    luxLoyalty
  };
}

function getCharacterTrust(character) {
  return trust[character] || 0;
}

export {
  applyDialogueChoice,
  applyAddiction,
  setLuxLoyalty,
  getStoryState,
  getCharacterTrust
 };