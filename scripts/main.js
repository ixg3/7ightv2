// main.js — Main input + game loop controller

import { startChapter1Puzzle } from './puzzles.js';
import { checkDevCode } from './devmode.js';

const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('terminal-input');

let currentChapter = 1;

function appendOutput(text) {
  const line = document.createElement('div');
  line.textContent = text;
  output.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function runCommand(command) {
  appendOutput('> ' + command);

  if (checkDevCode(command)) return;

  switch (currentChapter) {
    case 1:
      if (startChapter1Puzzle(command)) {
        appendOutput('Lux Awakens... Chapter 1 Complete.');
        currentChapter++;
      } else {
        appendOutput('Access Denied. Wrong code.');
      }
      break;
    default:
      appendOutput("[SYSTEM] No puzzle loaded for this chapter.");
      break;
  }
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value;
    input.value = '';
    runCommand(cmd);
  }
});

// Initial boot
appendOutput("NEO-GARY/BOOT>");
appendOutput("Enter glyph code to awaken Lux...");