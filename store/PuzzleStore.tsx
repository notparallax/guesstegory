import words from '../words.json';

export default {
  correctWord : '',
  guesses : [],
  guessCount : 0,

  get won() {
    return this.guesses[this.guessCount - 1] === this.correctWord;
  },

  get lost() {
    return this.guessCount === 6;
  },

  generateWord() {
    return words[Math.floor(Math.random() * words.length)];
  }, 

  validGuess() {
    
      this.guessCount += 1;
      console.log('guess is valid.');
      console.log('guess count:', this.guessCount);
  },
  invalidGuess() {
    console.log('guess is invalid.');
  },
  handleKeyup(e) {
    
    // If the game is over, don't do anything
    if (this.won || this.lost) {
      return;
    }

    // If the enter key is pressed 
    if (e.key === 'Enter') {
      console.log("The word being guessed is: ", this.guesses[this.guessCount]);
      // If the guess is correct, increment the guess count
      if (words.includes(this.guesses[this.guessCount])) {
        this.validGuess();
      } else {
        this.invalidGuess();
      }
    }


    if (e.key === 'Backspace') {
      this.guesses[this.guessCount] = this.guesses[this.guessCount].slice(0, this.guesses[this.guessCount].length - 1);
      return;
    }

    if (this.guesses[this.guessCount].length < 5 && e.key.match(/^[A-z]$/)) {
      this.guesses[this.guessCount] += e.key.toLowerCase();
      return;
    }

  }, 

  init () {
    this.correctWord = this.generateWord();
    this.guesses = Array.from({ length: 6 }, () => '');
    this.guessCount = 0;
  }
}