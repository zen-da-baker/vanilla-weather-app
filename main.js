function changeTitle(city) {
    document.getElementById("title").innerHTML = city + " Weather";

    const mobileNavItems = document.getElementById("mobile-nav-items");

    mobileNavItems.style.display = "none";
}

/*
function namePerris() {
    document.getElementById("title").innerHTML = "Perris";
}

function nameLA() {
    document.getElementById("title").innerHTML = "Los Angeles";
}

function nameSanDiego() {
    document.getElementById("title").innerHTML = "San Diego";
}

function nameSacramento() {
    document.getElementById("title").innerHTML = "Sacramento";
}

function nameSanFrancisco() {
    document.getElementById("title").innerHTML = "San Francisco";
}

function nameLasVegas() {
    document.getElementById("title").innerHTML = "Las Vegas";
}

function namePortland() {
    document.getElementById("title").innerHTML = "Portland";
}

function selectPerris() {
    endpoint = perris;
    getData();
}

function selectLA() {
    endpoint = la;
    getData();
}

function selectSanDiego() {
    endpoint = sanDiego;
    getData();
}

function selectSacramento() {
    endpoint = sacramento;
    getData();
}

function selectSanFrancisco() {
    endpoint = sanFrancisco;
    getData();
}

function selectLasVegas() {
    endpoint = lasVegas;
    getData();
}

function selectPortland() {
    endpoint = portland;
    getData();
}
*/
