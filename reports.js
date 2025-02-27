document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("reportChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Ward A", "Ward B", "Ward C"],
            datasets: [{
                label: "Occupied Beds",
                data: [30, 40, 35],
                backgroundColor: ["#007bff", "#28a745", "#dc3545"]
            }]
        }
    });
});
