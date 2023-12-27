/////

 //let variable understanding
   
   let  x=1;
if(x==1){
    let x=2;
    console.log(x);
}

console.log(x);


//example-ttemporial dead Zone
// {
//     console.log(bar);
//    // console.log(foo);

//     var bar=1;
//    let foo=2;
// }

{
    const func=()=>console.log(letvar);
    let letvar=3;
    func();

}

// {
//     let foo;
//     let foo;
// }

//deference btw let and var
function varTest(){
    var x=1;
    {
    var x=2;
    console.log(x)//same variable
    }
    console.log(x);
    
}

function letTest(){
    let x=1;{
     let x=2;
     console.log(x);//deferent variables
    }
    console.log(x)//1
}


var a=1;
var b=2;
{
    var a =11;//the scope is global
    let b=22;//the scope is inside the block;
    console.log(a);//11
    console.log(b);//22
}
console.log(a);//11
console.log(b);//2




/////////   var variable understanding//////////
var a=1;
if(x===1){
    var a=2;
    console.log(a);
    //expected output:2;
}
    console.log(a);
    //expected output:2;



    //fucntion body scoping of var///
// function foo(){
//     var x=1;
//     function bar(){
//         var y=2;
//         console.log(x);//1(function bar closes over `x`);

//         console.log(y);

//     }
//     bar();
//     console.log(x);//1(`x` is in scope)
//     console.log(y);
//     //referenceError,`y` is scoped to `bar`
// }
// foo();


///// const variable ////

const number=42;
try{
    number=99;
}
catch(err){
   // console.log(err)
}
console.log(number);

//Reassignment to a constant variable throws an error
// Re-assigning to a constant variable throws an error
//MY_FAV = 20; // TypeError: Assignment to constant variable

// Redeclaring a constant throws an error
//const MY_FAV = 20; 
// SyntaxError: Identifier 'MY_FAV' has already been declared
//var MY_FAV = 20;
 // SyntaxError: Identifier 'MY_FAV' has already been declared
//let MY_FAV = 20;
 // SyntaxError: Identifier 'MY_FAV' has already been declared


//block Scoping

const my=5;
if(my===5){
    const my=20;
    console.log(my);//20


    //var decleration are not scoped to blocks so this throws an error
   // var my=20;
}

console.log(my);

//
const My_object={key:"value"};
My_object.key={Ohther_key:"value"};