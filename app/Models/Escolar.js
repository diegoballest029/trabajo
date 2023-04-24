import { Libro } from "./Libro.js";
export class Escolar extends Libro{
    constructor(categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, numeroPaginas, idioma, estado, codigo,asignatura,grado){
        super( categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, numeroPaginas, idioma, estado, codigo);
        this._asignatura = asignatura;
        this._grado = grado;

    }
    get asignatura(){
        return this._asignatura;
    }
    set asignatura(v_asignatura){
        this._asignatura = v_asignatura;
    }
    get grado(){
        return this._grado;
    }
    set grado(v_grado){
        this._grado = v_grado;
    }

        
}