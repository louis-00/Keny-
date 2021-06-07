import {Task} from '../classes'
import { tareasList } from '../index'



//referemcias en html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnCompsHtml = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const filtros = document.querySelectorAll('filtro')

export const crearTareaHtml = (tarea) => {

    const htmlTarea = `
    <li class="${ (tarea.completado) ? 'completed' : '' }" data-id="${tarea.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(tarea.completado) ? 'checked' : ''}>
            <label>${tarea.descripcion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTarea;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

//Eventos

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        
        const nuevaTarea = new Task(txtInput.value);
        tareasList.nuevaTarea(nuevaTarea);

        crearTareaHtml(nuevaTarea);

        txtInput.value = '';
    }
})

divTodoList.addEventListener('click', (event) => {

    const nomElemento = event.target.localName;
    const tareaElemento = event.target.parentElement.parentElement;
    const tareaId = tareaElemento.getAttribute('data-id');

    if (nomElemento.includes('input')) {
        
        tareasList.checkTarea(tareaId);
        tareaElemento.classList.toggle('completed')
    
    }else if (nomElemento.includes('button')){

        tareasList.borrarTarea(tareaId);
        divTodoList.removeChild(tareaElemento);

    }

});

btnCompsHtml.addEventListener('click', () => {

    tareasList.eliminarCompletados();

    for( let i = divTodoList.children.length - 1; i >= 0; i--){

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }

});

ulFiltros-addEventListener('click', (event) => {

    const filtro = event.target.text;
    if(!filtro){return;};

    filtros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const element of divTodoList.children){

        element.classList.remove('hidden');
        const complete = element.classList.contains('completed');

        switch (filtro) {

            case 'Pendientes':
                if (complete) {

                    element.classList.add('hidden');
                }
                break;
        
            case 'Terminados':
                if (!complete) {

                    element.classList.add('hidden');
   
                }
                break;
        }

    }

})


