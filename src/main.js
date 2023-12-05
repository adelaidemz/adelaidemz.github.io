import { Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

// import { setupCounter } from './counter.js'


// setupCounter(document.querySelector('#counter'))
