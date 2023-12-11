import {  } from 'bootstrap';

const cards = [
  { title: 'Sorting hues', 
	image: '/sorting-card-img.png',
	text: 'A colorful visualizer of some iterative sorting algorithms.', 
	link: 'https://adelaidemz.github.io/sorting', 
	source_link: 'https://github.com/adelaidemz/sorting',
	},
  { title: 'Stellar classification', 
	image: '/rpart-dt.png',
	text: `Machine learning project to classify visible night sky bodies 
	 (KNN, random forest, AdaBoost)`, 
	link: 'pages/stellar',
	},
  { title: 'Markov chain name generation', 
	  image: '/markov.png',
	  text: 'Using a markov chain to generate new stylized names.', 
	  link: 'pages/markov', 
	},
  { title: 'Artist collabs (WIP)', 
	image: '/collab-card-img.png',
	text: 'Network view of musical artist collaborations.', 
	link: 'https://adelaidemz.github.io/artist-collab', 
	source_link: 'https://github.com/adelaidemz/artist-collab',
	},
]

const container = document.querySelector('#card-container');

cards.forEach(card => {
	container.innerHTML += `<div class="col">
		<div class="card">
			<img src=${card.image} class="card-img-top" alt=${card.title}>
			<div class="card-body">
				<h5 class="card-title">${card.title}</h5>
				<p class="card-text">${card.text}</p>
				<a href=${card.link} class="stretched-link">View</a>
			</div>
		</div>
	</div>`

});
// <a href=${card.source_link} class="card-link">Source</a>

