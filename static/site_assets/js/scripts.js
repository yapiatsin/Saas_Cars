$(document).ready(function () {
  'use strict';

  var sections = $('section');
  var navLinks = $('.main-nav li');
  var headerOffset = 20; // adjust if you have fixed header height

  $(window).on('scroll', function () {
    var scrollPos = $(document).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - headerOffset;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.removeClass('active');
        $('.main-nav a[href="#' + id + '"]')
          .parent()
          .addClass('active');
      }
    });
  });

  /* ================= CONFIGURATION ================= */
  const BREAKPOINT = 1030;
  const $body = $('body');
  const $header = $('header');

  // Track screen size state efficiently
  let isDesktop = window.innerWidth > BREAKPOINT;

  /* ================= 1. STICKY HEADER ================= */

  // Update screen size on resize
  $(window).on('resize', function () {
    isDesktop = window.innerWidth > BREAKPOINT;
  });

  // Handle Sticky Class on Scroll
  var menuHeight = $header.innerHeight();

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (isDesktop) {
      if (scroll >= menuHeight) {
        $body.addClass('sticky');
      } else {
        $body.removeClass('sticky');
      }
    } else {
      $body.removeClass('sticky');
    }
  });

  /* ================= 2. SIDEBAR NAVIGATION ================= */
  var $mainNav = $('nav.main-nav');

  function toggleMenu(action) {
    if (action === 'open') {
      $mainNav.addClass('slidein');
      $body.addClass('menu-open');
    } else {
      $mainNav.removeClass('slidein');
      $body.removeClass('menu-open');
    }
  }

  //===== Tilt =====//
  if ($.isFunction($.fn.tilt)) {
    jQuery('.tilt').each(function (i, el) {
      var max_tilt = jQuery(el).data('max_tilt'),
        perspective = jQuery(el).data('perspective'),
        scale = jQuery(el).data('scale'),
        speed = jQuery(el).data('speed'),
        tilt = jQuery(el).tilt({
          maxTilt: max_tilt,
          perspective: perspective,
          easing: 'cubic-bezier(.03,.98,.52,.99)',
          scale: scale,
          speed: speed,
          transition: true,
          disableAxis: null,
          reset: true,
          glare: false,
          maxGlare: 1,
        });
      tilt.tilt.reset.call(tilt);
    });
  }

  //===== Wow Animation Setting =====//
  if ($('.wow').length > 0) {
    var wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });

    wow.init();
  }

  // Open Menu
  $('.menu-trigger').on('click', function (e) {
    e.preventDefault();
    toggleMenu('open');
  });

  // Close Menu (Button)
  $('.menu-close-trigger').on('click', function (e) {
    e.preventDefault();
    toggleMenu('close');
  });

  // Close Menu (Mobile Link Click)
  $mainNav.find('ul li a').on('click', function () {
    if (!isDesktop) {
      toggleMenu('close');
    }
  });

  // Close Menu (Click Outside)
  $(document).on('click', function (e) {
    if (
      $body.hasClass('menu-open') &&
      !$(e.target).closest('nav.main-nav, .menu-trigger').length
    ) {
      toggleMenu('close');
    }
  });

  // Close Menu (Escape Key)
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27 && $body.hasClass('menu-open')) {
      toggleMenu('close');
    }
  });

  /* ================= 3. SEARCH POPUP ================= */
  var $searchPopup = $('#searchPopup');

  function toggleSearch(action) {
    if (action === 'open') {
      $searchPopup.addClass('active');
      $body.css('overflow', 'hidden');
      // Focus on input after animation
      setTimeout(function () {
        $('.search-popup-input').focus();
      }, 400);
    } else {
      $searchPopup.removeClass('active');
      $body.css('overflow', '');
      $('.search-popup-input').val(''); // Clear input
    }
  }

  // Open Search
  $('.search-trigger').on('click', function (e) {
    e.preventDefault();
    toggleSearch('open');
  });

  // Close Search (Button)
  $('.search-popup-close').on('click', function (e) {
    e.preventDefault();
    toggleSearch('close');
  });

  // Close Search (Click Outside)
  $searchPopup.on('click', function (e) {
    if (
      !$(e.target).closest('.search-popup-form, .search-popup-close').length
    ) {
      toggleSearch('close');
    }
  });

  // Close Search (Escape Key)
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $searchPopup.hasClass('active')) {
      toggleSearch('close');
    }
  });

  /* ================= 4. CONTACT SIDEBAR ================= */
  var $contactSidebar = $('#contactSidebar');
  var $contactTrigger = $('.menu-grid-trigger');

  function toggleContactSidebar(action) {
    if (action === 'open') {
      $contactSidebar.addClass('active');
      $contactTrigger.addClass('active');
    } else {
      $contactSidebar.removeClass('active');
      $contactTrigger.removeClass('active');
    }
  }

  window.closeContactSidebar = function () {
    toggleContactSidebar('close');
  };

  // Open Sidebar
  $contactTrigger.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggleContactSidebar('open');
  });

  $('.contact-sidebar-close').on('click', function (e) {
    e.preventDefault();
    toggleContactSidebar('close');
  });

  $('.contact-sidebar-content').on('click', function (e) {
    e.stopPropagation();
  });

  $(document).on('click', function (e) {
    if (
      $body.hasClass('sidebar-open') &&
      !$(e.target).closest('#contactSidebar, .menu-grid-trigger').length
    ) {
      toggleContactSidebar('close');
    }
  });

  $(document).on('keydown', function (e) {
    if (e.keyCode === 27 && $body.hasClass('sidebar-open')) {
      toggleContactSidebar('close');
    }
  });

  /* ================= 5. SLIDERS (Slick) ================= */

  // Testimonials Slider
  if ($('.testimonials-slider').length) {
    $('.testimonials-slider').slick({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        { breakpoint: 1399, settings: { slidesToShow: 2, arrows: false } },
        { breakpoint: 991, settings: { slidesToShow: 2, arrows: false } },
        { breakpoint: 767, settings: { slidesToShow: 1, arrows: false } },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
          },
        },
      ],
    });
  }

  // App Showcase Slider
  if ($('.app-showcase-slider').length) {
    $('.app-showcase-slider').slick({
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: $('.app-showcase-nav.prev'),
      nextArrow: $('.app-showcase-nav.next'),
      responsive: [
        { breakpoint: 4096, settings: { slidesToShow: 5 } },
        { breakpoint: 2560, settings: { slidesToShow: 4 } },
        { breakpoint: 1399, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '30px',
          },
        },
      ],
    });
  }

  // Team Slider
  if ($('.team-slider').length) {
    $('.team-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 1199, settings: { slidesToShow: 4 } },
        { breakpoint: 991, settings: { slidesToShow: 3 } },
        { breakpoint: 767, settings: { slidesToShow: 2 } },
        { breakpoint: 575, settings: { slidesToShow: 2 } },
      ],
    });
  }

  /* ================= 6. EXTERNAL PLUGINS ================= */

  // Fancybox Initialization
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox]', {
      // Custom options
    });
  }

  // CounterUp Initialization
  if ($('.counter').length) {
    $('.counter').counterUp({
      delay: 20,
      time: 1000,
    });
  }
});
