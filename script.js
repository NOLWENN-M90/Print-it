const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Appel des éléments HTML //
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
let currentSlide = 0; // INITIALISE UN COMPTEUR AU TABLEAU "SLIDES" à 0 //
const dots = document.querySelectorAll(".dot"); 
const slide = slides[currentSlide]; 

// Action au clik flèches avec boucle pour lire toutes les images et textes du tableau "SLIDES" //
// flèche gauche //
arrowLeft.addEventListener('click', () => {
	console.log('Flèche gauche cliquée');
	currentSlide--; 
	if (currentSlide < 0) { 
		currentSlide = slides.length - 1; 
	}
	dotSelected(currentSlide); 
});
// flèche droite //
arrowRight.addEventListener('click', () => {
	console.log('Flèche droite cliquée');
	currentSlide++; 
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	dotSelected(currentSlide); 
});
// Classement des dots en tableau / 1 dot = une image + un texte / + boucle pour lecture //
// Exécute le 1er bloc de code si un test renvoi "true" ou un autre dans le cas contraire //
function dotSelected(index) { 
	if (index == 4){
		index = 0;
	} else if (index < 0){
		index = 3;
	}
// Pour chaque dot non selectionné appel avec fonction anonyme pour enlevé la class background-color //
	dots.forEach(d => { 
		d.classList.remove("dot_selected"); 
	});
// Récupère les dots en HTML liés aux Class CSS .dot et ajoute le background au dot sélectionné //
// relié à l'image du tableau "slides" correspondant (index représente i) //
	document.querySelectorAll(".dot")[index].classList.add("dot_selected"); 
	selectedSlide(index);
};

// Fonction qui déclare les différents éléments du tableau (image et texte) fait appel dans le tableau et localise les éléments
// puis les traduit en langage HTML pour lecture <span> //
function selectedSlide(index) {
	document.querySelector("#banner > img").src = `./assets/images/slideshow/${slides[index].image}`;
	document.querySelector("#banner > p").innerHTML = slides[index].tagLine;
}
