
/*1 ALMACENAR INOF EN LOCAL STORA 5 megas trae el del id*/

function addLS(){
    nt = document.getElementById("nomtar").value;
    dt = document.getElementById("destar").value;
    et = document.getElementById("esttar").value;
    /*clave, valor */
    localStorage.setItem("nt-"+nt, nt);
    localStorage.setItem("dt-"+nt, dt);
    localStorage.setItem("et-"+nt, et);
}
/*4 consultar  primero recibola  consultado y despues muestra los otros   */
function conLS() {
    nt = document.getElementById("nomtar").value ;
/*con lal clave traigo los otros valores    */
    dt = localStorage.getItem( "dt-"+nt ) ;
    et = localStorage.getItem( "et-"+nt ) ;
/*muestro los valores  */
    document.getElementById("destar").value = dt ;
    document.getElementById("esttar").value = et ;
}
/*4 actualizar  */
 function modLS(){
  
    addLS();
 }    
/*PRIMERO CONSULTO Y LUEGO LA ELIMINO  */
 function eliLS(){
    nt=document.getElementById("nomtar").value;
    localStorage.removeItem("nt-"+nt);
    localStorage.removeItem("dt-"+nt);
    localStorage.removeItem("et-"+nt);
 }