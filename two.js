function calculateCartprice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartprice(200,400,500,2000));

const user={
    username:"sandeep",
    prices:199,

}


function handleobject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user);

handleobject({
    username:"rohit",
    price:399,
});

//arraypassing

const myNewArray=[200,400,600,800];

function returnsecondValue(num2){

    return num2[1];
}
console.log(returnsecondValue(myNewArray));
