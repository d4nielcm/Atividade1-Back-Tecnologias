"use strict";

class CalcularController {
  async index({ request }) {
    const data = request.all();
    if(data.op == '+'){
      return parseFloat(data.num1) + parseFloat(data.num2);
    } else if(data.op == '-'){
      return parseFloat(data.num1) -parseFloat(data.num2);
    } else if (data.op == '/') {
      return parseFloat(data.num1) / parseFloat(data.num2);
    } else if (data.op == '*') {
      return parseFloat(data.num1) * parseFloat(data.num2);
    } else{
      return 0;
    }
  }
}
module.exports = CalcularController;
