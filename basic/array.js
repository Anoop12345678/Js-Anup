// // const myarr = [0,1,3,4,5]
// // const myHeroes = ["shaktiman","hanuman","bisnhu"]

// // // array methods

// // myarr.push(78)
// // console.log(myarr)
// // console.log(myarr.includes(1))


// // console.log("A", myarr);
// // const myn1 = myarr.slice(1,3)
// // console.log(myn1)
// // console.log(myn1)

// const mySum = Symbol("key1")

// const unser= {
//     name : " anup",
//     [mySum]:"mykey1",
//     age : 23,
//     adderss :"dang",
//     email : "anup@google.com",
//     lastLoginDays : ["sunday","friday","wednesday"]
// }
// console.log(unser.email);
// console.log(unser["email"]);
// console.log(unser);
// console.log(unser[mySum]);

// unser.greating = function(){
//     console.log(`hello js ${this.name}`);
    
// }
// console.log(unser.greating());

const regularUser = {
    email : "some@gmial.com",
    fullName:{
        userfullnamr:{
            firstName : "anuradha"
        }
    }
}
// console.log(regularUser.fullName.userfullnamr);

const obj1 = {
    1:"a",2:"b"
}
const obj2 = {
    1:"yy",2:"b"
}
const obj5 = Object.assign({},obj1,obj2);
const obj6 = {...obj1, ...obj2}

// console.log(obj5);



