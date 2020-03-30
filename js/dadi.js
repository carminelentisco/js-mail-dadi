// controllo inserimento JS

console.log('dadi.js è stato inserito correttamente.');

var userClick = document.getElementById('button');

userClick.addEventListener('click',
    function() {
        
       var randomNuberUser = Math.ceil( Math.random() * 6 );
       var randomNuberPc = Math.ceil( Math.random() * 6 );

       console.log('1: ' , randomNuberUser);
       console.log('2: ' , randomNuberPc);

       if (randomNuberUser > randomNuberPc) {
           console.log('La vittoria è dell\' utente');
       } else if ( randomNuberUser < randomNuberPc ) {
        console.log('La vittoria è dell\' pc');
       } else {
        console.log('Pari'); 
       }
    }
);





