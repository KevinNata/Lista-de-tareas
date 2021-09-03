
/* Asignacion de variables */
const actividad = document.getElementById ("activ");

const boton = document.getElementById ("boton");

const mensaje = document.getElementById ("mensaje");

const ul = document.getElementById("lista");

const li = document.createElement ("LI");
/* Asignacion de variables */



boton.addEventListener ('click', (e) => {
    e.preventDefault();

    const text = actividad.value;

    const p = document.createElement ("p");
    
    p.classList.add("pCreado")
      
    p.textContent = text;
       
    p.appendChild(borrarActividad());


    if (text!=""){            /* Se asegura de no poner ninguna actividad en blanco */
        li.appendChild(p); 
 
        ul.appendChild(li);  
       
        actividad.value ="";
    }  
       
    if(li.hasChildNodes()==true){   /* oculta el mensaje si la lista de tareas tiene alguna actividad  */
        mensaje.setAttribute("hidden", true);
    }
    
});


function borrarActividad(){    /* Crea y devuelve el boton de borrar */
 
    const botonBorrar = document.createElement ("button");
    botonBorrar.textContent = "X";
    botonBorrar.className = "borrador";
    
    botonBorrar.addEventListener('click', (e) =>  {
        const item = e.target.parentElement;    /* Se asocia al elemento padre  */
        li.removeChild(item);

        if(li.hasChildNodes()==false){
            mensaje.removeAttribute("hidden");
        }
    
        
    });
    return botonBorrar;
}






