//This code block starts when the document is ready
$(document).ready(function(){
    //On click of elements with 'data-toggle' attribute as 'scroll', perform the function
    $('[data-toggle="scroll"]').on('click', function(e){
        e.preventDefault();//Prevent default action, if any
        var target = $($(this).data('target'));//Find the element associated with the clicked element using the 'data' attribute
        //If such an element exists, apply jQuery's animation to set the vertical scroll position gradually to that element
        if(target.length)
            $('body, html').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
    })

    //Create a new object of class 'WOW' and initialize its properties
    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();

    //If divs with class name 'grid' are present on the page, call Masonry API's masonry method on them to align their content in a grid layout
    if($('.grid').length)
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        })

    //On click of elements with 'data-toggle' attribute as 'isotope-filter', perform the function
    $('[data-toggle="isotope-filter"]').on('click', function(e){
        e.preventDefault();//Prevent default action, if any
        
        //Find all elements associated with the clicked element using the 'data' attribute
        var target = $($(this).data('target'));
        var parent = $($(this).data('parent'));
        var filter = $($(this).data('filter'));
        
        //Apply isotope filtering to the target element based on the value of 'filter'
        target.isotope({ filter: filter });
        
        //For the given filter, set the clicked element as checked and others as unchecked
        parent.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    })

    //If divs with class name 'owl-carousel' are present on the page, configure each such element with Owl Carousel's configuration options specified as data attributes
    if($('.owl-carousel').length){
        $('.owl-carousel').each(function(i, item){
            item = $(item);
            var config = item.data();
            item.owlCarousel(config);
        })
        
        //On click of elements with 'data-toggle' attribute as 'owl-next', select the next item in the owl carousel and perform related action
        $('[data-toggle="owl-next"]').click(function() {
            var target = $($(this).data('target'));
            target.trigger('next.owl.carousel');
        })
        //On click of elements with 'data-toggle' attribute as 'owl-prev', select the previous item in the owl carousel and perform related action
        $('[data-toggle="owl-prev"]').click(function() {
            var target = $($(this).data('target'));
            target.trigger('prev.owl.carousel');
        })

    }
});
