"use strict";
(() => {
    var _a;
    // se puede usar una comilla ' o comilla doble "" 
    // en el caso de la comilla simple no se puede meter otra comilla simple porque se cortaría el string
    // pero si se usase un slash podría ser igualmente 'Bat\' man '
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`); // ${} esto es la interpolación de String 
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'No está presente');
})();
