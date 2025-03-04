import './style.css'

// Carousel Images
const carouselImages = [
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6e3e9fb49e4fb711.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20'
];

// Initialize the carousel
function initCarousel() {
  const carouselInner = document.querySelector('.carousel-inner');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  // Add images to carousel
  carouselImages.forEach((image, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Slide ${index + 1}`;
    
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  // Set initial position
  updateCarousel();

  // Add event listeners for buttons
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
  });

  // Auto slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
  }, 5000);

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

// Login Modal
function initLoginModal() {
  const loginBtn = document.querySelector('.login-btn');
  const modal = document.getElementById('loginModal');
  const closeBtn = document.querySelector('.close');
  const loginForm = document.getElementById('loginForm');

  loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Login functionality would be implemented here');
    modal.style.display = 'none';
  });
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initLoginModal();
});

// Make products scroll horizontally on mouse wheel
function initProductsScroll() {
  const productsContainer = document.querySelector('.products-container');
  
  productsContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    productsContainer.scrollLeft += e.deltaY;
  });
}

// Initialize sticky header
function initStickyHeader() {
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

// Initialize all components
function initApp() {
  initCarousel();
  initLoginModal();
  initProductsScroll();
  initStickyHeader();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);