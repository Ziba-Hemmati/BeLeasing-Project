function burgerMenuHandler() {
    var myTopnav = document.getElementById("myTopnav");
    console.log(myTopnav.style.height)
    if (myTopnav.style.height == "0px" || myTopnav.style.height == "") {
        myTopnav.style.height = "340px";
        console.log(myTopnav.style.height)
    } else {
        myTopnav.style.height = "0";
    }
}

window.onscroll = function () {
    var header = document.getElementById("header-container");
    if (window.pageYOffset > 80) {
        header.style.position = "sticky";
    } else {
        header.style.position = "relative";
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
