const { EventEmitter } = require('events');

class Activity extends EventEmitter {}

const s = new Activity();

s.on('login', () => {
    console.log('Student logged Successfully');
});

s.on('assignment', () => {
    console.log('Assignment Submitted');
});

s.on('logout', () => {
    console.log('Student logged out');
});

s.on('exit', () => {
    console.log('Exiting application');
});

s.emit('login');
s.emit('assignment');
s.emit('logout');
s.emit('exit');