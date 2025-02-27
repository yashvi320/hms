document.getElementById('reg-doc-tab').addEventListener('click', function() {
    showContent('reg-doc-content');
});
document.getElementById('assign-patient-tab').addEventListener('click', function() {
    showContent('assign-patient-content');
});
document.getElementById('view-history-tab').addEventListener('click', function() {
    showContent('view-history-content');
});
document.getElementById('generate-bill-tab').addEventListener('click', function() {
    showContent('generate-bill-content');
});
document.getElementById('generate-prescription-tab').addEventListener('click', function() {
    showContent('generate-prescription-content');
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
showContent('reg-doc-content');