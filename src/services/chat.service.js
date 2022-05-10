class SocketServices{

    //connection socket
    connection( socket ){
        socket.on('disconnect', () => {
            console.log(`User disconnect id is ${socket.id}`);
        })

        // event on here

        socket.on('chat message', msg => {
            console.log(`msg is:::${msg}`)
            _io.emit('chat message', msg)
        })

        // on room..
    }
}

module.exports = new SocketServices();