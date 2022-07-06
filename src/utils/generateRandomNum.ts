export function randomNum() {
    const min = 1000000000;
    const max = 9000000000;
    return Math.floor(Math.random() * max) + min; 
  }