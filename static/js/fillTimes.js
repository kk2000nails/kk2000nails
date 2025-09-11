document.addEventListener('DOMContentLoaded', function() {
    const containerNames = ["mondayTimes", "tuesdayTimes", "wednesdayTimes", "thursdayTimes", "fridayTimes", "saturdayTimes"];
    for (let day = 0; day <= containerNames.length - 1; day++) {
        // i'll try to clean up the reset of the program here by using functions: i have technology!
        function makeP(text) {
            const p = document.createElement("p")
            p.textContent = text;
            p.classList.add("timeItem");
            return p;
        }

        const container = document.getElementById(containerNames[day]);
        console.log("Filling times for " + containerNames[day] + "...");
        
        const labelDiv = document.createElement("div");
        labelDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        labelDiv.classList.add("horizontalGrid");
        labelDiv.style.gridAutoColumns = "200px 200px 1fr 200px";
        labelDiv.style.paddingLeft = "5px";
        labelDiv.style.paddingRight = "5px";

        labelDiv.append(makeP("TIME")); // generate the time labels
        labelDiv.append(makeP("APPT SET?"));
        labelDiv.append(makeP("APPT NAME"));
        labelDiv.append(makeP("APPT TYPE"));

        container.append(labelDiv); // add the label to the top
        
        
        for (let i = 0; i <= 35; i++) { // 35 is the amount of time periods we have. 35 * 6 = 210, so we have 210 total time periods across 6 days

            const timeDiv = document.createElement("div"); // this is our wrapper
            timeDiv.style.backgroundColor = "hsl(44, 22%, " + (i / 2 + 60 + (i % 2 == 0 ? 10 : 0)) + "%)"; // make the wrapper colored fancy
            timeDiv.classList.add("horizontalGrid"); // make the wrapper arrange everything horizontally (i should really use this class with everything)
            timeDiv.style.gridAutoColumns = "200px 200px 1fr 200px";
            timeDiv.style.borderTop = "1px solid #000"
            timeDiv.style.paddingLeft = "5px";
            timeDiv.style.paddingRight = "5px";

             // this holds the time for me. i'll make this the first column. god i hope i stick to this
            const timeMinsNow = String((Math.floor((i + 2) % 4) * 15)).padStart(2, "0");
            const timeHoursNow = String(((Math.floor((i + 2) / 4 - 1) + 9) % 12 + 1)).padStart(2, "0");
            const timeMinsThen = String((Math.floor((i + 3) % 4) * 15)).padStart(2, "0");
            const timeHoursThen = String(((Math.floor((i + 3) / 4 - 1) + 9) % 12 + 1)).padStart(2, "0");
            timeDiv.append(makeP(timeHoursNow + ":" + timeMinsNow + " to " + timeHoursThen + ":" + timeMinsThen));

            // this shows the user whether an appointment is set up
            // dummy until i can find a cloud hosting service (supabase is a pain on linux)
            timeDiv.append(makeP("No appointment set.")); 

            // this shows the user who has the appointment set
            // dummy yet again
            timeDiv.append(makeP("N/A"));

            // this shows the user what type of appointment is set (ex. nails, idk what else they have there)
            // ditto
            timeDiv.append(makeP("N/A"));

            container.append(timeDiv); // write all changes
        }
    }
    console.log("Done!");
});