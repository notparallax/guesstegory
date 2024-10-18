import countrydata from '../country_outline_path_and_name.json';

export default {
  correctCountry : '',
  correctOutline : '',
  guesses : [],
  guessCount : 0,

  get won() {
    return this.guesses[this.guessCount - 1] === this.correctWord;
  },

  get lost() {
    return this.guessCount > 6;
  },

  generateCountryData() {
    const i = Math.floor(Math.random() * countrydata.length)
    this.correctOutline = countrydata[i].path;
    this.correctCountry = countrydata[i].name;
    // return countryOutlinesPath
  }, 

  guess(word) {
    this.guessCount += 1;
    if (word != null){
      console.log('guess is', word.value);
    }
    // this.guesses[this.guessCount] = word.toLowerCase();
    // console.log('guess is', word);
    // console.log('guess is valid.');
    console.log('guess count:', this.guessCount);
  },

  // handleKeyup(e) {
    
  //   // If the game is over, don't do anything
  //   if (this.won || this.lost) {
  //     return;
  //   }

    // // If the enter key is pressed 
    // if (e.key === 'Enter') {
    //   // console.log("The word being guessed is: ", this.guesses[this.guessCount]);
    //   // If the guess is correct, increment the guess count
    //   this.guessCount += 1;
    //   return;
    // }


    // if (e.key === 'Backspace') {
    //   this.guesses[this.guessCount] = this.guesses[this.guessCount].slice(0, this.guesses[this.guessCount].length - 1);
    //   return;
    // }
    
    // // if the guess is less than 5 characters and the key pressed is a letter 
    // if (e.key.match(/^[A-z]$/)) {
    //   this.guesses[this.guessCount] += e.key.toLowerCase();
    // }
    // console.log("length: ", this.guesses[this.guessCount].length)
    // console.log ("guesses uptil now " , this.guesses)

  // }, 

  init () {
    
    // this.correctOutline = this.generateCountryData();
    
    // this.correctOutline = this.correctOutline;
    // console.log("this is correct outline", this.correctOutline)
    this.generateCountryData();

    this.guesses = Array.from({ length: 6 }, () => '');
    this.guessCount = 0;
  }
}
