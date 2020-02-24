import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import fruit from './foods';
import { choice, remove } from './helpers';

let fruitSelection = fruit

let randomFruit = choice(fruit);
console.log(`I'd like one ${randomFruit}, please.`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious, may I have another?`)
fruitSelection = remove(fruitSelection, randomFruit)
console.log(`I'm sorry, we're all out. We have ${fruitSelection.length} left`)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

