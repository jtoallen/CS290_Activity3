// // Activity 1: JS Functions
// //Hoisting works in this case:
// console.log(sum(10, 5)); //this is an example of function hoisting. fn called
// //before it's defined.
// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(20, 3)); //this shows sum fn can be called after it's defined

// //When hoisting does not work:
// var rectangle1 = rectangelArea(10, 9); //this example shows hoisting doesn't work 
// // when a function is assigned to a var and then called before fn declaration
// console.log(rectange1);
// function rectangelArea(length, width) {
//     return length * width;
// }


// // Activity 2 Environments
// console.log("Jason")
// console.log("Lets make sure JavaScript is working.");
// var name = "Jason"; //Replace this with your first name
// console.log("The unicode characters of your name are:")
// for (var i = 0; i < name.length; i++) {
//     console.log(name.charCodeAt(i));
// }
// console.log("Copy and paste these values for activity credit.")


//Activity 3: Javascript Objects

//This function was written with the help of this website: 
// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/.
//I used the help of this website in the following way. 
//My function implementation is original. On line #72 I gained clarity from Dimtri. 
//What I learned from Dmitri--my program was using a recursive call to deepEqual
//to step into the first nested object.  However, after my program stepped into
//the first object that it encountered I compared the primitive types within the object.
//My program did not continue to step into subsequent objects. 
//By changing the placement of the recursive call to earlier in the program 
//line 72:  if (stillObjects && !deepEqual(firstVals, secondVals)
//then I was able to keep calling the deepEqual function until all objects
//were extracted from the original parameters that were passed to deepEqual. 
//The line immediately preceding the recursion, line 71:           
//const stillObjects = isObject(firstVals) && isObject(secondVals) helps determine
//whether or not a recursive call is executed on the next line, line 72.
//My original recursive call was after the conditional on lines 72-73.  

function deepEqual(obj1, obj2) {
    //this function compares JS object literals a& JS primitive types. 
    //if the parameters passed are primitive types a strict comparison checks for
    //equality. first if statement is by-passed. 
    // However, if objects are passed, the function uses recursion to
    //compare values within the objects until a primitive type is reached. 
    //Then primitive types are strictly compared when object values are extracted.

    if ((typeof (obj1) == "object" && obj1 !== null) && (typeof (obj2) == "object" && obj2 !== null)) {
        let firstKeys = Object.keys(obj1);
        let secondKeys = Object.keys(obj2);
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            // console.log("the keys are not same length");
            return false;
        }
        for (let key of firstKeys) {
            //keep using key of the first object
            // to find same key in second object
            //because if key absent in second object then objects
            //  cannot be equivalent
            const firstVals = obj1[key];
            const secondVals = obj2[key];
            const stillObjects = isObject(firstVals) && isObject(secondVals);
            if (stillObjects && !deepEqual(firstVals, secondVals) ||
                !stillObjects && firstVals !== secondVals) {
                return false;
            }
        }
        return true;
    }
    return obj1 === obj2; //strict comparison for primitive types 
}

function isObject(object) {
    //helper function of deepEqual. used for recursive call of deepEqual
    //checks if a value of a key-value pair is an object and object not null.  
    return object != null && typeof object === 'object';
}

let obj1 = { she: { is: "an" }, him: 2, we: { they: 4 } };
let obj3 = { she: { is: "an" }, him: 2, we: { they: 3 } };
// console.log(deepEqual(obj1, obj3)); //false
let obj2 = obj1;
let obj4 = { a: 1, b: 2, c: 3, d: 4 };
let obj5 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj6 = { she: { is: "an" }, him: 2, };
let obj7 = { she: { is: "an" }, him: 2, };
x = 42;
y = x;
let nunVariable = null;
let arr1 = ["name", 1, ["jason", "cs290"], true];
let arr2 = ["name", 1, ["jason", "cs290"], false];

console.log(deepEqual(obj1, obj3)); //false
console.log(deepEqual(null, null)); //true
console.log(deepEqual(nunVariable, 0)); //false
console.log(deepEqual(0, null)); //false
console.log(deepEqual(null, null)); //true
console.log(deepEqual(nunVariable, null)); //true
console.log(deepEqual(1, 2)); //false
console.log(deepEqual(x, y)); //true
console.log(deepEqual(obj1, obj2)); //true
console.log(deepEqual(obj1, { she: { is: "an" }, him: 2, we: { they: 4 } })); //true
console.log(deepEqual(obj1, obj3)); //false
console.log(deepEqual(obj4, obj5)); //false
console.log(deepEqual(arr1, arr2)); //false
