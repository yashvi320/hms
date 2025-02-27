function toggleForm() {
    const loginFormBox = document.querySelector(".form-box");
    const registerFormBox = document.getElementById("register-form-box");
    const formTitle = document.getElementById("form-title");

    if (loginFormBox.style.display === "none") {
        loginFormBox.style.display = "block";
        registerFormBox.style.display = "none";
        formTitle.textContent = "Login";
    } else {
        loginFormBox.style.display = "none";
        registerFormBox.style.display = "block";
        formTitle.textContent = "Register";
    }
}



document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = {
        "patient": { username: "patient", password: "patient123", page: "patient.html" },
        "doctor": { username: "doctor", password: "doctor123", page: "doctor_dashboard.html" },
        "pharmacy": { username: "pharmacy", password: "pharmacy123", page: "../Pharmacy/pharmacy.html" },
        "laboratory": { username: "laboratory", password: "lab123", page: "../Labroratory/laboratory.html" },
        "beds_ward": { username: "beds", password: "ward123", page: "../Bed-Ward/bed-ward.html" },
        "receptionist": { username: "receptionist", password: "reception123", page: "../Receptionist/receptionist.html" },
        "accounts": { username: "accounts", password: "account123", page: "accounts_dashboard.html" },
        "medical_records": { username: "medrecords", password: "medrecords123", page: "../Med-Rec/med-rec.html" }
    };

    for (let role in users) {
        if (users[role].username === username && users[role].password === password) {
            window.location.href = users[role].page;
            return; 
        }
    }


    alert("Invalid username or password");
});



document.getElementById("sendTestBill").addEventListener("click", function() {
    alert("Test Bill Sent!");
});

document.getElementById("orderTest").addEventListener("click", function() {
    alert("Test Ordered!");
});

document.getElementById("updateTestStatus").addEventListener("click", function() {
    alert("Test Status Updated!");
});

document.getElementById("viewTestResults").addEventListener("click", function() {
    alert("Viewing Test Results!");
});

document.getElementById("generateTestResult").addEventListener("click", function() {
    alert("Test Result Generated!");
});


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

