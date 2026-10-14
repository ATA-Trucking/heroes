/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.news_pro = {
    attach: function (context, settings) {

	jQuery(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("header.active .navbar").addClass("fixed-top");
		} else {
			$("header.active .navbar").removeClass("fixed-top");
		}
	});

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

	// Sidebar toggle behavior
	$('#sidebarCollapse').on('click', function() {
		$('#sidebar, #page_content').toggleClass('active');
	});

	// 11 Sticky Header
	jQuery(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$(".header.active").addClass("navbar-sticky-on");
		} else {
			$(".header.active").removeClass("navbar-sticky-on");
		}
	});

	
	// search dropdown
	$(".searchbar").click(function(){
		$('.togglesearch').toggleClass("show");
	});
	$(".searchbar-1").click(function(){
		$('.togglesearch-item').toggleClass("show");
	});
	// Clipboard
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
    //go to top
	var mybutton = document.getElementById("back-to");
	// When the user scrolls down 100px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
		} else {
		mybutton.style.display = "none";
		}
	}
	$(document).ready(function() {
		$("#back-to").click(function(event) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	});
	/*Scroll to top when arrow up clicked END*/
	// 05 Header Menu
    $('.dropdown-menu span.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

     
	//open-left
	var $nav_menu = $('.left-open');
	var $site_container = $('body');
	var $window = $(window);
	var window_size = $window.width();
	$nav_menu.find('ul li',context).once('openLeftBehavior').hover(function() {
			if ($(this).children('ul').length) {
				// var menu_ul_left =$(this).offset().left + $(this).width();
				var menu_ul_element = $(this).children('ul');
				var menu_ul_offset = menu_ul_element.offset();
				var menu_ul_left = menu_ul_offset.left;
				var menu_ul_width = menu_ul_element.width();
				var site_container_width = $site_container.width();
				var site_container_left = $site_container.offset().left;
				// alert(site_container_width + site_container_left);
				var is_menu_ul_visible = (menu_ul_left + menu_ul_width <= site_container_width + site_container_left);
				if (!is_menu_ul_visible) {
				$(this).children('ul').removeClass('open-left');
				$(this).children('ul').addClass('open-left');
				}
			}
		},
        );

      	//04 Counter 
		var a = 0;
			$(window).scroll(function() {
			var oTop = $('.count');
			if (oTop.length) {
				var oTop_1 = oTop.offset().top;
				var oTop = oTop_1 - window.innerHeight;
				if (a == 0 && $(window).scrollTop() > oTop) {
					$('.countdown').each(function() {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
						},

						{

						duration: 3000,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							//alert('finished');
						}

						});
					});
					a = 1;
				}
			}
		});

		//coming soon counter
		function getTimeRemaining(endtime) {
		var t = Date.parse(settings.custom_date) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
			};
        }
        function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
        function updateClock() {
          var t = getTimeRemaining(endtime);
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
          if (t.total <= 0) {
            clearInterval(timeinterval);
            document.getElementById("clockdiv").innerHTML = settings.custom_message_dateExpired;
          }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
        }
        var deadline = new Date(Date.parse(new Date()));
        if($("#clockdiv").length){
          initializeClock('clockdiv', deadline);
        }

        //Header Search
	      $(document).ready(function(){
	            var submitIcon = $('.ExpIcon');
	            var submitInput = $('.ExpInput');
	            var searchBox = $('.Exp-serach');
	            var isOpen = false;
	            
	            $(document).mouseup(function(){
	                if(isOpen == true){
	                submitInput.val('');
	                $('.Expbtn').css('z-index','-999');
	                submitIcon.click();
	                }
	            });
	            
	            submitIcon.mouseup(function(){
	                return false;
	            });
	            
	            searchBox.mouseup(function(){
	                return false;
	            });
	                    
	            submitIcon.click(function(){
	                if(isOpen == false){
	                    searchBox.addClass('Exp-serach-open');
	                    isOpen = true;
	                } else {
	                    searchBox.removeClass('Exp-serach-open');
	                    isOpen = false;
	                }
	            });
	      });
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

		$(document).ready(function(){
			$('[data-bs-toggle="tooltip"]').tooltip();
		});
		
		var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
		);
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
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
			items: 3,
			},
			1000: {
			items: 4,
			},
			1200: {
			items: 6,
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
		margin: 12, 
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

		// wow = new WOW(
		// {
		// boxClass:     'wow',      // default
		// animateClass: 'animated', // default
		// offset:       0,          // default
		// mobile:       true,       // default
		// live:         true        // default
		// }
		// )
		// wow.init();
    }
  };

})(jQuery, Drupal);
