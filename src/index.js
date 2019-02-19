import _ from 'lodash';

function component() {
    const el = document.createElement('div');

    el.innerText = _.join(['Hello', 'webpack'], '-');

    return el;
}

document.body.appendChild(component());