function setThemeForClass(className, backgroundColor, textColor) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = backgroundColor;
        elements[i].style.color = textColor;
    }
}

function setThemeForTag(tagName, backgroundColor, textColor) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = backgroundColor;
        elements[i].style.color = textColor;
    }
}

function applySavedTheme() {
    var savedTheme = localStorage.getItem("artoraTheme");

    if (savedTheme === "dark") {
        document.body.style.backgroundColor = "#172321";
        document.body.style.color = "#f4f1e8";

        setThemeForClass("site-frame", "#172321", "#f4f1e8");
        setThemeForClass("site-header", "#263b37", "#f4f1e8");
        setThemeForClass("mission-box", "#263b37", "#f4f1e8");
        setThemeForClass("home-section", "#263b37", "#f4f1e8");
        setThemeForClass("featured-card", "#314a45", "#f4f1e8");
        setThemeForClass("hover-info", "#42494a", "#f4f1e8");
        setThemeForClass("review-card", "#314a45", "#f4f1e8");
        setThemeForClass("workshop-card", "#314a45", "#f4f1e8");
        setThemeForClass("about-intro", "#303738", "#f4f1e8");
        setThemeForClass("about-section", "#263b37", "#f4f1e8");
        setThemeForClass("instructor-card", "#303738", "#f4f1e8");
        setThemeForClass("team-form", "#303738", "#f4f1e8");
        setThemeForClass("member-box", "#303738", "#f4f1e8");
        setThemeForClass("dashboard-links", "#303738", "#f4f1e8");
        setThemeForClass("workshop-form", "#303738", "#f4f1e8");
        setThemeForClass("mgr-panel", "#292f30", "#f4f1e8");
        setThemeForClass("mgr-card", "#343c3d", "#f4f1e8");
        setThemeForClass("mgr-upload", "#343c3d", "#f4f1e8");
        setThemeForClass("mgr-form", "#343c3d", "#f4f1e8");
        setThemeForClass("mgr-person", "#343c3d", "#f4f1e8");
        setThemeForClass("mgr-intro", "#292f30", "#f4f1e8");
        setThemeForClass("site-footer", "#263b37", "#f4f1e8");
        setThemeForClass("event-bar", "#314a45", "#f4f1e8");
        setThemeForClass("profile-table", "#303738", "#f4f1e8");
        setThemeForClass("profile-label", "#3d6663", "#f4f1e8");
        setThemeForClass("profile-contact", "#303738", "#f4f1e8");
        setThemeForClass("workshop-controls", "#303738", "#f4f1e8");
        setThemeForClass("new-requests", "#303738", "#f4f1e8");
        setThemeForClass("mgr-row-actions", "#303738", "#f4f1e8");

        setThemeForTag("input", "#42494a", "#f4f1e8");
        setThemeForTag("select", "#42494a", "#f4f1e8");
        setThemeForTag("textarea", "#42494a", "#f4f1e8");
        setThemeForTag("td", "#303738", "#f4f1e8");
        setThemeForTag("th", "#3d6663", "#ffffff");
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";

        var classes = ["site-frame", "site-header", "mission-box", "home-section", "featured-card", "hover-info", "review-card", "workshop-card", "about-intro", "about-section", "instructor-card", "team-form", "member-box", "dashboard-links", "workshop-form", "mgr-panel", "mgr-card", "mgr-upload", "mgr-form", "mgr-person", "mgr-intro", "site-footer", "event-bar", "profile-table", "profile-label", "profile-contact", "workshop-controls", "new-requests", "mgr-row-actions"];
        for (var i = 0; i < classes.length; i++) {
            setThemeForClass(classes[i], "", "");
        }

        setThemeForTag("input", "", "");
        setThemeForTag("select", "", "");
        setThemeForTag("textarea", "", "");
        setThemeForTag("td", "", "");
        setThemeForTag("th", "", "");
    }
}

applySavedTheme();
