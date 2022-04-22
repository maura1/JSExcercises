let car = {
    name: 'vw',
    model: 'Touareg'
};

//Remove a property with object destructuring

const { name, ...carRest } = car;
console.log(carRest);
console.log(car);
