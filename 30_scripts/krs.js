// $(function() {
  
//     // contact form animations
//     $("#btnHold").click(function() {
//       $("#signUP").fadeToggle();
//     })
//     $(document).mouseup(function (e) {
//       var container = $("#signUP");
  
//       if (!container.is(e.target) // if the target of the click isn't the container...
//           && container.has(e.target).length === 0) // ... nor a descendant of the container
//       {
//           container.fadeOut();
//       }
//     });
    
//   });

function sipForm() {
    // document.getElementById("signUp").
    var button = document.querySelector("button");

    button.addEventListener("click", function(){
         document.body.classList.toggle("purple")
        });
    }