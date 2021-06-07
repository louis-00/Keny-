(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d({},{T:()=>v});var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var r,a,o;return r=e,(a=[{key:"nuevaTarea",value:function(e){this.tareas.push(e),this.guardarLocalStorage()}},{key:"borrarTarea",value:function(e){this.tareas=this.tareas.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"checkTarea",value:function(e){var r,n=t(this.tareas);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(a.id==e){a.completado=!a.completado,this.guardarLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.tareas=this.tareas.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("task",JSON.stringify(this.tareas))}},{key:"cargarLocalStorage",value:function(){this.tareas=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]}}])&&n(r.prototype,a),o&&n(r,o),e}();var o=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.descripcion=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date};function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),d=(document.querySelector(".filters"),document.querySelectorAll("filtro")),f=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n            <label>").concat(e.descripcion,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),r=document.createElement("div");return r.innerHTML=t,l.append(r.firstElementChild),r.firstElementChild};u.addEventListener("keyup",(function(e){if(13===e.keyCode&&u.value.length>0){var t=new o(u.value);v.nuevaTarea(t),f(t),u.value=""}})),l.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,n=r.getAttribute("data-id");t.includes("input")?(v.checkTarea(n),r.classList.toggle("completed")):t.includes("button")&&(v.borrarTarea(n),l.removeChild(r))})),s.addEventListener("click",(function(){v.eliminarCompletados();for(var e=l.children.length-1;e>=0;e--){var t=l.children[e];t.classList.contains("completed")&&l.removeChild(t)}})),addEventListener("click",(function(e){var t=e.target.text;if(t){d.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var r,n=i(l.children);try{for(n.s();!(r=n.n()).done;){var a=r.value;a.classList.remove("hidden");var o=a.classList.contains("completed");switch(t){case"Pendientes":o&&a.classList.add("hidden");break;case"Terminados":o||a.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}}));var v=new a;v.tareas.forEach((function(e){return f(e)}))})();