export class Calculator {
  constructor() {
    this.pro = "";
    this.unpro = "";
    this.opp = "";
  }

  clear() {
    this.pro = "";
    this.unpro = "";
    this.opp = "";
  }

  append(str) {
    if (this.unpro.includes(".") && str === ".") return;
    else {
      this.unpro += str;
    }
  }

  delete() {
    if (this.unpro.length === 0) {
      console.log("length is undefined");
      return;
    } else {
      this.unpro = this.unpro.slice(0, this.unpro.length - 1);
    }
  }

  operation(operator) {
    if (this.pro === "") {
      this.opp = operator;
      this.pro = this.unpro;
      this.unpro = "";
    } else {
      this.calc();
      this.opp = operator;
      this.pro = this.unpro;
      this.unpro = "";
    }
  }

  calc() {
    let operand1 = parseFloat(this.pro);
    let operand2 = parseFloat(this.unpro);
    let resu;

    if (isNaN(operand1) || isNaN(operand2)) {
      return;
    }

    switch (this.opp) {
      case "x":
        resu = operand1 * operand2;
        this.unpro = resu.toString();
        this.pro = "";
        break;

      case "+":
        resu = operand1 + operand2;
        this.unpro = resu.toString();
        this.pro = "";
        break;

      case "-":
        resu = operand1 - operand2;
        this.unpro = resu.toString();
        this.pro = "";
        break;

      case "/":
        resu = operand1 / operand2;
        this.unpro = resu.toString();
        this.pro = "";
        break;
    }
  }
}
