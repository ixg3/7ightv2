// devmode.js — Enables dev mode via input

import { enableDevMode, isDevOverride } from './puzzles.js';

function checkDevCode(input) {
  if (isDevOverride(input)) {
    enableDevMode();
    appendOutput("[DEV MODE ENABLED] You now bypass all puzzles.");
    return true;
  }
  return false;
}

export { checkDevCode };