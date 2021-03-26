import kitty from './assets/kitty.jpg';

export function addKitty() {
    var myIcon = new Image();
    myIcon.src = kitty;

    document.body.appendChild(myIcon);
}