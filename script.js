// TODO: add code here
window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            console.log(json);
        });
    });
});