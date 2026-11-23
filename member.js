function validateJoin() {
    var workshop = document.getElementById("workshop").value;
    var fullName = document.getElementById("full-name").value;
    var preferredDate = document.getElementById("preferred-date").value;
    var errors = "";

    if (workshop == "") {
        errors += "- Please select a workshop.\n";
    }

    if (fullName == "") {
        errors += "- Please enter your full name.\n";
    } else if (fullName.match(/[0-9?!@]/)) {
        errors += "- The name must not contain numbers or characters such as ?, ! or @.\n";
    } else if (!fullName.match(/^[A-Za-z]+( [A-Za-z]+)+$/)) {
        errors += "- Please enter your full name (first and last name) using letters only.\n";
    }

    if (preferredDate == "") {
        errors += "- Please choose a preferred date.\n";
    } else {
        var parts = preferredDate.split("-");
        var chosen = parseInt(parts[0]) * 10000 + parseInt(parts[1]) * 100 + parseInt(parts[2]);
        var now = new Date();
        var today = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
        if (chosen <= today) {
            errors += "- The preferred date must be a future date.\n";
        }
    }

    if (errors != "") {
        alert("Your request was not sent:\n\n" + errors);
        return false;
    }

    var stay = confirm("Your request to join " + workshop + " has been sent!\n\n" +
        "Press OK to stay on this page, or Cancel to return to the Member Dashboard.");

    if (stay) {
        document.getElementById("new-requests-table").innerHTML +=
            "<tr><td>" + workshop + "</td><td>" + fullName + "</td><td>" + preferredDate + "</td></tr>";
        document.getElementById("new-requests").style.display = "block";
        applySavedTheme();
        document.getElementById("workshop").value = "";
        document.getElementById("full-name").value = "";
        document.getElementById("preferred-date").value = "";
    } else {
        window.location.href = "member-dashboard.html";
    }

    return false;
}


function validateReview() {
    var workshop = document.getElementById("completed-workshop");
    var rating = document.getElementById("rating");
    var feedback = document.getElementById("feedback");
    var missing = false;

    if (workshop.value == "") {
        workshop.style.border = "2px solid red";
        document.getElementById("workshop-label").style.color = "red";
        missing = true;
    } else {
        workshop.style.border = "";
        document.getElementById("workshop-label").style.color = "";
    }

    if (rating.value == "") {
        rating.style.border = "2px solid red";
        document.getElementById("rating-label").style.color = "red";
        missing = true;
    } else {
        rating.style.border = "";
        document.getElementById("rating-label").style.color = "";
    }

    if (feedback.value.match(/^\s*$/)) {
        feedback.style.border = "2px solid red";
        document.getElementById("feedback-label").style.color = "red";
        missing = true;
    } else {
        feedback.style.border = "";
        document.getElementById("feedback-label").style.color = "";
    }

    if (missing) {
        alert("Please fill in the highlighted fields.");
        return false;
    }

    if (parseInt(rating.value) >= 4) {
        alert("Thank you for your great rating! We are happy you enjoyed the workshop.");
    } else {
        alert("We are sorry the workshop did not meet your expectations. Thank you for your feedback.");
    }

    window.location.href = "member-dashboard.html";
    return false;
}
