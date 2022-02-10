// script.js

import utl from "./shorters.js";

const url = 'https://run.mocky.io/v3/1b90c491-348b-4bf1-9a2e-10b4a8ae6d32';

function doStuff (e) {
    // print list
    let users = e.users;
    const ulUsers = document.getElementById('users');
    users.map( data => ulUsers.innerHTML += utl.showStuff(data.user) );

    // users 
    const btn = document.querySelector('button')

    btn.addEventListener('click', ()=> {
        let userInput = document.getElementById('user-name').value
                                                              .toLowerCase()
                                                              .trim()
        let pwInput = document.getElementById('password').value

        //let use = users.map(data => data.user)
        let use = utl.list(users, 'user')
        let index = -1;
        utl.access(use, userInput, index, pwInput, users)
    })
}

fetch(url).then(utl.convertToJson).then(doStuff)
