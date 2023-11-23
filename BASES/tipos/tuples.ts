(()=>{

    // asi de define una tupla, const hero: [string, number] 
    // para defienrenciarla de un array,  const number: (number|string|boolean) []
    // en las tuplas los tipos de  datos se definen dentro de las llaves
    const hero: [string, number, boolean] = ['Dr Strange', 100, true];

    // hero[0] = 50; te lo marca como error porque en la posición 0 siempre tiene que ser de tipo String

    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero)

})()