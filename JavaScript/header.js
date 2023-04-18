function burgerMenuHandler() {
  var pageBody = document.getElementById("page-content");
  var myTopnav = document.getElementById("myTopnav");
  pageBody.style.marginTop = "0";
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
    if (window.innerWidth <= 426) {
      pageBody.style.marginTop = "300px";
    }
  } else {
    myTopnav.className = "topnav";
  }
}

window.onscroll = function () {
  var header = document.getElementById("header-container");
  if (window.pageYOffset > 80) {
    header.className = "header-container-sticky";
  } else {
    header.className = "header-container";
  }
};

function activeMenuHandler(activeTabName) {
  var home = document.getElementById("home");
  var aboutUs = document.getElementById("about-us");
  var carLeasing = document.getElementById("car-leasing");
  var details = document.getElementById("details");
  var contact = document.getElementById("contact");
  var buyNow = document.getElementById("buy-now");
  switch (activeTabName) {
    case "about-us":
      home.className = "";
      aboutUs.className = "active";
      carLeasing.className = "";
      details.className = "";
      contact.className = "";
      buyNow.className = "";
      break;
    case "car-leasing":
      home.className = "";
      aboutUs.className = "";
      carLeasing.className = "active";
      details.className = "";
      contact.className = "";
      buyNow.className = "";
      break;
    case "details":
      home.className = "";
      aboutUs.className = "";
      carLeasing.className = "";
      details.className = "active";
      contact.className = "";
      buyNow.className = "";
      break;
    case "contact":
      home.className = "";
      aboutUs.className = "";
      carLeasing.className = "";
      details.className = "";
      contact.className = "active";
      buyNow.className = "";
      break;
    case "buy-now":
      home.className = "";
      aboutUs.className = "";
      carLeasing.className = "";
      details.className = "";
      contact.className = "";
      buyNow.className = "active";
      break;

    default:
      home.className = "active";
      aboutUs.className = "";
      carLeasing.className = "";
      details.className = "";
      contact.className = "";
      buyNow.className = "";
      break;
  }
}
