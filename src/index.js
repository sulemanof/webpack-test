import { addKitty } from './addKitty';
import { makeButton } from './button';
import { sayHello } from './sayHello';

sayHello('world');

document.body.appendChild(makeButton('моя кнопка'));

setTimeout(addKitty, 3000)