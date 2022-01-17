// const person : object = {
//     name:"akhila",
//     age:20
// }
// const person: {
//     name: string;
//     age: number;
// }
// console.log(person.nickname)//error
// console.log(person.name) //error

// const person : {
//     name:string;
//     age:number
// } = {
//     name:"akhila",
//     age:20
// }

// console.log(person.age);
// console.log(person.name)


const person :{
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string]
} = {
    name:"akhila",
    age:20,
    hobbies:['sports','cooking'],
    role:[2,'author']
}
// person.role=[0,'akhila','user'] ///error

person.role.push('hello') //works
// person.role[1]=28;
for(const x of person.role){
    console.log(x)
}
let favouriteActivities:string[];
// favouriteActivities = 'sports' //error
favouriteActivities = ['sports']

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}
