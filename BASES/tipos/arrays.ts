(()=>{
    // typescript en los arreglos ya infiere el tipo
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];

    /* O asignar los tipos en el Array
    const number: (number|string|boolean) [] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; */

    /* numbers.push(true); da error porque no puede meter un valor boolean en un arreglo de tipo number o string */
    numbers.push(11);

    console.log(numbers);

    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

    villians.forEach(v=> console.log(v.toUpperCase()))

}) ()