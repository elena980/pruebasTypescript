(() => {

    let avengers: number = 10;

    console.log(avengers)

    const villians: number = 20;

    if( avengers < villians ) {
        console.log('Estamos en problemas')
    } else {
        console.log('Nos salvamos')
    }

    // avengers = 123;
    avengers = Number('55A') // la función Number() es para pasar un dato a tipo number
    console.log({avengers})
})()