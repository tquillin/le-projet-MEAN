console.log('on est le client l\'ElectricLadyland...');


// the second (sometimes first) step to introducing angular into your web application
var app = angular.module('ElectricLadyland', ['mainController', 'productsApiFactory']);


$(document).ready(function(){

  function display(){
    $(".beer").hover(function(){
      $('.display').css("visibility", "visible");

    });

    }
    function hideDisplay(){
      $('#exit').click(function(){
        $('.display').css("visibility", "hidden");
      });
    }

    function displayTequila(){
      $(".tequila").hover(function(){
        $('.display-tequila').css("visibility", "visible");

      });

      }
      function hideDisplayTequila(){
        $('#exit-tequila').click(function(){
          $('.display-tequila').css("visibility", "hidden");
        });
      }

    // setTimeout(function(){
    //   // display();
    //   console.log("setTimeout?");}, 100);

    function displayWine(){
      $(".wine").hover(function(){
        $('.display-wine').css("visibility", "visible");

      });

      }
      function hideDisplayWine(){
        $('#exit-wine').click(function(){
          $('.display-wine').css("visibility", "hidden");
        });
      }

      // function value(){
      //   var thcValue = $('#thc').val();
      //   console.log(thcValue);
      // }

// value();
display();
hideDisplay();
displayTequila();
hideDisplayTequila();
displayWine();
hideDisplayWine();




  // alert("cela marche?");
  // $('.beer').on("hover", function(){ });


  });

    // var $view = $("<p>").addClass("grams").css("text", "one gram is like one beer in an hour ");
    // $(".grams").css("background-color", "white").css("color", "black").css("width", "100px").css("height", "100px").css("top", "100%").css("left", "15%");
    // return  $view ;


// ),
  // $('.beer').hover(function(){
  //   // e.preventDefault();
  //     // $('.display').css("color", "white");
  //      alert("one gram is like 4 beers in an hour ");
  // });

//   $('.tequila').hover(function(){
//     alert("one gram is like two shots of tequila in an hour ");
//   });
//
//   $('.wine').hover(function(){
//     alert("one gram is like one glass of red wine in an hour... \n #TYoSelf: wine has more alcohol than beer");
//   });
//
//     // alert("cela marche?");
//     // .tequila{
//     //   width: 2%;
//     //   position: absolute;
//     //   top: 198%;
//     //   left: 25%;
//     // }
//
// });
