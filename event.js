var events = require('events');
var eventEmitter=new events.EventEmitter();
var eventHandler = function(){
    console.log("I hear a voice");
}
eventEmitter.on('hear', eventHandler);
eventEmitter.emit('hear');