const form = document.getElementById("launchForm")
const outputMessage = document.getElementById("outputMessage");

function showMessage(theMessage){
    const p = document.createElement("p");
    p.textContent = theMessage;
    outputMessage.appendChild(p);
}

function travelDuration(){
    setTimeout(() => {
        showMessage("🌚 Arrived to the moon!!!");
    }, 4000);
}

function engineStart(callback){
    showMessage("Engines starting...");
    setTimeout(() => {
        showMessage(`🚀 Lift-off! Have a safe journey, Commander! 🚀`);
        callback();
    },2000)
}
form.addEventListener("submit", e => {
    e.preventDefault();
    const astronautName = document.getElementById("astronautName").value;
    const missionCode = document.getElementById("missionCode").value;

    showMessage(`Welcome, Commander ${astronautName}. Mission Code ${missionCode} verified.`)
    engineStart(() => travelDuration());
    
})
