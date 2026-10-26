const { EventEmitter } = require('events');
class Element extends EventEmitter {addEventListener(event, handler){this.on(event, handler);}dispatchEvent(event, data){this.emit(event, data);}}
const button = new Element();
button.addEventListener('click', e=> console.log('Button clicked, data:', e));
button.dispatchEvent('click', {x:10, y:20});
