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

function deepEqual(obj1, obj2) {
    if ((typeof (obj1) == "object" && obj1 !== null) && (typeof (obj2) == "object" && obj2 !== null)) {
        let firstKeys = Object.keys(obj1);
        let secondKeys = Object.keys(obj2);
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            // console.log("the keys are not same length");
            return false;
        }
        for (let key of firstKeys) {
            // console.log("first keys are ", firstKeys);
            // console.log("second keys are ", secondKeys);
            const firstVals = obj1[key]; //this will use the key of the first object
            const secondVals = obj2[key]; //this will also use the key of the first object
            console.log(`current key = ${key}, value1 = ${firstVals}, value2 = ${secondVals}`);
            //the benefit of using just one set of keys to see if it exist in second object parameter
            let i = 0;
            if (typeof (firstVals) !== "object" && typeof (secondVals) !== "object" && firstVals !== secondVals) {
                console.log("first and second vals !equal")
                return false;
            }
            if (typeof (firstVals) == "object" && firstVals !== null &&
                (typeof (secondVals) == "object" && secondVals !== null)) {
                i++;
                console.log("making recursive call", i);
                return deepEqual(firstVals, secondVals);
            }
            // else if (firstVals !== secondVals) {
            //     return false;
            // }
            // return true; 
            // return false;
        }
        // return false;
        return true;
    }
    return obj1 === obj2;
}

// function deepEqual(object1, object2) {
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (const key of keys1) {
//         const val1 = object1[key];
//         const val2 = object2[key];
//         const areObjects = isObject(val1) && isObject(val2);
//         if (
//             areObjects && !deepEqual(val1, val2) ||
//             !areObjects && val1 !== val2
//         ) {
//             return false;
//         }
//     }

//     return true;
// }

// function isObject(object) {
//     return object != null && typeof object === 'object';
// }


let obj1 = { she: { is: "an" }, him: 2, we: { they: 4 } };
let obj2 = obj1;
let obj3 = { she: { is: "an" }, him: 2, we: { they: 3 } };
let obj4 = { a: 1, b: 2, c: 3, d: 4 };
let obj5 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj6 = { she: { is: "an" }, him: 2, };
let obj7 = { she: { is: "an" }, him: 2, };
x = 42;
y = x;
let nunVariable = null;
let arr1 = ["name", 1, ["jason", "cs290"], true];
let arr2 = ["name", 1, ["jason", "cs290"], false];

// console.log(deepEqual(obj1, obj3)); //false
// console.log(deepEqual(null, null)); //true
// console.log(deepEqual(nunVariable, 0)); //false
// // console.log(deepEqual(0, null)); //false
// console.log(deepEqual(null, null)); //true
// // console.log(deepEqual(nunVariable, null)); //true
// console.log(deepEqual(1, 2)); //false
// console.log(deepEqual(x, y)); //true
// console.log(deepEqual(obj1, obj2)); //true
// console.log(deepEqual(obj1, { she: { is: "an" }, him: 2, we: { they: 4 } })); //true
console.log(deepEqual(obj1, obj3)); //false
// console.log(deepEqual(obj4, obj5)); //false
// console.log(deepEqual(arr1, arr2)); //false
