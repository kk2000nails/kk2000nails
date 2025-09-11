document.addEventListener('DOMContentLoaded', function() {
    const containerNames = ["mondayTimes", "tuesdayTimes", "wednesdayTimes", "thursdayTimes", "fridayTimes", "saturdayTimes"];
    for (let day = 0; day <= containerNames.length - 1; day++) {
        const container = document.getElementById(containerNames[day]);
        console.log("Filling times for " + containerNames[day] + "...");
        
        const labelDiv = document.createElement("div");
        labelDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        labelDiv.classList.add("horizontalGrid");
        
        const labelTimeP = document.createElement("p");
        labelTimeP.textContent = "TIME";
        labelTimeP.classList.add("timeItem");
        labelDiv.append(labelTimeP);

        const labelApptBoolP = document.createElement("p");
        labelApptBoolP.textContent = "APPT SET?";
        labelApptBoolP.classList.add("timeItem");
        labelDiv.append(labelApptBoolP);
        
        const labelApptNameP = document.createElement("p");
        labelApptNameP.textContent = "APPT NAME";
        labelApptNameP.classList.add("timeItem");
        labelDiv.append(labelApptNameP);

        const labelApptTypeP = document.createElement("p");
        labelApptTypeP.textContent = "APPT TYPE";
        labelApptTypeP.classList.add("timeItem");
        labelDiv.append(labelApptTypeP);

        container.append(labelDiv);
        
        
        for (let i = 0; i <= 35; i++) { // 35 is the amount of hours

            const timeDiv = document.createElement("div"); // this is our wrapper
            timeDiv.style.backgroundColor = "hsl(" + ((20 * i) % 360) + ", 100%, 75%)"; // make the wrapper colored fancy
            timeDiv.classList.add("horizontalGrid"); // make the wrapper arrange everything horizontally (i should really make this work with everything)

            const timeP = document.createElement("p"); // this holds the time for me. i'll make this the first column. god i hope i stick to this
            timeP.textContent = ((Math.floor((i + 2) / 4 - 1) + 9) % 12 + 1) + ":" + (Math.floor((i + 2) % 4) * 15) + " to " + ((Math.floor((i + 3) / 4 - 1) + 9) % 12 + 1) + ":" + (Math.floor((i + 3) % 4) * 15);
            timeP.classList.add("timeItem");
            timeDiv.append(timeP);

            const apptBoolP = document.createElement("p"); // this shows the user whether an appointment is set up
            apptBoolP.textContent = "No appointment set"; // dummy until i can find a cloud hosting service (supabase is a pain on linux)
            apptBoolP.classList.add("timeItem");
            timeDiv.append(apptBoolP); 

            const apptNameP = document.createElement("p"); // this shows the user who has the appointment set
            apptNameP.textContent = "N/A" // dummy yet again
            apptNameP.classList.add("timeItem");
            timeDiv.append(apptNameP);

            const apptTypeP = document.createElement("p"); // this shows the user what type of appointment is set (ex. nails, idk what else they have there)
            apptTypeP.textContent = "N/A" // ditto
            apptTypeP.classList.add("timeItem");
            timeDiv.append(apptTypeP);

            container.append(timeDiv); // write all changes
        }
    }
    console.log("Done!");
});