// Sample Ward Data
const wards = [
    { id: 1, name: "General Ward 1", type: "General", totalBeds: 30, availableBeds: 10, occupiedBeds: 15, reservedBeds: 5 },
    { id: 2, name: "ICU Ward A", type: "ICU", totalBeds: 20, availableBeds: 5, occupiedBeds: 12, reservedBeds: 3 },
    { id: 3, name: "Emergency Ward", type: "Emergency", totalBeds: 15, availableBeds: 3, occupiedBeds: 10, reservedBeds: 2 },
];

// Function to Load Wards Dynamically
function loadWards() {
    const wardList = document.getElementById("ward-list");
    wardList.innerHTML = "";
    
    wards.forEach(ward => {
        const wardDiv = document.createElement("div");
        wardDiv.classList.add("ward-card");
        wardDiv.innerHTML = `
            <h3>${ward.name}</h3>
            <p><b>Type:</b> ${ward.type}</p>
            <p><b>Total Beds:</b> ${ward.totalBeds}</p>
            <p><b>Available:</b> ${ward.availableBeds} | <b>Occupied:</b> ${ward.occupiedBeds} | <b>Reserved:</b> ${ward.reservedBeds}</p>
            <button onclick="showBedAllocation(${ward.id})">View Beds</button>
        `;
        wardList.appendChild(wardDiv);
    });
}

// Function to Search Ward
function searchWard() {
    const searchText = document.getElementById("search-ward").value.toLowerCase();
    document.querySelectorAll(".ward-card").forEach(ward => {
        const wardName = ward.querySelector("h3").innerText.toLowerCase();
        ward.style.display = wardName.includes(searchText) ? "block" : "none";
    });
}

// Function to Filter by Type
function filterWard() {
    const filterType = document.getElementById("filter-type").value;
    document.querySelectorAll(".ward-card").forEach(ward => {
        const wardType = ward.querySelector("p:nth-child(2)").innerText.split(": ")[1];
        ward.style.display = (filterType === "all" || wardType === filterType) ? "block" : "none";
    });
}

// Function to Show Bed Allocation
function showBedAllocation(wardId) {
    const selectedWard = wards.find(ward => ward.id === wardId);
    document.getElementById("selected-ward-name").innerText = selectedWard.name;
    document.getElementById("bed-allocation-section").classList.remove("hidden");

    // Generate Bed Status
    const bedGrid = document.getElementById("bed-grid");
    bedGrid.innerHTML = "";
    for (let i = 1; i <= selectedWard.totalBeds; i++) {
        let statusClass = "available";
        if (i <= selectedWard.occupiedBeds) statusClass = "occupied";
        else if (i > selectedWard.occupiedBeds && i <= (selectedWard.occupiedBeds + selectedWard.reservedBeds)) statusClass = "reserved";

        const bedDiv = document.createElement("div");
        bedDiv.classList.add("bed", statusClass);
        bedDiv.innerText = `Bed ${i}`;
        bedDiv.onclick = () => toggleBedStatus(bedDiv);
        bedGrid.appendChild(bedDiv);
    }
}

// Function to Toggle Bed Status
function toggleBedStatus(bedDiv) {
    if (bedDiv.classList.contains("available")) {
        bedDiv.classList.remove("available");
        bedDiv.classList.add("occupied");
    } else if (bedDiv.classList.contains("occupied")) {
        bedDiv.classList.remove("occupied");
        bedDiv.classList.add("reserved");
    } else {
        bedDiv.classList.remove("reserved");
        bedDiv.classList.add("available");
    }
}

// Load Wards on Page Load
document.addEventListener("DOMContentLoaded", loadWards);
