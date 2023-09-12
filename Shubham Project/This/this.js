// function ask(){
//     console.log(this)
// }
// ask();

// function ask2(){
//     function ask(){
//         console.log(this);
//         // console.log(10);
//     }
//     return ask;
// }
// const stored = ask2();
// stored();
// console.log(this);
// console.log(this.age);
// console.log(this.name);

// var person = {
//     ask() {
//         function withinPerson() {
//             console.log(this)
//         }
//         withinPerson();
//     },
//     name: 'shubham',
//     age: 28,
//     ask2: function() {
//         console.log('i am ask 2')
//     }
// }
// person.ask();
// const variable = person.ask();
// variable();

// console.log(person.ask);
// console.log(person.ask2);
// console.log(person.ask3);
// person.ask2();
// person.ask3();

// function random(){
//     console.log(this)
// }
// var person = {
//     ask(){
//         random();
//     },
//     name: 'shubham',
//     age:10,
//     ask2: function(){
//         console.log('i am ask 2')
//     }
// }
// person.ask();

// var person = {
//     ask() {
//         return this.ask2;       
//     }, 
//     name:'naman',
//     age: 10,
//     ask2: function(){
//         console.log(this)
//     }
// }
// const check = person.ask();
// check();

function abcd(cb){
    const returned = cb();
    returned();
}

var person = {
    ask() {
        console.log(this)
        return this.ask2;       
    }, 
    name:'naman',
    age: 10,
    ask2: function(){
        console.log(this)
    }
}
const check = person.ask();
abcd(check);