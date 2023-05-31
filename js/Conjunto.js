export class Conjunto {

    muestras = new Array();
    numAtributos = 0;
    numFilas = 0;    

    // Guardda la información de cada atributo
    /*
        [
            0: {
                tipo: 'Cuantitativa',
                min: 5,
                max: 1,
                prom: 3
            }    
            ...
            5: {
                tipo: 'Cualitativa'
                cat: 'Iris x', 'Iris y'
            }        
        ]
    */
    infoAtributos = [];

    constructor(){

    }

    // Recibe un arreglo de n valores, y una cadena de clase
    agregar(caracteristicas = [], clase = '') {
        if(caracteristicas === [] || clase === '')
            return

        this.muestras.push({caracteristicas, clase});

        caracteristicas.forEach((value, index) => {
            if(index >= this.numAtributos ) 
                this.numAtributos++;

            // Creando información de atributos, en caso de que no estén creadas
            if(this.infoAtributos.length <= this.numAtributos){

                const info = {
                    tipo: ''
                }

                this.infoAtributos.push();
            }
        });

        this.numFilas = this.muestras.length;
    }
}