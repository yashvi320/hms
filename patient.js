document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const contentSections = document.querySelectorAll(".content-section");

    function hideAllSections() {
        contentSections.forEach(section => {
            section.classList.remove("active");
        });
    }

    function showSection(sectionId) {
        document.getElementById(sectionId).classList.add("active");
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            hideAllSections();
            const targetId = this.id.replace("-tab", "-content");
            showSection(targetId);
        });
    });

    // Show default section
    showSection("register-patient-content");

    // Logout functionality
    document.getElementById("logout").addEventListener("click", function() {
        window.location.href = "../Home/home.html";
    });
});
