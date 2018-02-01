// $('#good-story-btn').on('click', function(e){

//     $('#about-more')
//     .toggleClass('show');

// });

window.onload = function() {
    cardNormalization();
  }
  
  function cardNormalization() {
    var items   = $('#portfolio .card'),              // grab all the slides
        heights = [],                                   // array to store heights
        tallest;                                        // tallest slide
  
    if (items.length) {
      function normalizeHeights() {
        items.each(function() {
          heights.push($(this).height());               // add each slide's height
        });                                             // to the array
  
        tallest = Math.max.apply(null, heights) + 30;        // find the largest height
  
        items.each(function() {
          $(this).css('min-height', tallest + 'px');    // set each slide's minimum
        });                                             // height to the largest
      };
  
      normalizeHeights();
  
      $(window).on('resize orientationchange', function() {
        tallest = 0, heights.length = 0;               // reset the variables
  
        items.each(function() {
          $(this).css('min-height', '0');              // reset each slide's height
        });
  
        normalizeHeights();                            // run it again
      });
    }
  }
  
