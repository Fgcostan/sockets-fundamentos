const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar mensaje
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //envia a todos los clientes conectados

        /*
        
        if (mensaje.usuario) {
            callback({
                resp: 'Todo OK'
            });
        } else {
            callback({
                resp: 'Algo salio mal'
            });
        }
        */
    });

});