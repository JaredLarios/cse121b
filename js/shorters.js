// modules

const utl = {
    showStuff: (e) => { 
        return`<li>${e}</li> `
    },
    convertToJson: (res) => {
        if (res.ok) {
            return res.json();
        } else {
            console.log('error:', res)
        }
    },
    list: (eList, detail) => eList.map(e => e[detail])
    ,
    access: (usesrList, input, index, pass, uObj) => {
        for (let us of usesrList){
            index ++;
            console.log('Requested ',input);
            if (us == input && pass == uObj[index]['pw']){
                console.log('Acces Allowed');
                document.getElementById('users').innerHTML = `<li>welcome ${us}</li>`;
                passValues(us, index, pass);
            }
        }
        function passValues(user, index, upass){
            sessionStorage.setItem('userName', user);
            sessionStorage.setItem('userIndex', index);
            location.replace("myDesktop/desktop.html");
        };
    },
}

export default utl;
