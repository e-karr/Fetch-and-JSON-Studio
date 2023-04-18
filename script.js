// TODO: add code here
window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            let container = document.getElementById('container');
            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            json.forEach(element => {
                let skills = element.skills.join(`, `);
                container.innerHTML += `
                    <div class=astronaut>
                        <div class=bio>
                            <h3>${element.firstName} ${element.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${element.hoursInSpace}</li>
                                <li>Active: ${element.active}</li>
                                <li>Skills: ${skills}</li>
                            </ul>
                        </div>
                        <img class=avatar src=${element.picture}>
                    </div>
                `;

                // if (element.active) {
                //     console.log(element.active);
                //     // let active = document.querySelector(".bio>ul>li:nth-child(2)");
                //     // active.style.color = "green";
                // }
            });

            container.innerHTML += `
                <p>Astronaut Count: ${json.length}</p>
            `;
        });
    });
});