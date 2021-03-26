import './button.scss';

export const makeButton = (text) => {
    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = text;
    return button;
}