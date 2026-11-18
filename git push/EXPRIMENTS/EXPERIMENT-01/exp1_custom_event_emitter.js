const { EventEmitter } = require('events');
class Greeter extends EventEmitter {constructor(name){super();this.name=name;}sayHello(){this.emit('greet',`Hello, ${this.name}!`);}sayGoodbye(){this.emit('exit',`${this.name} is leaving.`);}}
const greeter = new Greeter('Alice');
greeter.on('greet',msg=>console.log('[GREET]',msg));
greeter.on('exit',msg=>console.log('[EXIT]',msg));
greeter.sayHello();
greeter.sayGoodbye();
