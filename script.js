let input = document.querySelector('input').value;


document.querySelector('ul').addEventListener('click', (e)=>{
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('concluido')) {
            e.target.classList.remove('concluido');
        } else {
            e.target.classList.add('concluido');
        }
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
});


function addTarefa() {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = 'X';
    span.classList.add('remover');
    

    let input = document.querySelector('input').value;
    txt = document.createTextNode(input);
    li.appendChild(txt);
    li.appendChild(span);
    document.querySelector('ul').appendChild(li);
    document.querySelector('input').value = '';
}
function checkInput() {
    let input = document.querySelector('input').value;
    if (input == '') {
        alert('Preencha o título da tarefa!!')
    } else {
        addTarefa();
    }
}
