

setTimeout(function(){

    $('.container').css('visibility','visible')

    $('document').ready(function(){

        setTimeout(function(){

            $('.inner_container').css('visibility','visible')
            
            setTimeout(function(){
    
                $('.wrapper').css('visibility','visible')
                $('#penguin').attr('src', 'images/welcome.svg')
                $('.hello').css('visibility','visible')
                
                
            }, 1000);
                
            
        }, 500);


    });
    

    
}, 500);




$('.hello').click(function(){

$('.inner_container').hide();
$('.hello').hide();
$('.title_bar').css('visibility','visible')


})

////time.///

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('ddd DD MMM h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);
});

// var time = moment().format('ll');
// $('#time').html(time);


////////////////////////////////////////////////////////////////nav////////////////////////////////

// $('#logopenguin').click(function(){


//     $('#tab1').css('visibility','visible')


//     $('#logopenguin').click(function(){


//         $('#tab1').css('visibility','hidden')
    

//     })
    

// })


$('#logopenguin').click(function(){

    if ( $('#tab1').css('visibility') == 'hidden' ){
      //icon stay black//
      $('#logopenguin').css('background-color','black');
      $('#allworks').css('background-color','transparent');
      $('#allworks').css('color','black');
      $('#contact').css('background-color','transparent');
      $('#contact').css('color','black');
      /////
      $('#tab1').css('visibility','visible');
      $('#tab2').css('visibility','hidden');
      $('#tab3').css('visibility','hidden');
    }

    else{
      $('#tab1').css('visibility','hidden');
      $('#logopenguin').css('background-color','transparent');}
});

$('#allworks').click(function(){

    if ( $('#tab2').css('visibility') == 'hidden' ){
      ////
      $('#allworks').css('background-color','black');
      $('#allworks').css('color','white');
      $('#logopenguin').css('background-color','transparent');
      $('#contact').css('background-color','transparent');
      $('#contact').css('color','black');
      ///
      $('#tab2').css('visibility','visible');
      $('#tab1').css('visibility','hidden');
      $('#tab3').css('visibility','hidden');
    }

    else{
      $('#tab2').css('visibility','hidden');
      ///icon///
      $('#allworks').css('background-color','transparent');
      $('#allworks').css('color','black');
      ///icon///
    }
});


$('.desktop_bound').click(function(){
    $('#tab1').css('visibility','hidden')
    $('#tab2').css('visibility','hidden')
    $('#tab3').css('visibility','hidden')

    ///icon reset//
    $('#logopenguin').css('background-color','transparent');
    $('#allworks').css('background-color','transparent');
    $('#allworks').css('color','black');
    $('#contact').css('background-color','transparent');
    $('#contact').css('color','black');
   ///icon reset//
});


$('#contact').click(function(){


  if ( $('#tab3').css('visibility') == 'hidden' ){
    ///icon
    $('#logopenguin').css('background-color','transparent');
    $('#allworks').css('background-color','transparent');
    $('#allworks').css('color','black');
    
    $('#contact').css('background-color','black');
    $('#contact').css('color','white');
    

    ///
    $('#tab3').css('visibility','visible')
    $('#tab2').css('visibility','hidden')
    $('#tab1').css('visibility','hidden')
  }

    
    

  else {
    $('#tab3').css('visibility','hidden');
    $('#contact').css('background-color','transparent');
    $('#contact').css('color','black');
  }

});


// ///window////////////////////////////////

// new WinBox("Mount DOM", {

//   mount: document.getElementById("content"),

//   id: "my-window",
//   title: "All Options",
//   background: "#000",
//   border: 4,


// });

// const winbox = WinBox({
//     title: "About",

//     // width: "50%",
//     // height: "50%",
//     top:"150px",
//     bottom:"130px",
//     right:"340px",
//     left:"340px",
//     x: "50%",
//     y: "40%",
//     background: "#000",
//     border: "2.5",



//   class: [
    
//       "no-min",
//       // "no-max",
//       "no-full",
//       // "no-resize",
//       "no-shadow",
//       "no-animation",
//   ]
// });
