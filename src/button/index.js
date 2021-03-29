import { addKitty } from '../addKitty';
import './button.scss';

export const makeButton = (text) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = text;
  button.addEventListener('click', addKitty);

  return button;
};
