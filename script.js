// TODO: add code here
window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            let container = document.getElementById('container');
            json.forEach(element => {
                container.innerHTML += `
                    <div class=astronaut>
                        <div class=bio>
                            <h3>${element.firstName} ${element.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${element.hoursInSpace}</li>
                                <li>Active: ${element.active}</li>
                                <li>Skills: ${element.skills}</li>
                            </ul>
                        </div>
                        <img class=avatar src=${element.picture}>
                    </div>
                `;
            })
        });
    });
});