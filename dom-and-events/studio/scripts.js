// Write your JavaScript code here.
// Remember to pay attention to page loading!
console.log(window)

window.addEventListener("load", (e)=>{
    console.log("windows loaded")
});

function handleTakeOff(){
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", (e)=>{
      let flightConfirmation =  window.confirm("Confirm that the shuttle is ready for takeoff")
      if (flightConfirmation){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById('spaceShuttleHeight').innerHTML = "10,000"

      }
    })
}

function handleLandButton(){
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", (e)=>{
        let landingConfirmation = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (landingConfirmation){
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById('spaceShuttleHeight').innerHTML = "0"

        }
    })

}

function handAbortMissionButtun(){
    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", (e)=>{
        let abortConfirmation = window.confirm("Confirm that you want to abort the mission");
        if (abortConfirmation){
            document.getElementById("flightStatus").textContent = "Mission Aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById('spaceShuttleHeight').innerHTML = "0"
        }
    })
}



   
    function leftButton(){
        let leftButton = document.getElementById("left");
        leftButton.addEventListener("click",(e)=>{
            let rocket = document.getElementById("rocket");
          rocket.style.left = `${rocket.offsetLeft - 10}px`;
            // console.log(rocket.style.left)
        })
    }
    function rightButton(){
        let rightButton = document.getElementById("right");
        rightButton.addEventListener("click",(e)=>{
            let rocket = document.getElementById("rocket");
          rocket.style.left = `${rocket.offsetLeft + 10}px`;
            // console.log(rocket.style.left)
        })
    }

    function handleUpButton(){
        let upButton = document.getElementById("up");
        upButton.addEventListener("click",(e)=>{
            let rocket = document.getElementById("rocket");
          rocket.style.top = `${rocket.offsetTop - 10}px`;
            // console.log(rocket.style.left)
        })
    }

    function handleDownButton(){
        let downButton = document.getElementById("down");
        downButton.addEventListener("click",(e)=>{
            let rocket = document.getElementById("rocket");
          rocket.style.top = `${rocket.offsetLeft + 10}px`;
            // console.log(rocket.style.left)
        })
    }

   
   
   

