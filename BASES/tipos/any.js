"use strict";
(() => {
    let avenger = 123;
    let exists = 1234;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0)); // no tendriamos la ayuda para sus métodos
    // podemos castear los tipos
    console.log(avenger.charAt(1)); // en este caso tendríamos la apyda para sus métodos
    console.log(avenger.charAt(2)); //  otro tipo de casteo
    avenger = 150.23246425;
    console.log(avenger.toFixed(2));
    /* exists = 'La masa';
    console.log(exists.charAt(1)); */
    console.log(power);
})();
