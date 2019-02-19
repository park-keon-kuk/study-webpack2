import _ from 'lodash';
import './style.css';
import WebpackImage from './webpack.png';

function component() {
    const el = document.createElement('div');

    // p
    const p = document.createElement('p');
    p.innerText = "This is a Webpack!";
    p.classList.add('hello');
    el.appendChild(p);

    // img
    const img = document.createElement('img');
    img.src = WebpackImage;
    el.appendChild(img);

    return el;
}

document.body.appendChild(component());