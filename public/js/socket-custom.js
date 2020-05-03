var socket = io();

// on escucha eventos
socket.on('connect', function() {

    console.log('conectado al server');

});

socket.on('disconnect', function() {

    console.log('desconectador del server');

});

//emit envia info
socket.emit('enviarMensaje', {
    usuario: 'Francisco',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});


//escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});