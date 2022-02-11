// desktop

import utl from "../../js/shorters.js";

const url = 'https://run.mocky.io/v3/1b90c491-348b-4bf1-9a2e-10b4a8ae6d32';

function doStuff(e) {
    const element = e.users
    const userName = sessionStorage.getItem('userName');
    if (userName == null){
        location.replace("../index.html");
    }
    //let userAccess = element.map(data => data.user)
    let userAccess = utl.list(element, 'user')
    for (let userIndex in userAccess){
        if (userName == element[userIndex]['user']){
            const showName = document.getElementById('user-name');
            showName.innerText = element[userIndex]['name'];
        }
    }
}

fetch(url).then(utl.convertToJson).then(doStuff)
