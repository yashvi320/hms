document.addEventListener("DOMContentLoaded", () => {
    loadPatients();
});

// Sample Data
let patients = [
    { name: "John Doe", age: 45, condition: "Diabetes", status: "Admitted" },
    { name: "Jane Smith", age: 33, condition: "Fever", status: "Discharged" }
];

function loadPatients() {
    let table = document.getElementById("patient-table");
    table.innerHTML = "";
    patients.forEach((patient, index) => {
        table.innerHTML += `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.condition}</td>
                <td>${patient.status}</td>
                <td>
                    <button onclick="deletePatient(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Delete Patient
function deletePatient(index) {
    patients.splice(index, 1);
    loadPatients();
}

// Add/Edit Patient
function savePatient() {
    let name = document.getElementById("patient-name").value;
    let age = document.getElementById("patient-age").value;
    let condition = document.getElementById("patient-condition").value;
    let status = document.getElementById("patient-status").value;

    patients.push({ name, age, condition, status });
    closeModal();
    loadPatients();
}

// Modal Controls
function openAddModal() {
    document.getElementById("patient-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("patient-modal").classList.add("hidden");
}
