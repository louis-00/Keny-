

export class TareasList {

    constructor(){

        // this.tareas = [];
        this.cargarLocalStorage();
    }

    nuevaTarea(tarea){

        this.tareas.push(tarea);
        this.guardarLocalStorage();

    }

    borrarTarea(id){

        this.tareas = this.tareas.filter( tarea => tarea.id != id)
        this.guardarLocalStorage();
    }

    checkTarea(id){

        for( const tarea of this.tareas){

            if (tarea.id == id) {
                tarea.completado = !tarea.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        
        this.tareas = this.tareas.filter( tarea => !tarea.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('task', JSON.stringify(this.tareas));
    }

    cargarLocalStorage(){

        this.tareas = localStorage.getItem('task')
                         ? JSON.parse(localStorage.getItem('task')) 
                         :  [];
    }

}