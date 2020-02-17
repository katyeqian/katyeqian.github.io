$(document).ready(function() {
    
//    $( "#abt" ).click(function() {
//        $(".grid-container").animate({opacity:"0"},500);
//        $(".grid-container").animate({display: "none"},500);
//        $("#about").animate({opacity:"1"},500);
//        
//    });

//    var firstchunk = ($('#first-article').offset().top) + $('#first-article').height();
//
//    // on scroll, 
//    $(window).on('scroll',function(){
//
//        // we round here to reduce a little workload
//        stop = Math.round($(window).scrollTop());
//        if (stop < firstchunk) {
//            $('#one').addClass('past-1');
//        } else {
//            $('#one').removeClass('past-1');
//            console.log("1 removed");
//       }
//
//    });
//    
//    var secondchunk = firstchunk + $('#second-article').height();
//
//    // on scroll, 
//    $(window).on('scroll',function(){
//        console.log(firstchunk, "<", stop, "<", secondchunk);
//        // we round here to reduce a little workload
//        stop = Math.round($(window).scrollTop());
//        if (firstchunk < stop && stop < secondchunk) {
//            $('#two').addClass('past-1');
//        } else {
//            $('#two').removeClass('past-1');
//            console.log("2 removed");
//       }
//
//    });
//    
//    var thirdchunk = secondchunk + $('#third-article').height();
//    
//
//    // on scroll, 
//    $(window).on('scroll',function(){
//
//        // we round here to reduce a little workload
//        stop = Math.round($(window).scrollTop());
//        console.log(thirdchunk, stop);
//        if (secondchunk < stop && stop < thirdchunk) {
//            $('#three').addClass('past-1');
//
//        } else {
//            $('#three').removeClass('past-1');
//            console.log("3 removed");
//       }
//
//    });
//    
//    var fourthchunk = thirdchunk + $('#fourth-article').height();
//
//    // on scroll, 
//    $(window).on('scroll',function(){
//
//        // we round here to reduce a little workload
//        stop = Math.round($(window).scrollTop());
//        if (thirdchunk < stop && stop < fourthchunk) {
//            $('#four').addClass('past-1');
//        } else {
//            $('#four').removeClass('past-1');
//            console.log("4 removed");
//       }
//
//    });
    
    
// WORK GLITCH
    var bt = document.querySelectorAll('.werk')[0];
    var turbVal = { val: 0.000001 };
    var turb = document.querySelectorAll('#noise feTurbulence')[0];
    var btTl = new TimelineLite({ paused: true, onUpdate: function() {
      turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
    } });

    btTl.to(turbVal, 0.2, { val: 0.3 });
    btTl.to(turbVal, 0.2, { val: 0.000001 });

    bt.addEventListener("mouseover", function() {
      btTl.restart();
      });

// PLAY GLITCH
    var bt2 = document.querySelectorAll('.play')[0];
    var turbVal2 = { val: 0.000001 };
    var turb2 = document.querySelectorAll('#noise2 feTurbulence')[0];
    var btTl2 = new TimelineLite({ paused: true, onUpdate: function() {
      turb2.setAttribute('baseFrequency', '0 ' + turbVal2.val);
    } });

    btTl2.to(turbVal2, 0.2, { val: 0.3 });
    btTl2.to(turbVal2, 0.2, { val: 0.000001 });

    bt2.addEventListener("mouseover", function() {
      btTl2.restart();
      });
    
// RESUME GLITCH
    var bt3 = document.querySelectorAll('.resume')[0];
    var turbVal3 = { val: 0.000001 };
    var turb3 = document.querySelectorAll('#noise3 feTurbulence')[0];
    var btTl3 = new TimelineLite({ paused: true, onUpdate: function() {
      turb3.setAttribute('baseFrequency', '0 ' + turbVal3.val);
    } });

    btTl3.to(turbVal3, 0.2, { val: 0.3 });
    btTl3.to(turbVal3, 0.2, { val: 0.000001 });

    bt3.addEventListener("mouseover", function() {
      btTl3.restart();
      });
    
// RESUME GLITCH
    var bt4 = document.querySelectorAll('.abot')[0];
    var turbVal4 = { val: 0.000001 };
    var turb4 = document.querySelectorAll('#noise4 feTurbulence')[0];
    var btTl4 = new TimelineLite({ paused: true, onUpdate: function() {
      turb4.setAttribute('baseFrequency', '0 ' + turbVal4.val);
    } });

    btTl4.to(turbVal4, 0.2, { val: 0.3 });
    btTl4.to(turbVal4, 0.2, { val: 0.000001 });

    bt4.addEventListener("mouseover", function() {
      btTl4.restart();
      });

// HEAD GLITCH
    var bt5 = document.querySelectorAll('.katie')[0];
    var turbVal5 = { val: 0.000001 };
    var turb5 = document.querySelectorAll('#noise5 feTurbulence')[0];
    var btTl5 = new TimelineLite({ paused: true, onUpdate: function() {
      turb5.setAttribute('baseFrequency', '0 ' + turbVal5.val);
    } });

    btTl5.to(turbVal5, 0.2, { val: 0.3 });
    btTl5.to(turbVal5, 0.2, { val: 0.000001 });

    bt5.addEventListener("mouseover", function() {
      btTl5.restart();
      });
});