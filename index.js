const io = require('socket.io')(3000);
const users = {};

io.on('connection', socket => {
    socket.on('new-user', name => {
        console.log("username:"+name);
      users[socket.id] = name;
      socket.broadcast.emit('user-connected', name)
    })

    socket.on('onMessage', message => {
        socket.broadcast.emit('recived', { message: message, name: users[socket.id] });
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('sender', users[socket.id]);
        delete users[socket.id];
    })
})
