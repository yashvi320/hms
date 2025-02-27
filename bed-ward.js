document.addEventListener("DOMContentLoaded", function () {
    // Chart.js Bed Occupancy Graph
    let ctx = document.getElementById('bedChart').getContext('2d');
    let bedChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Available", "Occupied", "Reserved"],
            datasets: [{
                label: "Bed Occupancy",
                data: [200, 250, 50],
                backgroundColor: ["#2ECC71", "#E74C3C", "#F1C40F"],
            }]
        }
    });

    // Sidebar Active State
    let sidebarItems = document.querySelectorAll(".sidebar ul li");
    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            sidebarItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });

    // Generate Beds with Status
    const bedGrid = document.getElementById("bed-grid");
    const totalBeds = 100; // Example: 100 beds
    const statuses = ["available", "occupied", "reserved"];

    for (let i = 1; i <= totalBeds; i++) {
        let bed = document.createElement("div");
        let status = statuses[Math.floor(Math.random() * statuses.length)]; // Assign Random Status
        bed.className = `bed ${status}`;
        bed.innerText = `B${i}`;
        bed.addEventListener("click", function () {
            changeBedStatus(bed);
        });
        bedGrid.appendChild(bed);
    }

    // Function to Change Bed Status on Click
    function changeBedStatus(bed) {
        const currentStatus = bed.classList[1]; // Get Current Status
        let newStatus;

        if (currentStatus === "available") newStatus = "occupied";
        else if (currentStatus === "occupied") newStatus = "reserved";
        else newStatus = "available";

        bed.className = `bed ${newStatus}`;
    }

    // Real-time Bed Update Simulation
    function updateBedStatus() {
        document.getElementById("total-beds").innerText = totalBeds;
        document.getElementById("available-beds").innerText = document.querySelectorAll(".available").length;
        document.getElementById("occupied-beds").innerText = document.querySelectorAll(".occupied").length;
        document.getElementById("reserved-beds").innerText = document.querySelectorAll(".reserved").length;
    }

    setInterval(updateBedStatus, 3000); // Update every 3 seconds
});
