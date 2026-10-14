

// fixed header
var element1 = document.getElementById("navbar_top1");
if(typeof(element1) != 'undefined' && element1 != null){
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      if (window.scrollY > 190) {
          document.getElementById('navbar_top1').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
      } else {
          document.getElementById('navbar_top1').classList.remove('fixed-top');
          // remove padding top from body
          document.body.style.paddingTop = '0';
      }
  });
});
}
var element2 = document.getElementById("navbar_top2");
if(typeof(element2) != 'undefined' && element2 != null){
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      if (window.scrollY > 150) {
          document.getElementById('navbar_top2').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
      } else {
          document.getElementById('navbar_top2').classList.remove('fixed-top');
          // remove padding top from body
          document.body.style.paddingTop = '0';
      }
  });
});
}
document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})
var element3 = document.getElementById("navbar_top3");
if(typeof(element3) != 'undefined' && element3 != null){
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          document.getElementById('navbar_top3').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
      } else {
          document.getElementById('navbar_top3').classList.remove('fixed-top');
          // remove padding top from body
          document.body.style.paddingTop = '0';
      }
  });
});
}
var element4 = document.getElementById("navbar_top4");
if(typeof(element4) != 'undefined' && element4 != null){
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          if (document.getElementById('navbar_top4').classList.add('fixed-top')) {
              alert("jklkl")
          }         
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
      } else {
          document.getElementById('navbar_top4').classList.remove('fixed-top');
          // remove padding top from body
          document.body.style.paddingTop = '0';
      }
  });
});
}

 

var masterClickEvent = document.addEventListener('click', function(e) {
     
    // Function to remove show class from dropdowns that are open  
    // Hamburger menu
    if (e.target.classList.contains('navbar-toggler')) {
        e.target.children[0].classList.toggle('active');
        closeAllSubmenus();
    }

});

function closeAllSubmenus() {
    // Function to remove show class from dropdowns that are open
    dropdownMenus.map(function(menu) {
        menu.classList.remove('show');
    });
}

// prograss bar
function newsProProgressBar() {
  $(function () {
    $('[data-bs-toggle="tooltip1"]')
      .tooltip({
        trigger: "manual",
      })
      .tooltip("show");
  });
  $(".progress-bar").each(function () {
    each_bar_width = $(this).attr("aria-valuenow");
    $(this).width(each_bar_width + "%");
  });
}

  //  Tooltip
  function newsProTooltip() {
    $(function () {
      $('[data-bs-toggle="tooltip"]')
        .tooltip({
          trigger: "manual",
        })
        .tooltip("show");
    });
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  // search dropdown
  $(document).ready(function() {
  
    $(".searchbar").click(function() {
      $(".togglesearch").toggle();
      $("search-input").focus();
    });
  
  });
  // Owl carousels
  $(".carousels-1").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 7,
    nav: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="51.429" viewBox="0 0 30 51.429"><path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M25.724,9.044,45.17,28.9a3.609,3.609,0,0,0,5.191,0,3.836,3.836,0,0,0,0-5.311L28.327,1.092A3.616,3.616,0,0,0,23.259.983L1.072,23.572a3.826,3.826,0,0,0,0,5.311,3.609,3.609,0,0,0,5.191,0Z" transform="translate(30) rotate(90)"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="51.429" viewBox="0 0 30 51.429"><path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M25.724,9.044,45.17,28.9a3.609,3.609,0,0,0,5.191,0,3.836,3.836,0,0,0,0-5.311L28.327,1.092A3.616,3.616,0,0,0,23.259.983L1.072,23.572a3.826,3.826,0,0,0,0,5.311,3.609,3.609,0,0,0,5.191,0Z" transform="translate(30) rotate(90)"/></svg>',
    ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  }); 
  $(".carousels-2").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 80, 
    nav: true, 
    navText: [
        '<span class="fas fa-chevron-left" aria-hidden="true"></span>',
        '<span class="fas fa-chevron-right" aria-hidden="true"></span>',
      ],
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".carousels-4").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 12, 
    nav: false,  
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".carousels-5").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 0, 
    nav: false,  
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".carousels-6").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 30,
    nav: true, 
    navText: [
        '<span class="fas fa-chevron-left" aria-hidden="true"></span>',
        '<span class="fas fa-chevron-right" aria-hidden="true"></span>',
      ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".news-ticker").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true, 
    nav: true, 
    margin: 0,
    navText: [
        '<span class="fas fa-chevron-left" aria-hidden="true"></span>',
        '<span class="fas fa-chevron-right" aria-hidden="true"></span>',
      ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $(".home-5-silder").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 30, 
    nav: true, 
    navText: [
      '<span class="fas fa-chevron-left" aria-hidden="true"></span>',
      '<span class="fas fa-chevron-right" aria-hidden="true"></span>',
    ], 
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".category-silder").owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad: true,
    margin: 10, 
    nav: true, 
    navText: [
      '<span class="fas fa-chevron-left" aria-hidden="true"></span>',
      '<span class="fas fa-chevron-right" aria-hidden="true"></span>',
    ], 
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

// filter home 4
$(document).ready(function(event){
  $('.boxselect').change(function(){
    $this = $(this);
    $('.categories').hide();
    $('.'+$this.val()).show();
    // console.log("showing "+$this.val()+" categories");
   });
});

//   masonry
function masonry() {
  $('#news-masonry-1 .news-masonry-style-1').isotope({
 
    itemSelector: '.col-12',
    Masonry: { 
      
    }
    
  });
  
  $('#news-masonry-2 .news-masonry-style-2').isotope({
 
    itemSelector: '.col-12',
    Masonry: { 
      
    }
    
  }); 
  
}

// days counter

function datCounter() {
  const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24; 
      let countDown = new Date('Oct 29, 2021 00:00:00').getTime(),
      x = setInterval(function() { 
      let now = new Date().getTime(),
        distance = countDown - now; 
        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
    }, second)
}
 function animateWow() {
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
    )
    wow.init();
    
 }

  var elementCopy = document.getElementsByClassName("language-markup");
  if(typeof(elementCopy) != 'undefined' && elementCopy != null){ 
    var clipboard = new ClipboardJS('.clipboard');   
  clipboard.on('success', function (e) {
      e.trigger.textContent = 'Copied';
      window.setTimeout(function() {
          e.trigger.textContent = 'Copy to Clipboard';
      }, 8000);
  console.log(e);
  });
  clipboard.on('error', function (e) {
  console.log(e);
  });
}