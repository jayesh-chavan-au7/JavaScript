// objecet in javascript is collection key value pairs


// Object litral-------------------------------------------------------------------

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    draw : () => {
        console.log("draw");
    }
}

/* Problem with object litral is if we want to define another circle we have to rewrite it again, this will increse redandency in program*/


// Factories function----------------------------------------------------------------

function createCircle(radius) {
    return { 
        radius, // In ES6 if key and value have same name then we only write key name   
        location : {
            x : 1,
            y : 1
            },
        draw : () => {
            console.log("draw");
            }    
        }
    }

// for creting instance
const circleInstance = createCircle(1);
console.log(circleInstance);


// Constructor Functions------------------------------------------------------------

function Circle(radius) { // constructor name should always start with capital letter
    this.radius = radius; 
    this.location = {
        x : 1,
        y : 1
    }
    this.draw = () =>{
        console.log("draw");
    }
}

const constructorCircle = new Circle(1); // new keyword creates an empty object and then set 'this' keyword to point to that object
// 'this' keyword by default set to global object
console.log(constructorCircle);


// Constructor property
// Constructor property shows function that is used to create the object

console.log("factories Function",circleInstance.constructor); // return bulid in constructor function in javascript
console.log("Constructor Function",constructorCircle.constructor); //return a circle function that used to return the object
