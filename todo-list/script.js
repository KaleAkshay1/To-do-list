const input = document.getElementById('input-task')
const content = document.querySelector('.content')
const addBtn = document.getElementById('add')
addBtn.addEventListener('click', addTask)
content.addEventListener('click',(ele)=>{
    if(ele.target.id === 'delet'){
        ele.target.parentElement.remove()
    }
    else if(ele.target.id === 'check-uncheck'){
        if(ele.target.src.includes('unchecked.png')){
            ele.target.src = 'checked.png'
            ele.target.nextElementSibling.style.textDecoration='line-through'
        }else{
            ele.target.src = 'unchecked.png'
            ele.target.nextElementSibling.style.textDecoration = 'none';
        }
    }
});
function addTask() {
    if (input.value !== '') {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task', 'flex')
        let img1 = document.createElement('img')
        img1.setAttribute('id', 'check-uncheck')
        img1.src = "unchecked.png"
        let img2 = document.createElement('img')
        img2.setAttribute('id', 'delet')
        img2.src = "delet.png"
        let p = document.createElement('p')
        p.innerText = input.value
        content.appendChild(taskDiv).append(img1, p, img2);
        input.value = ''
    }
}

