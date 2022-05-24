const Potion = require('./Potion.js');
const Character = require('./Character');

class Enemy extends Character{
  constructor(name, weapon) {
    super();
    this.weapon = weapon;
    this.potion = new Potion();
  }

  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  }

  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  }

  reduceHealth(health) {
    this.health -= health;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  }

  getDescription() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

module.exports = Enemy;