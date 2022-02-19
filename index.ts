import { Person } from './person';

// Import stylesheets
import './style.css';

// Write TypeScript code!

let pessoa = new Person('Pedro', 'Augusto Losada Lucchesi', 'Targhetta');

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${pessoa.getFullName}. ${pessoa.getBirthdayYear}.</h1>`;
