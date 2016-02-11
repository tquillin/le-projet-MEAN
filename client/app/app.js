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

      function displaySD(){
        $(".beer-sd").hover(function(){
          $('.display-sd').css("visibility", "visible");

        });

        }
        function hideDisplaySD(){
          $('#exit-sd').click(function(){
            $('.display-sd').css("visibility", "hidden");
          });
        }

        function displayTequilaSD(){
          $(".tequila-sd").hover(function(){
            $('.display-tequila-sd').css("visibility", "visible");

          });

          }
          function hideDisplayTequilaSD(){
            $('#exit-tequila-sd').click(function(){
              $('.display-tequila-sd').css("visibility", "hidden");
            });
          }

        // setTimeout(function(){
        //   // display();
        //   console.log("setTimeout?");}, 100);










        // <div id="compares-sd" class="beverages-sd">
        //  <img class="beer-sd" src="https://openclipart.org/image/300px/svg_to_png/2214/drunken-duck-Beer-2.png&disposition=attachment" alt="" />
        //  <div class="display-sd" >
        //    <h6>one gram is like 3 beers in an hour<p id="exit-sd">X</p></h6>
        //  </div>
        //  <div class="display-tequila-sd" >
        //    <h6>one gram is like 4 shots in one hour<p id="exit-tequila-sd">X</p></h6>
        //  </div>
        //  <img class="tequila-sd" src="http://media1.break.com/breakstudios/2012/3/16/TEQUILA%20shot-glass-11.jpg" alt="" />
        //   <!-- <img class="tequila-a-sd" src="http://media1.break.com/breakstudios/2012/3/16/TEQUILA%20shot-glass-11.jpg" alt="" /> -->
        //
        //  <img class="wine-sd" src="data:image/png;base64,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" alt="" />
        //  <div class="display-wine-sd" >
        //    <h6>one gram is like 3 glasses in an hour & half <p id="exit-wine-sd">X</p></h6>
        //  </div>
        // </div>

        function displayWineSD(){
          $(".wine-sd").hover(function(){
            $('.display-wine-sd').css("visibility", "visible");

          });

          }
          function hideDisplayWineSD(){
            $('#exit-wine-sd').click(function(){
              $('.display-wine-sd').css("visibility", "hidden");
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

displaySD();
hideDisplaySD();
displayTequilaSD();
hideDisplayTequilaSD();
displayWineSD();
hideDisplayWineSD();




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
