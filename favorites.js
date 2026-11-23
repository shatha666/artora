var allWorkshops = {
    painting:    { name: "painting workshop",    desc: "learn painting basics",        price: 80,  img: "images/painting-workshop.svg" },
    pottery:     { name: "pottery workshop",     desc: "create with clay",             price: 100, img: "images/pottery-workshop.svg" },
    digital:     { name: "digital art workshop", desc: "explore digital illustration", price: 0,   img: "images/digital-art-workshop.svg" },
    calligraphy: { name: "Calligraphy workshop", desc: "lettering basics",             price: 60,  img: "images/calligraphy-workshop.svg" },
    sketching:   { name: "Sketching workshop",   desc: "Observation drawing",          price: 0,   img: "images/sketching-workshop.svg" },
    mixed:       { name: "Mixed media workshop", desc: "Combine art materials",        price: 90,  img: "images/mixed-media-workshop.svg" }
};

var saved = JSON.parse(localStorage.getItem("artoraFavorites"));
if (saved == null) {
    saved = [];
}

function saveList() {
    localStorage.setItem("artoraFavorites", JSON.stringify(saved));
}

var list = document.getElementById("fav-list");

function showFavorites() {
    list.innerHTML = "";

    if (saved.length == 0) {
        list.innerHTML = "<p>No saved workshops yet. <a href='workshops.html'>Browse workshops</a></p>";
        return;
    }

    for (var i = 0; i < saved.length; i++) {
        var w = allWorkshops[saved[i]];
        list.innerHTML +=
            '<article class="workshop-card">' +
                '<button class="save-link saved-link" onclick="removeFav(' + i + ')">♥ Remove</button>' +
                '<img src="' + w.img + '" alt="' + w.name + '">' +
                '<h2>' + w.name + '</h2><p>' + w.desc + '</p><p>Price: ' + w.price + ' SAR</p>' +
            '</article>';
    }
}

function removeFav(index) {
    var w = allWorkshops[saved[index]];
    if (confirm("Remove " + w.name + " from your favorites?")) {
        saved.splice(index, 1);
        saveList();
        showFavorites();
        applySavedTheme();
    }
}

showFavorites();