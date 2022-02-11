// script.js

import utl from "./shorters.js";

//const url = 'https://run.mocky.io/v3/1b90c491-348b-4bf1-9a2e-10b4a8ae6d32';
const url = 'https://run.mocky.io/v3/1193e99b-6cf3-494b-ab52-1385d5c1a15a'

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

/*

{
    "users":
      [
        {
          "user":"jed98",
          "pw":"admin",
          "name":"Jared",
          "lastname":"Larios",
          "photo": "https://jaredlarios.github.io/cse121b/images/photo3.png",
          "courses": [
              {
              "course": "WDD 320",
              "grade": "+A"
              },
              {
              "course": "CSE 121B",
              "grade": "+B"
              },
              {
              "course": "CSE 230",
              "grade": "-A"
              }
            ]
        },
        {
          "user":"sam11",
          "pw":"admin",
          "name":"Samuel",
          "lastname":"Moreira",
          "photo": "https://jaredlarios.github.io/cse121b/images/photo2.png",
          "courses": [
              {
              "course": "WDD 320",
              "grade": "+A"
              },
              {
              "course": "CSE 121B",
              "grade": "+B"
              },
              {
              "course": "CSE 230",
              "grade": "-A"
              }
            ]
        },
        {
          "user":"admin",
          "pw":"admin",
          "name":"Jose",
          "lastname":"Fernandez",
          "photo": "https://jaredlarios.github.io/cse121b/images/photo1.png",
          "courses": [
              {
              "course": "WDD 320",
              "grade": "+A"
              },
              {
              "course": "CSE 121B",
              "grade": "+B"
              },
              {
              "course": "CSE 230",
              "grade": "-A"
              }
            ]
        }
      ]
  }

*/