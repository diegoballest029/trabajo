import { Categorias } from "../bd/categorias.js";
import { Editorial } from "../bd/editoriales.js";
import { Idioma } from "../bd/idioma.js";
class GestorLibros extends HTMLElement{
   constructor(){
    super();
    this.render();
    this.fillCategorySelect();
   }
   render(){
      this.innerHTML=/*html*/`
      <div class="card">
      <div class="card-header">
      Libros <span class="badge bg-secondary" id="codEquipo"></span>
      </div>
      <div class="card-body">
      <form id = "frmData">
          <div class="row g-3">
              <div class="col-3">
                  <label for="isbn" class="form-label">Isbn</label>
                  <input type="text" class="form-control" id="isbn">
              </div>
          <div class="col-4">
              <label for="nombreLibro" class="form-label">Nombre Libro</label>
              <input type="text" class="form-control" id="nombreLibro">
          </div>
          <div class="col-2">
              <label for="fechaPu" class="form-label">Fecha de Publicacion</label>
              <input type="date" class="form-control" id="fechaPu"> 
          </div>
          <div class="col-3">
              <label for="autor" class="form-label">Autor</label>
              <input type="text" class="form-control" id="autor">                  
          </div>
          </div>
          <div class="row g-3">
          <div class="col-4">
              <label for="editorial" class="form-label">Editorial</label>
              <select class="form-select" id="editorial">
                  <option selected>Seleccione una editorial</option>
                  </select>
          </div>
          <div class="col-4">
              <label for="numeroPaginas" class="form-label">Numero de paginas</label>
              <input type="number" class="form-control" id="numeroPaginas">                  
          </div>
          </div>
          <div class="row g-3">
              <div class="col-4">
                  <label for="categoria" class="form-label">Categoria</label>
                  <select class="form-select" id="categoria">
                  <option selected>Seleccione una categoria</option>

                  </select>
              </div>
              <div class="col-4">
                  <label for="presentacion" class="form-label">Presentacion</label>
                  <select class="form-select" id="presentacion">
                  <option selected>Seleccione una presentacion</option>
                  </select>
              </div>
              <div class="col-4">
                  <label for="idioma" class="form-label">Idioma</label>
                  <select class="form-select" id="idioma">
                  <option selected>Seleccione el idioma deseado</option>

                  </select>
              </div>
          </div>
          <div class="row g-3">
              <div class="col-6">
                  <label for="codigo" class="form-label">Codigo</label>
                  <input type="text" class="form-control" id="codigo"> 
              </div>
              <div class="col-4">
                  <label for="disponibilidad" class="form-label">Disponibilidad</label>
                  <input type="text" class="form-control" id="disponibilidad"> 
              </div>
              
              <div class="col-4">
                  <label for="precio" class="form-label">Precio</label>
                  <input type="number" class="form-control" id="precio"> 
              </div>
              <div class="col-4">
                  <label for="sizeLibros" class="form-label">Tamaño</label>
                  <input type="text" class="form-control" id="sizeLibros"> 
              </div>
              <div class="col-4">
                  <label for="edicion" class="form-label">Edicion</label>
                  <input type="text" class="form-control" id="edicion"> 
              </div>
              
          </div>
          <div class="row g-3">
              <div class="col-12">
                  <label for="detalle" class="form-label">Detalle</label>
                  <textarea class="form-control" id="detalle" rows="3"></textarea>
              </div>
  
              
          </div>
      </form>              
      <a href="#" class="btn btn-primary" id="guardarData">Guardar datos</a>
      </div>
  </div> 
      `
   }

   clearSelect(v_Select){
      const selectData = document.querySelector(v_Select) ;
      const options = selectData.querySelectorAll('option');
      options.forEach(element =>{
          selectData.removeChild(element);
      })
  }

   fillCategorySelect(){
      this.clearSelect('#categoria');
      const selectData = document.querySelector('#categoria') ;
      const itemStart = document.createElement('option');
      itemStart.innerHTML = 'Seleccione una categoria';
      itemStart.selected;
      selectData.appendChild(itemStart);
  
      Categorias.forEach(data =>{
          let dataItem =JSON.parse(JSON.stringify(data));
          const item = document.createElement('option');
          item.value = dataItem.id;
          item.innerHTML = dataItem.categoria;
          selectData.appendChild(item);
      })
  }
}
customElements.define('gestor-libros',GestorLibros);


