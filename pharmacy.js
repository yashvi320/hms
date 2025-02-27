/* pharmacy.js */
document.getElementById('add-med-tab').addEventListener('click', function() {
    showContent('add-med-content');
});
document.getElementById('view-stock-tab').addEventListener('click', function() {
    showContent('view-stock-content');
});
document.getElementById('issue-med-tab').addEventListener('click', function() {
    showContent('issue-med-content');
});
document.getElementById('generate-invoice-tab').addEventListener('click', function() {
    showContent('generate-invoice-content');
});
document.getElementById('search-med-tab').addEventListener('click', function() {
    showContent('search-med-content');
});

document.addEventListener("DOMContentLoaded", function () {
    let logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            console.log("Logout button clicked!"); // Debugging log
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = "../Home/home.html"; // Redirect to home page
        });
    } else {
        console.error("Logout button not found!");
    }
});

function showContent(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

showContent('add-med-content');