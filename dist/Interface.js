// here we are specifing the variables allowed and required in this object as well as their data type
// const user: {name:string,age:number} = {
//     name:"Monster",
//     age:30,
// }
var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return "hello" + name;
    }
};
// the age is optional and that's why we are not getting error in this below object
var user2 = {
    name: "Monster",
    getMessage: function () {
        return "hello" + name;
    }
};
