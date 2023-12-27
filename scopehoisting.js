function one(){
    const username="hitesh"
    function two(){
        const website="Youtube";
        console.log(username)
    }
   // console.log(website);//outofscope
   // two();
}
one();

console.log(add(5));
function add(num){
   return num+1;
}
add(5);


const addtwo=function(num){
    return num+2;
}
addtwo(5);
