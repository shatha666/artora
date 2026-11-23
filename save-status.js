function getSaved() {
    var list = JSON.parse(localStorage.getItem("artoraFavorites"));
    if (list == null) {
        list = [];
    }
    return list;
}

function isInList(list, key) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] == key) {
            return true;
        }
    }
    return false;
}

function saveFav(key) {
    var saved = getSaved();
    if (isInList(saved, key) == false) {
        saved.push(key);
        localStorage.setItem("artoraFavorites", JSON.stringify(saved));
    }
}

// mark the workshops that are already saved with a red heart
function markSavedLinks() {
    var savedList = getSaved();
    var saveLinks = document.getElementsByClassName("save-link");

    for (var i = 0; i < saveLinks.length; i++) {
        var fullName = saveLinks[i].parentNode.getAttribute("data-name");
        var key = fullName.split(" ")[0].toLowerCase();

        if (isInList(savedList, key)) {
            saveLinks[i].innerHTML = "♥ saved";
            saveLinks[i].style.color = "#c0392b";
            saveLinks[i].style.fontWeight = "bold";
        }
    }
}
