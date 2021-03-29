import { makeCalculation } from './makeCalculation';

export function sayHello(text) {
  const num = makeCalculation(5, 3);
  console.log(`Hello ${text}, ${num}`);
}
