console.log("Starting calculator app");

console.log("Before defining exports:");
console.log(module.exports); // module.exports is empty

// same as the one below, just shorthand method.
var shorthandversion = {
    description : "This is a calculator module",
    version: 1.0,
    lastupdate: "12 Mar 2021",
    add(a,b)  {
        return a+b;
    },

    subtract(a,b)  {
        return a-b;
    },

    multiply(a,b)  {
        return a*b;
    },

    divide(a,b)  {
        return a/b;
    }
}
module.exports = shorthandversion;

// we are going to define what calculator will do as a module e.g. its functions etc.
// module.exports = {

//     description : "This is a calculator module",
//     version: 1.0,
//     lastupdate: "12 Mar 2021",

//     add : function (a,b)  {
//         return a+b;
//     },

//     subtract : function (a,b)  {
//         return a-b;
//     },

//     multiply : function (a,b)  {
//         return a*b;
//     },

//     divide : function (a,b)  {
//         return a/b;
//     }
    
// }

// now module exports contain stuff
//console.log("After defining exports:");
//console.log(module.exports); // must add breakpoint (F9) to show contents after defining exports. using F10 to step over.



