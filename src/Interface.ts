// here we are specifing the variables allowed and required in this object as well as their data type
// const user: {name:string,age:number} = {
//     name:"Monster",
//     age:30,
// }

// const user2: {name:string,age:number} = {
//     name:"Monster",
//     age:30
// }

// another way is to use Interface in typescript
// all the vatiable which we put inside below is mandatory but we can make them optional 
// inoder to differentiate the interface name from class name use name with interface
interface UserInterface {
    name: string;
    // age: number; // here age is mandatory
    age?: number; // here age is optional
    getMessage():string;
}

const user: UserInterface = {
    name:"Monster",
    age:30,
    getMessage(){
        return "hello" + name;
    }
}

// the age is optional and that's why we are not getting error in this below object
const user2: UserInterface = {
    name:"Monster",
    getMessage(){
        return "hello" + name;
    }
}