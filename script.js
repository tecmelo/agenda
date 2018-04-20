$(document).ready(function(){
    $("#form1").submit(guardarDatos);
    $("#datos").on('pagebeforeshow',cargarDatos);
    $("#main").on('pagebeforeshow',inicializar);
    cargarDatos();
    inicializar();
});


function cargarDatos(){
  $('#username').val(localStorage.nombre);
    $('#email').val(localStorage.correo);
    $('#comentarios').val(localStorage.cometarios);
}

function inicializar(){
    $('#h1').text("Agenda de "+localStorage.nombre);
    console.log(localStorage.nombre)
}

function guardarDatos(){
    var len = $("#comentarios").val().length;
    if (len<10||len>100) {
      $("#errmsg").text("Longitud del Comentario 10-100 caracteres").show().fadeOut(5000);
    return false
  }else {
    localStorage.nombre= $('#username').val();
    localStorage.correo= $('#correo').val();
    localStorage.comentarios= $('#comentarios').val();
    event.preventDefault();
    return true;
  }
}
