var  btn = document.getElementById("sip"),
    btn2 = document.getElementById("sin"),
       x = document.querySelector(".popUp"),
       y = document.querySelector(".popIn");

btn.addEventListener("click", function() {
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});

btn2.addEventListener("click", function() {
  if (y.style.display === "flex") {
    y.style.display = "none";
  } else {
    y.style.display = "flex";
  }
});

//--REFACTOR WITH A "element.contains(event.target)..." approach--//
x.addEventListener("click", function() {
  if(event.target.id != "signUp" && event.target.id != "info" && event.target.id != "new" && event.target.id != "submit") {
    x.style.display = "none";
  }
});

y.addEventListener("click", function() {
  if(event.target.id != "info" && event.target.id != "info2" && event.target.id != "options" && event.target.id != "fp" && event.target.id != "login" && event.target.id != "welcome" && event.target.id != "forgot" && event.target.id != "submit") {
    y.style.display = "none";
  }
});
//--------------------------------------------------------------------------------------------------------//

var pages = [feed, buy, sell, trade, about];
var b = document.getElementById("navLinks");

b.addEventListener("click", function(){
    if (event.target.id === "feed" || event.target.id === "buy" || event.target.id === "sell" || event.target.id === "trade" || event.target.id === "about") {
        alert("The page " + event.target.id + " is under construction.")
    } 
})