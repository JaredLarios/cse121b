const contacts = {
    clasmates: (e, myInfo) => {
        const directory = document.querySelector('.directory')
        directory.innerHTML = `<div class='title'>
                                    <h3>My Directory</h3>
                                </div>`

        e.map( individual => {
            if (individual !== myInfo){
                directory.innerHTML += `<div class='contact-card'>
                                            <p>Name: <span>${individual.name} ${individual.lastname}</span></p>
                                            <p>e-mail: <span>${individual.user}@mynotebook.edu</span></p>
                                        </div>`
            }
        });
    }
}
export default contacts