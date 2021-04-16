const socket = io();

setTimeout(() => {
    console.log(socket.id);
}, 500)


$('#chat').hide();

$('#send-btn').click(() => {
    socket.emit('send-msg', {
        msg:$('#inp').val()
    })
    $('#inp').val("");
})

socket.on('received-msg', (data) => {
    $('.talktext').append(`<div><p>${data.name} : ${data.msg}</p></div>`).addClass('talktext');
})

$('#login-btn').click(() => {
    socket.emit('login', {
        name:$('#login-inp').val()
    })

    $('#login').hide();
    $('#chat').show();

})