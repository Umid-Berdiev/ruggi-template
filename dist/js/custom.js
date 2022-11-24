  $(document).on('click', ".modaled-open", function(e) {

    var countryData = window.intlTelInputGlobals.getCountryData(),
      input = document.querySelector("#phone"),
      input2 = document.querySelector("#phone2")

    var iti = window.intlTelInput(input, {
      hiddenInput: "full_phone",
      utilsScript: "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js"
    });

     var iti2 = window.intlTelInput(input2, {
      hiddenInput: "full_phone",
      utilsScript: "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js"
    });

    for (var i = 0; i < countryData.length; i++) {
      var country = countryData[i];
      var optionNode = document.createElement("option");
      optionNode.value = country.iso2;
      var textNode = document.createTextNode(country.name);
      optionNode.appendChild(textNode);
    }

  })






  $(document).ready(function() {


    if ($(window).width() < 768) {
      $('.search__btn').on('click', function() {
        $('.header__search').toggleClass('opened')
      })
    }
    if ($(window).width() < 1299) {
      $('.hamburger__btn').on('click', function() {
        $('.header__nav').toggleClass('opened')
        $('body').toggleClass('openSidebar')
        $('.header__search').removeClass('opened')
      })

      $('body').click(function(e) {
        if (!$(e.target).is('.hamburger__btn *,.hamburger__btn, .forSidebarStyle , .forSidebarStyle  *')) {
          $('.level1 ').removeClass('opened')
          $('.level2 ').removeClass('opened')
          $('.header__nav').removeClass('opened')
          $('body').removeClass('openSidebar')
        }
      })

    }

    $(window).scroll(function() {
      if ($(window).scrollTop() > $(window).height()) {
        $('.back-to-top').addClass('show')
      } else {
        $('.back-to-top').removeClass('show')
      }
     // if($(window).scrollTop() + $(window).height() == $(document).height()){
     //    $('body').addClass('showFooter')
     //  } else {
     //    $('body').removeClass('showFooter')
     //  }
       
    });

    $('.custom__tooltip button').on('click', function() {
      $(this).parent().toggleClass('active')
    })

    $('body').click(function(e) {
      if (!$(e.target).is('.custom__tooltip *,.custom__tooltip')) {
        $('.custom__tooltip').removeClass('active')
      }
    })


    $('.btn__toggle').on('click', function() {
      $(this).toggleClass('active')
      $(this).next().slideToggle()
    })
    $('[data-fancybox="gallery"]').fancybox({
      buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
      ],
      loop: false,
      protect: true
    });

    $('.tabs__main a.btn__tab').click(function(e) {
      e.preventDefault()
      $(this).parent().siblings().find('a').removeClass('active')
      $(this).toggleClass('active')
      var tagid = $(this).data('tag');
      $('.body__tab .list').each(function() {
        if ($(this).is($('#' + tagid))) {
          $(this).toggleClass('hides')
        } else {
          $(this).addClass('hides')
        }
      })
    });

    $('.comment--carousel.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      autoWidth: true
    })

    $('.mini__owl').owlCarousel({
      loop: false,
      margin: 24,
      dots: false,
      nav: true,
      responsive: {
        0: {
          autoWidth: true
        },
        600: {
          items: 4
        },
        1000: {
          items: 3
        }
      }
    })

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      responsive: {
        0: {
          dots: true
        },
        767: {
          dots: false
        },
      },
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
      .on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: false,
        smartSpeed: 200,
        margin: 5,
        autoWidth: true,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }

      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });


    $(document).on('click', ".back-to-top", function(e) {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    })
    $(document).on('click', ".level1  .backed", function(e) {
      $('.level1').removeClass('opened')
    })
    $(document).on('click', ".level2  .backed", function(e) {
      $('.level2').removeClass('opened')
    })
    $(document).on('click', ".level1 .btn_in", function(e) {
      if ($(window).width() < 1300) {
        $('.level2').addClass('opened')
      }

    })

    $(document).on('click', ".hdr_dropdown .title_dropdown", function(e) {
      e.preventDefault()
      if ($(window).width() > 1299) {
        $(this).parent().siblings().removeClass('actived')
        $(this).parent().toggleClass('actived')
      } else {
        $('.level1').addClass('opened')

      }


    })


    $('.collapsible-md a.title').on('click', function(e) {
      e.preventDefault()
    })
    if ($(window).width() < 1023) {
      $('.collapsible-md a.title').on('click', function(e) {
        e.preventDefault()
        $(this).toggleClass('open')
        $(this).next().slideToggle()
      })
    }

    wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animate__animated', // default
      offset: 100, // default
      mobile: true, // default
      live: true // default
    })
    wow.init();

    $("img.lazy").lazyload({ effect: "fadeIn", threshold: 700 });

  });


  document.addEventListener('DOMContentLoaded', function() {
    var openModaledBtn = document.querySelectorAll('.modaled-open'),
      modaledOverlay = document.querySelectorAll('.modaled'),
      modaledContent = document.querySelectorAll('.modaled-content'),
      closeModaledBtn = document.querySelectorAll('.modaled-close');

    //open modaled
    openModaledBtn.forEach(function(item) {
      item.addEventListener('click', function() {
        var modaledId = this.getAttribute('data-modaled-id'),
          modaledElem = document.querySelector('.modaled[id="' + modaledId + '"]');
        modaledElem.classList.add('open');
      });
    });

    //close modaled on click on close-modaled btn
    closeModaledBtn.forEach(function(item) {
      item.addEventListener('click', function() {
        item.parentNode.closest('.modaled').classList.remove('open')
      })
    })

    $(document).click(function(event) {
      if ($(".modaled").hasClass("open")) {

        if ($(event.target).find(".modaled-content").length !== 0) {
          $(event.target).closest(".modaled").removeClass("open")
        }
      }
    });
  });