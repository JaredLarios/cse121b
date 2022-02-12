// desktop

import utl from "../../js/shorters.js";
import notebook from "./notebook.js";
import inforCard from "./info-card.js";

//const url = 'https://run.mocky.io/v3/1b90c491-348b-4bf1-9a2e-10b4a8ae6d32';
const url = 'https://run.mocky.io/v3/1193e99b-6cf3-494b-ab52-1385d5c1a15a'

function doStuff(e) {
    const element = e.users
    const userName = sessionStorage.getItem('userName');
    const enter = document.getElementById('enter')
    if (userName == null){
        location.replace("../index.html");
    }
    //let userAccess = element.map(data => data.user)
    let userAccess = utl.list(element, 'user')
    for (let userIndex in userAccess){
        if (userName == element[userIndex]['user']){
            const userInfo = element[userIndex]
            const showName = document.getElementById('user-name');
            showName.innerText = `${userInfo.name} ${userInfo.lastname}`;
            showInfo(userInfo);

            enter.addEventListener('click',notebook.addTask)
            inforCard.getInfo(userInfo);
            inforCard.getCourses(userInfo);
        }
    }
}

function showInfo (e) {
    const photo = document.getElementById('photo')

    photo.setAttribute('src', e.photo);
}

fetch(url).then(utl.convertToJson).then(doStuff)
