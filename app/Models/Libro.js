export class Libro{
    constructor(categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, numeroPaginas, idioma, estado, codigo)
    {
        this._categoria = categoria;
        this._isbn = isbn;
        this._autor = autor;
        this._titulo = titulo;
        this._editorial = editorial;
        this._edicion = edicion;
        this._precio = precio;
        this._tipoPresentacion = tipoPresentacion;
        this._cantidadEjemplares = cantidadEjemplares;
        this._sizeBook = sizeBook;
        this._detalle = detalle;
        this._numeroPaginas = numeroPaginas;
        this._idioma = idioma;
        this._estado = estado;
        this._codigo = codigo;
    }
    get categoria(){
        return this._categoria;
    }
    set categoria(v_categoria){
        this._categoria = v_categoria;
    }
    get isbn(){
        return this._isbn;
    }
    set isbn(v_isbn){
        this._isbn = v_isbn;
    }
    get autor(){
        return this._autor;
    }
    set autor(v_autor){
        this._autor = v_autor;
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(v_titulo){
        this._titulo = v_titulo;
    }
    get editorial(){
        return this._editorial;
    }
    set editorial(v_editorial){
        this._editorial = v_editorial;
    }
    get edicion(){
        return this._edicion;
    }
    set edicion(v_edicion){
        this._edicion = v_edicion;
    }
    get precio(){
        return this._precio;
    }
    set precio(v_precio){
        this._precio = v_precio;
    }
    get tipoPresentacion(){
        return this._tipoPresentacion;
    }
    set tipoPresentacion(v_tipoPresentacion){
        this._tipoPresentacion = v_tipoPresentacion;
    }
    get cantidadEjemplares(){
        return this._cantidadEjemplares;
    }
    set cantidadEjemplares(v_cantidadEjemplares){
        this._cantidadEjemplares = v_cantidadEjemplares;
    }
    get sizeBook(){
        return this._sizeBook;
    }
    set sizeBook(v_sizeBook){
        this._sizeBook = v_sizeBook;
    }
    get detalle(){
        return this._detalle;
    }
    set detalle(v_detalle){
        this._detalle = v_detalle;
    }
    get numeroPaginas(){
        return this._numeroPaginas;
    }
    set numeroPaginas(v_numeroPaginas){
        this._numeroPaginas = v_numeroPaginas;
    }
    get idioma(){
        return this._idioma;
    }
    set idioma(v_idioma){
        this._idioma = v_idioma;
    }
    get estado(){
        return this._estado;
    }
    set estado(v_estado){
        this._estado = v_estado;
    }
    get codigo(){
        return this._codigo;
    }
    set codigo(v_codigo){
        this._codigo = v_codigo;
    }
}