function calc(operation, a, b) {

    switch (operation) {
      case 'add':
      case 'plus':
      case '+':
        return a + b;
      case 'subtract':
      case 'minus':
      case '-':
        return a - b;
      case 'multiply':
      case '*':
        return a * b;
      case 'divide':
      case '/':
        return a / b;
      default:
        return 'Operation is not supported!';
    }
    return result;
  }
  
  module.exports = {
    calc,
  }