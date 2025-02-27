// JavaScript for Accounts Dashboard

document.getElementById('generate-bill-tab').addEventListener('click', function() {
    showContent('generate-bill-content');
});

document.getElementById('send-total-tab').addEventListener('click', function() {
    showContent('send-total-content');
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = '../Home/home.html';
});

function showContent(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Show Generate Bill tab by default
showContent('generate-bill-content');
