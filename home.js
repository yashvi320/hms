document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
