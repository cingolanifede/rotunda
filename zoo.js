class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  speak(message) {
    const animalSound = ` ${this.sound} `;
    return message.replace(/\s/g, animalSound);
  }
}

class Lion extends Animal {
  constructor(sound = "roar") {
    super(sound);
  }
}

class Tiger extends Animal {
  constructor(sound = "grrr") {
    super(sound);
  }
}


const lion = new Lion();
console.log(lion.speak("I'm a lion"));

const tiger = new Tiger();
console.log(tiger.speak("Lions suck"));
