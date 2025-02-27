/* JavaScript: laboratory.js */

document.getElementById('order-test-tab').addEventListener('click', function() {
    showContent('order-test-content');
});
document.getElementById('view-tests-tab').addEventListener('click', function() {
    showContent('view-tests-content');
});
document.getElementById('update-status-tab').addEventListener('click', function() {
    showContent('update-status-content');
});
document.getElementById('generate-results-tab').addEventListener('click', function() {
    showContent('generate-results-content');
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

showContent('order-test-content');
