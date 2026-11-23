var teamForm = document.getElementsByClassName("team-form")[0];

function sendTeamForm() {
    var name = document.getElementById("team-name").value;
    alert("Thank you, " + name + "! Your request to join our team has been sent.");

    var inputs = teamForm.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    return false;
}

teamForm.onsubmit = sendTeamForm;