document.addEventListener('DOMContentLoaded', function() {
    const containerNames = ["mondayTimes", "tuesdayTimes", "wednesdayTimes", "thursdayTimes", "fridayTimes", "saturdayTimes"];
    for (let day = 0; day <= containerNames.length - 1; day++) {
        const container = document.getElementById(containerNames[day]);

        console.log("Filling times for " + containerNames[day] + "...");

        for (let i = 0; i <= 35; i++) {
            const newP = document.createElement("p");
            newP.textContent = ((Math.floor((i + 2) / 4 - 1) + 9) % 12 + 1) + ":" + (Math.floor((i + 2) % 4) * 15) + " to " + ((Math.floor((i + 3) / 4 - 1) + 9) % 12 + 1) + ":" + (Math.floor((i + 3) % 4) * 15);
            newP.classList.add("timeItem");
            container.append(newP);
            newP.style.backgroundColor = "hsl(" + ((20 * i) % 360) + ", 60%, 75%)";
        }
    }
    console.log("Done!");
});