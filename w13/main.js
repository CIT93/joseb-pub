const form = document.getElementById("launchForm")
const outputMessage = document.getElementById("outputMessage");

function showMessage(theMessage){
    const p = document.createElement("p");
    p.textContent = theMessage;
    outputMessage.appendChild(p);
}


function travelDuration(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrived = true;
            if (arrived) {
                showMessage("🌚 Arrived to the moon!!!");
                resolve();
            } else {
                reject("Could not reach the moon, returning...");
            }
        }, 4000);
    });   
    
}

function engineStart(){
    return new Promise((resolve, reject) => {
        showMessage("Engines starting...");
        setTimeout(() => {
            const engineSuccess = false;
            if (engineSuccess) {
                showMessage(`🚀 Lift-off! Have a safe journey, Commander! 🚀`);
                resolve();
            } else {
                reject("Engine Failure! Launch Aborted.");
            }
        }, 2000);
    });
}
    
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const astronautName = document.getElementById("astronautName").value;
    const missionCode = document.getElementById("missionCode").value;

    showMessage(`Welcome, Commander ${astronautName}. Mission Code ${missionCode} verified.`)

    try {
        await engineStart();
        await travelDuration();
    } catch (error){
        showMessage(`🚨 Mission Error: ${error}`)
    }   
    
});
