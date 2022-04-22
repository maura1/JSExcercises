//Create an object and iterate through it

let fruit = {
    bananas: 12,
    carrots: 3,
    mangos: 
};

//Iterate through Object.Key

let fruitKeys = Object.keys(fruit);
console.log(fruitKeys); //[ 'bananas', 'carrots', 'mangos' ]

//Itereate through Object Values
let fruitValues = Object.values(fruit);
console.log(fruitValues); //[ 12, 3, 8 ]

//Iterate using object enteries

let fruitEnteries = Object.entries(fruit);
console.log(fruitEnteries); /* [
                                             [ 'bananas', 12 ],
                                            [ 'carrots', 3 ],
                                            [ 'mangos', 8 ]
                                          ]*/

//Extracting key/value pairs

for (const [fruitKeys, fruitValues] of fruitEnteries) {
    console.log(`You need to buy ${fruitValues} of ${fruitKeys}`);
}
