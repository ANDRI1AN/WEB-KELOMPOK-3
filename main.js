// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Event listeners for Project buttons
const projectLinks = {
  'mirna-project': 'https://drive.google.com/file/d/1wxrTnM-4OUOdDx1CQkRMrR239Z6-e80a/view?usp=drive_link',
  'andrian-project': 'https://drive.google.com/file/d/1YXYpsbTniXuqycFqoAqiMZghRJCJ5c0l/view?usp=share_link',
  'alfian-project': 'https://docs.google.com/document/d/1UYTItYjqXPWKUaCWP8wpG-SE70cPu6ld/edit?usp=drivesdk&ouid=110245035214355169047&rtpof=true&sd=true',
  'arif-project': 'https://drive.google.com/drive/folders/1gj_4C30ffmeEJr-XUVFxXlJKMJj2425k',
  'betrian-project': 'https://docs.google.com/document/d/1g383V7-Ki2x_-r8hFSmsiuPJHLqsTwUZ/edit?usp=drivesdk&ouid=110941839114752401931&rtpof=true&sd=true',
  'nuryadi-project': 'https://drive.google.com/file/d/1nlY_CGVyhjjPKCYB_LFrpphc7FtRV7cJ/view?usp=sharing',
  'riska-project': 'https://drive.google.com/file/d/1IvYsFIONUfbxYvXbZDyW8ghk5GIvn4dI/view?usp=drivesdk'
};

// Loop through the project buttons and add event listeners
Object.keys(projectLinks).forEach(function(projectId) {
  const projectButton = document.getElementById(projectId);
  if (projectButton) {
    projectButton.addEventListener('click', function() {
      window.open(projectLinks[projectId], '_blank');
    });
  }
});
