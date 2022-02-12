const inforCard = {
    getInfo: (e) => {
        const section = document.getElementById('info')

        section.innerHTML = `   
                                <div class="title">
                                    <h3>Personal Info</h3>
                                </div>
                                <p class="info-detail">Name: <span>${e.lastname}, ${e.name}</span></p>
                                <p class="info-detail">e-mail: <span>${e.user}@mytasks.edu</span></p>                         
                                `
    },
    getCourses: (e) => {
        const sectionCourse = document.querySelector('.courses1')

        sectionCourse.innerHTML = `   
                                <div class="title">
                                    <h3>My Courses</h3>
                                </div>                        
                                `
        e.courses.map(e => {
            sectionCourse.innerHTML += `<p class="info-detail"><span>${e.course}: ${e.grade}</span></p>`
        });
    }
}

export default inforCard