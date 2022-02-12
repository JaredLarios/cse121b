const notebook = {
    addTask: () => {
        const list = document.querySelector('.list-tasks')
        const input = document.querySelector('input')
        let taks = input.value;
        input.value = '';
        
        if (taks != '') {
            const liTask = document.createElement('li');
            const liText = document.createElement('span');
            const liBtn = document.createElement('button');
            const starBtn = document.createElement('button');
            const newDiv = document.createElement('div');

            liTask.appendChild(liText);
            liText.textContent = taks;
            liTask.appendChild(newDiv);
            newDiv.appendChild(starBtn);
            starBtn.textContent = 'Done';
            newDiv.appendChild(liBtn);
            liBtn.textContent = 'Delete';
            list.appendChild(liTask);

            liBtn.addEventListener('click', () => {
                list.removeChild(liTask)
            })
            starBtn.addEventListener('click', () => {
                liTask.classList.toggle("done-state")
            })
        }
        input.focus();
    }
}
export default notebook;
