var div = document.getElementById('edu2');
var display = 0;

function hideShow() {
  if (display == 1) {
    if (div) div.style.display = 'none';
    display = 0;
  } else {
    if (div) div.style.display = 'flex';
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

window.addEventListener('load', function() {
 
  var menuToggle = document.createElement('div');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  var header = document.querySelector('.header');
  if (header) header.appendChild(menuToggle);

  var headlink = document.querySelector('.headlink');
  menuToggle.addEventListener('click', () => {
    if (headlink) headlink.style.display = headlink.style.display === 'flex' ? 'none' : 'flex';
  });



  document.querySelectorAll('nav a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      let target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  var popupButton = document.getElementById('popup-button');
  var popup = document.getElementById('popup');
  var closeButton = document.getElementById('close-button');
  if (popupButton && popup && closeButton) {
    popupButton.addEventListener('click', () => {
      popup.style.display = 'block';
    });
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  var projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      projectCards.forEach((otherCard) => {
        otherCard.classList.remove('active');
      });
      card.classList.add('active');
    });
  });

  var animatedText = document.getElementById('animated-text');
  if (animatedText) {
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
  } else {
    console.error("Element with id 'animated-text' not found.");
  }
  
});



var slides=document.getElementById('certi')
var marks=document.getElementById('mark')
var display=0

function hide(){
  if(display==1){
    slides.style.display="none"
    marks.style.display="flex"
  }
  else{
    slides.style.display="flex"
    marks.style.display="none"
  }


}



var toggleButtons = document.querySelectorAll('.toggle-button');
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentSlide === 0) {
      slides[0].classList.remove('active');
      slides[1].classList.add('active');
      currentSlide = 1;
    } else {
      slides[1].classList.remove('active');
      slides[0].classList.add('active');
      currentSlide = 0;
    }
  });
});