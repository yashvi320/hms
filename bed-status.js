document.addEventListener("DOMContentLoaded", function () {
    const bedList = document.getElementById("bed-list");

    for (let i = 1; i <= 50; i++) {
        let bed = document.createElement("div");
        bed.classList.add("bed");
        bed.innerText = "Bed " + i;

        // Randomly assign status
        let status = Math.random() > 0.5 ? "occupied" : "available";
        bed.classList.add(status);

        bedList.appendChild(bed);
    }
});
