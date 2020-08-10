//api  api.lyrics.ovh/v1/  artista + cancion

export class Api{
    constructor(artista , cancion){
        this.artista = artista;
        this.cancion = cancion;       
    }

    //llamamos a la api
    async consultarDatos(){
        try {
            const datos = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
            const datosJSON = await datos.json();
     
            return{
                datosJSON
            }
        } catch (error) {
            return{
                error
            }
        }
       
    }
}