var btn = document.getElementById("sip");
var btn2 = document.getElementById("sin");
var x = document.querySelector(".popUp");
var y = document.querySelector(".popIn");

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

//--REFACTOR WITH A "element.contains(event.target)..." approach--//
y.addEventListener("click", function() {
  if(event.target.id != "info" && event.target.id != "info2" && event.target.id != "options" && event.target.id != "fp" && event.target.id != "login" && event.target.id != "welcome" && event.target.id != "forgot" && event.target.id != "submit") {
    y.style.display = "none";
  }
});


//-------------------THIS CAN BE REFACTORED AS WELL..MAYBE INTO AN ARRAY OR SOMETHING--------------------------------//

var feed = document.getElementById("feed");
var buy = document.getElementById("buy");
var sell = document.getElementById("sell");
var trade = document.getElementById("trade");
var about = document.getElementById("about");

feed.addEventListener("click", function() {
  if(event.target.id === "feed") {
    alert("This page is under construction.")
  }
})

buy.addEventListener("click", function() {
  if(event.target.id === "buy") {
    alert("This page is under construction.")
  }
})

sell.addEventListener("click", function() {
  if(event.target.id === "sell") {
    alert("This page is under construction.")
  }
})

trade.addEventListener("click", function() {
  if(event.target.id === "trade") {
    alert("This page is under construction.")
  }
})

about.addEventListener("click", function() {
  if(event.target.id === "about") {
    alert("This page is under construction.")
  }
})