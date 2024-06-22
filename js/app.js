// Swiper JS Slider Initialize

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


var swipertwo = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2 ,
      spaceBetween: 20,
    },
    // 1024: {
    //   slidesPerView: 2,
    //   spaceBetween: 50,
    // },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
//   autoplay: {
//     delay: 3000, // Autoplay delay in milliseconds
//     disableOnInteraction: false, // Prevent auto-disable after user interaction
// },
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }

});

// Swiper Js Slider End **** 




document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('ProductNav');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    nav.addEventListener('mousedown', (e) => {
      isDown = true;
      nav.classList.add('active');
      startX = e.pageX - nav.offsetLeft;
      scrollLeft = nav.scrollLeft;
    });
    nav.addEventListener('mouseleave', () => {
      isDown = false;
      nav.classList.remove('active');
    });
    nav.addEventListener('mouseup', () => {
      isDown = false;
      nav.classList.remove('active');
    });
    nav.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - nav.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      nav.scrollLeft = scrollLeft - walk;
    });
  
    document.getElementById('advancerLeft').addEventListener('click', () => {
      nav.scrollBy({ left: -150, behavior: 'smooth' });
    });
  
    document.getElementById('advancerRight').addEventListener('click', () => {
      nav.scrollBy({ left: 150, behavior: 'smooth' });
    });
  });



// document.addEventListener('DOMContentLoaded', function() {
//   const sections = document.querySelectorAll('section.menu-items-content > div.container > div.row > div[id]');
//   const navLinks = document.querySelectorAll('ul.ProductNav > li > a.ProductNav_Link');

//   let observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // Remove active class from all nav links
//         navLinks.forEach(link => link.classList.remove('active'));

//         // Get the ID of the intersecting section
//         let targetId = entry.target.getAttribute('id');

//         // Add active class to corresponding nav link
//         navLinks.forEach(link => {
//           if (link.getAttribute('href') === `#${targetId}`) {
//             link.classList.add('active');
//           }
//         });
//       }
//     });
//   }, { threshold: 0.5 }); // Adjust threshold as needed for intersection observer

//   // Observe each section
//   sections.forEach(section => observer.observe(section));
// });







document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section.menu-items-content > div.container > div.row > div[id]');
  const navLinks = document.querySelectorAll('ul.ProductNav > li > a.ProductNav_Link');
  const nav = document.getElementById('ProductNav');

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));

        // Get the ID of the intersecting section
        let targetId = entry.target.getAttribute('id');

        // Add active class to corresponding nav link
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
          }
        });

        // Auto scroll nav to the active link
        const activeLink = document.querySelector(`ul.ProductNav > li > a.ProductNav_Link[href="#${targetId}"]`);
        if (activeLink) {
          smoothScrollTo(activeLink);
        }
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed for intersection observer

  // Observe each section
  sections.forEach(section => observer.observe(section));

  // Smooth scroll function
  function smoothScrollTo(element) {
    const navScrollLeft = nav.scrollLeft;
    const elementOffsetLeft = element.offsetLeft - nav.offsetLeft;
    const scrollDistance = elementOffsetLeft - navScrollLeft;
    
    nav.scrollTo({
      left: navScrollLeft + scrollDistance,
      behavior: 'smooth'
    });
  }
});






