$(document).ready(function () {
  // Form submittion with new message in field with id 'm'
 /*Global io*/
 let socket =io();

 socket.on('user',  (data)=>{
   $('#num-users').text(data.currentUsers + ' user online');
   var message = data.name + (data.connected ? 'has joined the chat.': ' has left the chat');
   $('#messages').append($('<li>').html('<b>' + message + '</b>'));
   console.log(data);
 });
socket.on('chat message', (data)=>{
  console.log('socket.on 1');
  $('#messages').append($('<li>'.text(`${data.name}:${data.message}`)));
});
  $('form').submit(function () {
    var messageToSend = $('#m').val();
    socket.emit('chat message', messageToSend);
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
});
