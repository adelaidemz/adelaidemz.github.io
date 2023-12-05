import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#viteimg').src = viteLogo;
document.querySelector('#jsimg').src = javascriptLogo;

setupCounter(document.querySelector('#counter'))
