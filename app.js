
// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 05 - Function Expressions
//-------

// NAMED FUNCTION DEFINITION
function sayHi(){
    console.log("\n++++++++++++++++++");
    console.log("Aloha, from Maui!");
    console.log("++++++++++++++++++");
};
// invoke-run-call the function
sayHi();
//-------

// ANONYMOUS FUNCTION DEFINITION EXPRESSION
const sayBye = function(){
    console.log("\n•••••••••••••••••••");
    console.log("Good Bye, to You!");
    console.log("•••••••••••••••••••\n");
};
// invoke-run the function
sayBye();
//-------

// CALLBACK FUNCTION DEFINITION
// function param is callback function
// function runs callback function
// remember: param will b replaced w arg
function firstFunction(paramForCallbackFunction){
    paramForCallbackFunction();
};
// function expression definition of callback function here
var tellTheTruth = function(){
    var today = new Date();
    console.log(today);
    console.log("\n•••••••••••••••••••");
    global.console.log('MIKE IS THE BESTEST!');
    console.log("•••••••••••••••••••");
    console.log("\ncartoon face:");
    console.log("----------");
    console.log("--O---O---");
    console.log("----•-----");
    console.log("-+++++++--");
    console.log("----------\n");
};
// invoke-run-call the 1st function
// send the callback function as arg
firstFunction(tellTheTruth);
//-------