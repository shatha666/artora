// all club workshops (array of objects)
var workshops = [
    { key: "painting",    name: "painting workshop",    desc: "learn painting basics",        price: 80,  instructor: "lina ahmed", keywords: "painting basics color brush",      img: "images/painting-workshop.svg" },
    { key: "pottery",     name: "pottery workshop",     desc: "create with clay",             price: 100, instructor: "maha ali",   keywords: "pottery clay create",              img: "images/pottery-workshop.svg" },
    { key: "digital",     name: "digital art workshop", desc: "explore digital illustration", price: 0,   instructor: "nora saleh", keywords: "digital art illustration drawing", img: "images/digital-art-workshop.svg" },
    { key: "calligraphy", name: "Calligraphy workshop", desc: "lettering basics",             price: 60,  instructor: "",           keywords: "calligraphy lettering basics",     img: "images/calligraphy-workshop.svg" },
    { key: "sketching",   name: "Sketching workshop",   desc: "Observation drawing",          price: 0,   instructor: "",           keywords: "sketching observation drawing",    img: "images/sketching-workshop.svg" },
    { key: "mixed",       name: "Mixed media workshop", desc: "Combine art materials",        price: 90,  instructor: "",           keywords: "mixed media art materials",        img: "images/mixed-media-workshop.svg" }
];

// show the workshops that match the search text and the price filter
function showWorkshops() {
    var grid = document.getElementById("workshopGrid");
    var searchText = document.getElementById("search").value.toLowerCase();
    var priceFilter = document.getElementById("filter").value;
    var html = "";

    for (var i = 0; i < workshops.length; i++) {
        var w = workshops[i];

        var matchesSearch = w.name.toLowerCase().indexOf(searchText) != -1 ||
            w.instructor.indexOf(searchText) != -1 ||
            w.keywords.indexOf(searchText) != -1;

        var matchesPrice = priceFilter == "all" ||
            (priceFilter == "free" && w.price == 0) ||
            (priceFilter == "paid" && w.price > 0);

        if (matchesSearch && matchesPrice) {
            html += '<article class="workshop-card" data-name="' + w.name + '">' +
                '<a class="save-link" href="favorites.html" onclick="saveFav(\'' + w.key + '\')">♡ save</a>' +
                '<img src="' + w.img + '" alt="' + w.name + '">' +
                '<h2>' + w.name + '</h2><p>' + w.desc + '</p><p>Price: ' + w.price + ' SAR</p>' +
                '</article>';
        }
    }

    if (html == "") {
        html = "<p>No workshops match your search.</p>";
    }

    grid.innerHTML = html;

    markSavedLinks();
    applySavedTheme();
}

// shuffle the array so the workshops appear in a random order
function randomizeWorkshops() {
    for (var i = 0; i < workshops.length; i++) {
        var randomIndex = Math.floor(Math.random() * workshops.length);
        var temp = workshops[i];
        workshops[i] = workshops[randomIndex];
        workshops[randomIndex] = temp;
    }
    showWorkshops();
}

function filterWorkshops() {
    showWorkshops();
}

// true if the two workshops are in the wrong order for the chosen option
function shouldSwap(first, second, option) {
    var firstName = first.name.toLowerCase();
    var secondName = second.name.toLowerCase();

    if (option == "a-z" && firstName > secondName) {
        return true;
    }
    if (option == "z-a" && firstName < secondName) {
        return true;
    }
    if (option == "low-high" && first.price > second.price) {
        return true;
    }
    if (option == "high-low" && first.price < second.price) {
        return true;
    }
    return false;
}

// bubble sort the array, then show it again
function sortWorkshops() {
    var option = document.getElementById("sort").value;

    if (option == "") {
        return;
    }

    for (var i = 0; i < workshops.length - 1; i++) {
        for (var j = 0; j < workshops.length - 1 - i; j++) {
            if (shouldSwap(workshops[j], workshops[j + 1], option)) {
                var temp = workshops[j];
                workshops[j] = workshops[j + 1];
                workshops[j + 1] = temp;
            }
        }
    }

    showWorkshops();
}

window.onload = randomizeWorkshops;
