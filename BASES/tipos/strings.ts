(() => {

    // se puede usar una comilla ' o comilla doble "" 
    // en el caso de la comilla simple no se puede meter otra comilla simple porque se cortaría el string
    // pero si se usase un slash podría ser igualmente 'Bat\' man '
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Héroe: Volcan Negro`;


    console.log(`I'm ${batman}`);  // ${} esto es la interpolación de String 

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase || 'No está presente')
}) ()