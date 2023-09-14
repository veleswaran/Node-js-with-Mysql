const EventEmitter= require('events');
const celebrity = new EventEmitter();

// Subcribe observer 1
celebrity .on ('race',function(result){
    if(result === 'win'){
        console.log("Congratulations! You are the best!");
    }
});

celebrity .on ('race',function(result){
    if(result === 'win'){
        console.log("Boo I could have better than that!");
    }
});

process.on('exit',function(code){
    console.log('Process exit event with code:',code);
})

celebrity.emit('race','win');
celebrity.emit('race win');