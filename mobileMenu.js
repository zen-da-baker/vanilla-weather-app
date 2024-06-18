// Function for toggling the menu button on the mobile view
function toggleMenu() {

    // DOM element as a variable for easier calling
    const mobileNavItems = document.getElementById("mobile-nav-items");

    // if the menu is showing, the button hides it, otherwise the menu is shown
    if (mobileNavItems.style.display == "block") {
        mobileNavItems.style.display = "none";
    } else {
        mobileNavItems.style.display = "block";
    }
}


