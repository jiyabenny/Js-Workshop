class user{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}
class moderator extends user{
    addcoins(){
        this.coins++;
        console.log(`The number of coins of is ${this.coins}`);
    }
    removecoins(){
        this.coins-=this.coins;
        console.log(`The number of coins of  is ${this.coins}`);
    }
}
class admin extends moderator{
    addcourse(c){
        this.courses.push(c);
        console.log(`The courses are:${this.courses}`);
    }
    deletecourse(c){
        let i=this.courses.indexOf(c);
        this.courses.splice(i,c.length);
        console.log(`The courses are:${this.courses}`);
    }
}
var user1=new user(`Jiya`,21,`j@gmail.com`);
var user2=new moderator(`Hizana`,21,`h@gmail.com`);
var user3=new admin(`Divya`,21,`d@gmail.com`);
user1.login();
user1.logout();
user2.addcoins();
user3.addcourse(`python`);
user3.addcourse(`javascript`);
user2.removecoins();
user3.deletecourse(`javascript`);

