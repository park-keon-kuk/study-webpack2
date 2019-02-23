import _ from 'lodash';
import printMe from './print.js';

function component() {
    const el = document.createElement('div');

    // p
    const p = document.createElement('p');
    p.innerText = _.join(['Hi', 'webpack'], '-');
    el.appendChild(p);

    // btn
    const btn = document.createElement('button');
    btn.innerText = "Click me and check the console!";
    btn.onclick = printMe;
    el.appendChild(btn);

    return el;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}