const user={
    username:"sandeep",
    price:299,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username="sandy";
user.welcomeMessage();
console.log(this);