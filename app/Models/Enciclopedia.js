import { Libro } from "./Libro.js";
 export class Enciclopedia extends Libro{
    constructor(categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, numeroPaginas, idioma, estado, codigo,areaConocimiento,volumen,nroTomos){
        super(categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, numeroPaginas, idioma, estado, codigo);
        this._areaConocimiento = areaConocimiento;
        this._volumen = volumen;
        this._nroTomos = nroTomos;

    }
    get areaConocimiento(){
        return this._areaConocimiento;
    }
    set areaConocimiento(v_areaConocimiento){
        this._areaConocimiento = v_areaConocimiento;
    }
    get volumen(){
        return this._volumen;
    }
    set volumen(v_volumen){
        this._volumen = v_volumen;
    }
    get nroTomos(){
        return this._nroTomos;
    }
    set nroTomos(v_nroTomos){
        this._nroTomos = v_nroTomos;
    }
 }
 
 

