// const chai=function(){
//     let username="sandeep";
//     console.log(this.username);
// }

const chai=()=>{
    let username="sandeep";
    console.log(this);
}

//chai();

// const addtwo=(num1,num2)=>{

//     return num1+num2;
// }

const addtwo=(num1,num2)=>({
    username:"sandeep"
})
console.log(addtwo(3,5));