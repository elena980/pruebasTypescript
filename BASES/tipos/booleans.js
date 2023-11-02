"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman }); // este {isBatman} es para que se lea el valor y el tipo de la variable
    // isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
