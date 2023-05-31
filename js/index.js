import { Conjunto } from "./Conjunto.js";

// Esta función se ejecuta una vez el HTML esté cargado al 100%
document.addEventListener('DOMContentLoaded', index()); 

let conjunto = new Conjunto();


//Función principal
function index () {
 
    let texto;
    
    //Lectura del archivo
    const fileSelector = document.querySelector('#file-selector');
    
    fileSelector.addEventListener('change', function (){
        const [file] = fileSelector.files;
        const reader = new FileReader();
    
        reader.addEventListener("load", () => {
            //Procesamiento del texto
            texto = reader.result;

            // Separa en filas todo el archivo
            const filas = texto.split(/\r?\n/);

            // De cada fila, tomar los dígitos separados por coma
            for (const fila of filas) {
                const datos = fila.split(/,/);
                
                let i = 0;
                let caracteristicas = new Array();
                let clase = '';

                for(let dato of datos){
                    if(dato != '') {
                        
                        if(!isNaN(dato))
                            dato = Number(dato);

                        //Guarda los primeros 4 datos en el campo de características
                        if(i<=3)
                            caracteristicas.push(dato);
                        else 
                            clase = dato;
                        i++;                      
                    }                    
                }

                conjunto.agregar(caracteristicas, clase);
            }
            
            console.log(conjunto);
            
        }, false);

        if (file) {
            reader.readAsText(file);
        }    
    });
    
}
