// JavaScript to switch between content sections when a tab is clicked
document.getElementById('add-patient-tab').addEventListener('click', function() {
    showContent('add-patient-content');
});
document.getElementById('view-patients-tab').addEventListener('click', function() {
    showContent('view-patients-content');
});
document.getElementById('book-appointments-tab').addEventListener('click', function() {
    showContent('book-appointments-content');
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
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');
}

// Show the Add Patient tab by default when the page loads
showContent('add-patient-content');
