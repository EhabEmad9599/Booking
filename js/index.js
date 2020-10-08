// const menu = document.querySelector('.burger');
// const line1 = document.querySelector('.line1');
// const line2 = document.querySelector('.line2');
// const navBar = document.querySelector('.nav-bar');

// navToggle = () => {
//   if (menu.classList.toggle('active')) {
//     navBar.classList.add('open');
//     logo.style.color = '#000';
//     line1.style.background = '#000';
//     line2.style.background = '#000';
//     document.body.classList.add('hide');
//   } else {
//     navBar.classList.remove('open');
//     logo.style.color = '#FFF';
//     line1.style.background = '#FFF';
//     line2.style.background = '#FFF';
//     document.body.classList.remove('hide')
//   }
// }

// menu.addEventListener('click', navToggle);

// owl
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

// Start popular slider
$('.seconde_slider').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
// End popular slider

// start Destination slider
$('.Destination').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 8
    }
  }
})
// End Destination slider

$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

