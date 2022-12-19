$(document).ready(function() {  

  $(".accordion__header").on('click touch',function () {   
    $(this).parent().find('.accordion__info').slideToggle("slow");
    $(this).toggleClass('active');
  }); 
  $(".accordion__header-inside").on('click touch',function () {   
    $(this).parent().find('.accordion__info-inside').slideToggle("slow");
    $(this).toggleClass('active');
  }); 
  $(".accordion__header-inside-two").on('click touch',function () {   
    $(this).parent().find('.accordion__info-inside-two').slideToggle("slow");
    $(this).toggleClass('active');
  }); 
  $(".sorting__button-filter").on('click touch',function () {    
    $(".catalog__left").addClass('active');
    $("body").addClass('active-filter');
  }); 
  $(".catalog__left-mobile-close").on('click touch',function () {    
    $(".catalog__left").removeClass('active');
    $("body").removeClass('active-filter');
  }); 

  $('.first__owl-carousel').owlCarousel({
    items: 1,  
    autoplay:true,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 3000,
    loop: true,
  });

  $('.collection__owl-carousel').owlCarousel({
    items: 4, 
    autoplay:true,
    dots: true,
    nav: true,
    dotsEach: true,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items:1,
        autoWidth:true,
        margin:20
      },
      580: {
        items:2
      }, 
      992: {
        items: 3
      },
      1260: {
        items: 4
      } 
    }
  });
  $('.popular__owl-carousel').owlCarousel({
    items: 4, 
    autoplay:false,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items:1,
        autoWidth:true,
        margin:20
      },
      580: {
        items:2
      }, 
      992: {
        items: 3
      },
      1260: {
        items: 4
      } 
    }
  });
  $('.market__owl-carousel').owlCarousel({
    items: 3, 
    autoplay:true,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 3000,
    nav: true,
    loop: true, 
    responsive: {
      0: {
        items:1,
        autoWidth:true,
        margin:20
      },
      580: {
        items:2
      }, 
      992: {
        items: 3
      }
    }
  }); 
  
  // $('.talk__owl-carousel').owlCarousel({
  //   items: 4, 
  //   autoplay:true,
  //   dots: true,
  //   dotsEach: true,
  //   autoplayTimeout: 3000,
  //   loop: true,
  // });
  $('.talk__new-owl').owlCarousel({
    items: 2, 
    autoplay:true,
    dots: true,
    dotsEach: true,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items:1
      },
      780: {
        items:2
      }
    }
  });

  $('.class__owl-carousel').owlCarousel({
    items: 1, 
    autoplay: false,
    dots: false,
    dotsEach: true,
    autoplayTimeout: 3000,
    loop: true,
    nav: true, 
    responsive: {
      700: {
        items: 2,
      },
      1200: {
        items: 3
      },
      1420: {
        items: 4
      },
    }
  });

  $('.recommended__button').on('click touch', function(){
    var btn = $('.recommended__list li');
    btn.toggleClass('active'); 
    $(this).hide();
  });
  $('.video__button').on('click touch', function(){
    var btn = $('.video__item');
    btn.toggleClass('active'); 
    $(this).hide();
  });
  $('.reviews__button').on('click touch', function(){
    var btn = $('.reviews__item');
    btn.toggleClass('active'); 
    $(this).hide();
  });

  $('.sorting-half').on('click touch', function(){ 
    $('.catalog').removeClass('full');  
  });
  $('.sorting-full').on('click touch', function(){ 
    $('.catalog').addClass('full');  
  });
  // (function($){
  //   $.fn.extend({
    
  //     customStyle1 : function(options) {
  //      if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
  //      return this.each(function() {
    
  //        var currentSelected = $(this).find(':selected');
  //        $(this).after('<span class="select1"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
  //        var selectBoxSpan = $(this).next();
  //        var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) -parseInt(selectBoxSpan.css('padding-right'));
  //        var selectBoxSpanInner = selectBoxSpan.find(':first-child');
  //        selectBoxSpan.css({display:'inline-block'});
  //        selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
  //        var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
  //        $(this).height(selectBoxHeight).change(function(){
  //          selectBoxSpanInner.text($('option:selected',this).text()).parent().addClass('changed');
  //        });
    
  //      });
  //      }
  //    }
  //   });
  //  })(jQuery);
  // $(document).ready(function() {
  //   $('#sort_value').customStyle1();
  // });

  // Select
	$('.sorting__select').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 500;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="sorting__select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: 'Новый товар'
		}).insertAfter($this);
		
		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		

	});
  

  $(function() {
 
    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity__btn.minus-btn");
      var $quantityArrowPlus = $(".quantity__btn.plus-btn");
      var $quantityNum = $(".quantity-num");
   
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
   
      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }
   
      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
   
  });

});