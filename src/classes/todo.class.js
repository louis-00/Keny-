

export class Task{

    constructor(tarea){

        this.descripcion = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
}