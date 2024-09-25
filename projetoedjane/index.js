let tarefas = [];
let inputCaixaTarefa = document.getElementById('inputbox');
let btnAdicionar = document.getElementById('Adicionar_tarefa');
let listatarefas = document.getElementById('Lista_tarefas');

btnAdicionar.onclick = () => {
    let Caixatarefa = inputCaixaTarefa.value.trim();

    if (Caixatarefa) {
        tarefas.push(Caixatarefa);
        atualizarlista();
    }
};

function atualizarlista() {
    tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        li.textContent = tarefa;
        li.appendChild(btnRemover(index));
        listatarefas.appendChild(li);
    });
}

function btnRemover(index) {
    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.onclick = () => {
        tarefas.splice(index, 1);
        atualizarlista();
    };
    return botaoExcluir;
}
