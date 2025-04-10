var div = document.getElementById('edu2');
var display = 0;

function hideShow() {
  if (display == 1) {
    div.style.display = 'none';
    display = 0;
  } else {
    div.style.display = 'block';
    display = 1;
    var milestones = document.querySelectorAll('.milestone');
    milestones.forEach((milestone, index) => {
      milestone.style.opacity = 0;
      setTimeout(() => {
        milestone.style.transform = 'translateY(0)';
        milestone.style.opacity = 1;
      }, index * 500);
    });
    var milestones1 = document.querySelectorAll('.milestone1');
    milestones1.forEach((milestone1, index) => {
      milestone1.style.opacity = 0;
      setTimeout(() => {
        milestone1.style.transform = 'translateY(0)';
        milestone1.style.opacity = 1;
      }, index * 500);
    });
  }
}

// Initially hide the milestones
var milestones1 = document.querySelectorAll('.milestone1');
milestones1.forEach((milestone1) => {
  milestone1.style.transform = 'translateY(-100%)';
  milestone1.style.opacity = 0;
});

















var flipContainer = document.querySelector('.flip-container');
var frontButton = document.querySelector('.front .flip-button');
var backButton = document.querySelector('.back .flip-button');

frontButton.addEventListener('click', function() {
  flipContainer.classList.toggle('flip');
});

backButton.addEventListener('click', function() {
  flipContainer.classList.toggle('flip');
});





document.querySelectorAll('nav a').forEach(function(anchor) {
   anchor.addEventListener('click', function(event) {
     event.preventDefault();
     let target = document.querySelector(anchor.getAttribute('href'));
     target.scrollIntoView({ behavior: 'smooth' });
   });
 });
 




 
var popupButton = document.getElementById('popup-button');
var popup = document.getElementById('popup');
var closeButton = document.getElementById('close-button');

popupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

document.getElementById("flippy").addEventListener("click", function() {
   document.getElementById("cer").scrollIntoView({ behavior: 'smooth' });
 });
 
 document.getElementById("upper").addEventListener("click", function() {
   document.getElementById("cer").scrollIntoView({ behavior: 'smooth' });
 });
 
 


 



 

var animatedText = document.getElementById('animated-text');
var texts = ['Full Stack Developer...', 'Web Developer...'];
var currentIndex = 0;
var currentText = '';
var isDeleting = false;

function typeText() {
  const text = texts[currentIndex];
  if (!isDeleting) {
    if (currentText.length < text.length) {
      currentText += text[currentText.length];
    } else {
      isDeleting = true;
    }
  } else {
    if (currentText.length > 0) {
      currentText = currentText.slice(0, -1);
    } else {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      currentText = '';
    }
  }
  animatedText.textContent = currentText;
  setTimeout(typeText, 100); // adjust the speed of the typing animation
}

typeText();

 

var projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
card.addEventListener('click', () => {
projectCards.forEach((otherCard) => {
otherCard.classList.remove('active');
});
card.classList.add('active');
});
});





