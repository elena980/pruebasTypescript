"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman }); // este {isBatman} es para que se lea la variable y el valor
    // isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
