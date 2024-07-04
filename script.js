window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
  
    setTimeout(() => {
      loader.remove();
    }, 1000); 
  
    document.getElementById('content').style.display = 'block';
  });
  

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const symbol = item.querySelector('.faq-symbol');

        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        symbol.textContent = answer.style.display === 'block' ? '-' : '+';
    });
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');
const slidesCount = document.querySelectorAll('.slide').length;

let index = 0;


for (let i = 0; i < Math.ceil(slidesCount / 4); i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.style.transform = `translateX(${-index * 50}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function showNextSlide() {
    index = (index + 1) % dots.length;
    updateSlider();
}

function showPrevSlide() {
    index = (index - 1 + dots.length) % dots.length;
    updateSlider();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

updateSlider();
