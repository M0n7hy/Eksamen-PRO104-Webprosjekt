// ——————————————————————————————————————————————————
// Print ut navn på innlogget person fra local storage
// ——————————————————————————————————————————————————

let personName = document.getElementById("name")

personName.innerHTML = localStorage.getItem("name");

// ——————————————————————————————————————————————————
// TextScramble - Code funnet på github, og gjort noen endringer på
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '0123456789';
      this.update = this.update.bind(this);
    }

    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.1) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }}

  // ——————————————————————————————————————————————————
  // Ekempel nummer for de rullerende tallene, kun tilfeldige tall, og ikke sikkert at de passer 100% sammen
  // ——————————————————————————————————————————————————
  
  const phrases = [
    '59',
    '82',
    '124',
    '176',
    '223',
    '278',
    '351',
    '378',
    '401',
    '444'
];
  
  const phrasesTwo = [
    '32',
    '58',
    '78',
    '110',
    '121',
    '153',
    '199',
    '234',
    '255',
    '298',
    '322'
];

  const phrasesThree = [
    '8',
    '12',
    '19',
    '21',
    '28',
    '31',
    '35',
    '40',
    '43',
    '49'
  ]

  // ——————————————————————————————————————————————————
  // Scrambler eksempel nummerne
  // ——————————————————————————————————————————————————

  const el = document.querySelector('.pizza-sold');
  const et = document.querySelector('.customers');
  const eb = document.querySelector('.soda-sold')
  const fx = new TextScramble(el);
  const fl = new TextScramble(et);
  const ft = new TextScramble(eb)
  
  // ——————————————————————————————————————————————————
  // Timer og hvilken rekke som skal bli scramblet
  // ——————————————————————————————————————————————————

  // For pizzaer solgt
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };

  // For kunder
  let counterTwo = 0;
  const nextTwo = () => {
    fl.setText(phrasesTwo[counterTwo]).then(() => {
      setTimeout(nextTwo, 2000);
    });
    counterTwo = (counterTwo + 1) % phrasesTwo.length;
  };

  // For brus solgt
  let counterThree = 0;
  const nextThree = () => {
    ft.setText(phrasesThree[counterThree]).then(() => {
      setTimeout(nextThree, 2000);
    });
    counterThree = (counterThree + 1) % phrasesThree.length;
  };

// ——————————————————————————————————————————————————
// kjører koden over
// ——————————————————————————————————————————————————  

next();
nextTwo();
nextThree();