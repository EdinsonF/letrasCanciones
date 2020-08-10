//importamos la interfaz a traves de modulos
import * as UI from './interfaz.js';
import {Api} from './api.js';

//cremos el evento a la accion de usurio
UI.formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //obtenemos las variables
    const artista = document.querySelector("#artista"),
          cancion = document.querySelector("#cancion");

          //vadimanos si los campos estan vacios
          if(artista.value === '' || cancion.value === ''){
            mensajes('Error! Campos vacios', 'error');
            //limpiamos
            artista.value = '';
            cancion.value = '';
          }else{
              //llamar a la api
              //const API = new API(artista.value, cancion.value);
            const API =new Api(artista.value, cancion.value);
             API.consultarDatos()
             .then(resultado => {
                 if(resultado.datosJSON.lyrics){
                     //mostramos el restltado en la interfaz
                    UI.divResultado.innerHTML = `${resultado.datosJSON.lyrics}`;
                 }else{
                     //mensaje de error
                     console.log("error");
                    mensajes('No se encontraron resultaos', 'error');
                 }
                
               
             });

            
          }
});

function mensajes(mensaje, clase){

        UI.divMensaje.innerHTML = mensaje;
        UI.divMensaje.classList.add(clase);
            //quitamos el mensaje despues de 2 segundos
            setTimeout(() => {
                UI.divMensaje.innerHTML = '';
                UI.divMensaje.classList.remove('error');
                
            },2000);

}