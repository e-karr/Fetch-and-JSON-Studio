// TODO: add code here
window.addEventListener('load', getData);


async function getData() {
    const container = document.getElementById('container');

    let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");

    let jsonData = await response.json();

    jsonData.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

    const count = document.querySelector("#count");

    count.innerHTML += `
        <h2>Astronaut Count: ${jsonData.length}</h2>
    `;

    jsonData.forEach(element => {
        container.innerHTML += `
            <div class=astronaut>
                <div class=bio>
                    <h3>🚀${element.firstName} ${element.lastName}</h3>
                    <hr>
                    <ul>
                        <li><strong>Hours in space</strong>: ${element.hoursInSpace}</li>
                        <li><strong>Active</strong>: ${element.active}</li>
                        <li><strong>Skills</strong>: ${element.skills.join(`, `)}</li>
                    </ul>
                </div>
                <img class=avatar src=${element.picture}>
            </div>
        `;
    });

    let active = document.querySelectorAll(".bio>ul>li:nth-child(2)");

    active.forEach(index => {
        if (index.textContent.includes('true')) {
            index.style.color = "lime";
        }
    });
}


// fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//         response.json().then(function(json){
//             let container = document.getElementById('container');
//             json.sort(function(a, b) {
//                 return b.hoursInSpace - a.hoursInSpace;
//             });
//             json.forEach(element => {
//                 container.innerHTML += `
//                     <div class=astronaut>
//                         <div class=bio>
//                             <h3>${element.firstName} ${element.lastName}</h3>
//                             <ul>
//                                 <li>Hours in space: ${element.hoursInSpace}</li>
//                                 <li>Active: ${element.active}</li>
//                                 <li>Skills: ${element.skills.join(`, `)}</li>
//                             </ul>
//                         </div>
//                         <img class=avatar src=${element.picture}>
//                     </div>
//                 `;
//             });
            
//             let active = document.querySelectorAll(".bio>ul>li:nth-child(2)");
//             active.forEach(index => {
//                 if (index.textContent === 'Active: true') {
//                     index.style.color = "green";
//                 }
//             });
            

//             container.innerHTML += `
//                 <p>Astronaut Count: ${json.length}</p>
//             `;
//         });
//     });