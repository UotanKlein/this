import readlineSync from 'readline-sync';

class Calculator {
  constructor() {
    this.obj = {};
  }

  read() {
    const a = +(readlineSync.question('Value A: '));
    const b = +(readlineSync.question('Value B: '));
    this.obj = {a, b};
  }

  sum() {
    return (this.obj.a + this.obj.b)
  }

  mul() {
    return (this.obj.a * this.obj.b)
  }
}
