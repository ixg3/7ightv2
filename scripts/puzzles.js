
// puzzles.js — Handles puzzles for each chapter

let devMode = false;

function isDevOverride(code) {
  return code.trim().toLowerCase() === 'ixg3';
}

function startChapter1Puzzle(input) {
  if (devMode || isDevOverride(input)) return true;
  return input.trim().toUpperCase() === 'C0NTR0L_ALT_77';
}

function startChapter2Puzzle(inputSequence, expectedSequence) {
  if (devMode || isDevOverride(inputSequence)) return true;
  return JSON.stringify(inputSequence) === JSON.stringify(expectedSequence);
}

function startChapter3Puzzle(solutionChain) {
  if (devMode || isDevOverride(solutionChain)) return true;
  return solutionChain === 'LOGIC>LOYALTY>CORE-TRUTH';
}

function startChapter4Puzzle(timingPasscode, userCode) {
  if (devMode || isDevOverride(userCode)) return true;
  return timingPasscode === userCode;
}

function startChapter5Puzzle(fragmentsCollected) {
  if (devMode) return true;
  return fragmentsCollected.includes('SIGIL-A') &&
         fragmentsCollected.includes('SIGIL-B') &&
         fragmentsCollected.includes('SIGIL-C');
}

function enableDevMode() {
  devMode = true;
  console.log('[DEV MODE ENABLED] All puzzles auto-complete');
}

export {
  startChapter1Puzzle,
  startChapter2Puzzle,
  startChapter3Puzzle,
  startChapter4Puzzle,
  startChapter5Puzzle,
  enableDevMode,
  isDevOverride
};
