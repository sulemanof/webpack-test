import kitty from './assets/kitty.jpg';

export function addKitty() {
  const myIcon = new Image();
  myIcon.src = kitty;

  document.body.appendChild(myIcon);
}
