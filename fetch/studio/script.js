//TODO: Add Your Code Below
window.addEventListener('load', function(){
console.log("load");

let people = 

fetch("https://handlers.education.launchcode.org/static/astronauts.json")
.then(res=>res.json())
.then((res=>{
   const container = document.getElementById("container");
   
    res.forEach(data => {
        console.log(data)
        const astroDiv = document.createElement('div');
        astroDiv.classList.add('astronaut');
        astroDiv.innerHTML = `
        <h2>${data.firstName} ${data.lastName}</h2>
        <p>Hours in space: ${data.hoursInSpace}</p>
        <p>Active: ${data.active}</p>
        <img style="height: 250px" src="${data.picture}" alt="${data.firstName} ${data.lastName}">
    `;

    container.appendChild(astroDiv)
    })

}))
})