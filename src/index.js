import './styles.css';
import { Task, TareasList} from './classes'
import { crearTareaHtml } from './js/compononte';


export const tareasList = new TareasList();

tareasList.tareas.forEach(tarea => crearTareaHtml(tarea));








