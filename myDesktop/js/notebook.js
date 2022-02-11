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

            liTask.appendChild(liText);
            liText.textContent = taks;
            liTask.appendChild(liBtn);
            liBtn.textContent = 'Delete';
            list.appendChild(liTask);

            liBtn.addEventListener('click', () => {
                list.removeChild(liTask)
            })
        }
        input.focus();
    }
}
export default notebook;
