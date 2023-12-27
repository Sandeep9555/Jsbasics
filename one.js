function myname(){

    // console.log("S");
    // console.log("A")
    // console.log("N")
    // console.log("D")
    // console.log("E")
    // console.log("E")
    // console.log("P")
}//defintion

//myname//reference

myname()//calling


function addtwo(num1,num2){
  return num1+num2;
}
 const hold=addtwo(4,5)
//console.log("result",hold);

//supoose we give four in string
//console.log(3,null);

function logIn(username="sam"){
    if(!username){
        console.log("please Enter username");
        return  
    }
    return `${username} just LoggedIn`
}
console.log(logIn('sitesh'));