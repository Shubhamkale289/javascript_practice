// function ask(article, article2){
//     console.log(this);
//     console.log(article);
//     console.log(article2);
// }
// // ask();

// const person = {
//     name:'shubham',
//     age: 28,
//     add:'delhi'
// }
// var station = {
//     location:'delhi',
//     pincode:444803
// }

// ask.call(person);
// ask.call(station)

// const result = ask.bind(person);
// console.log(result);

// ask.call(person, 370, 500);
// ask.apply(person,[370, 500]) 
// const object = {
//     message ='js',
//     getMessage(){
//         const message = 'react'
//         return this.message;
//     }
// }
// const stored = object.getMessage();
// console.log(stored);

// function ask(arg1, arg2){
//     console.log(this.name);
//     console.log(arg1);
//     console.log(arg2);
//     console.log(arg3);
// }

// const person = {
//     name:'shubham',
//     age: 28,
//     add:'delhi'
// }
// const bindAsk = ask.bind(person, 100, 200);
// bindAsk(300);

// function Person(name2){
//     this.name = name2
// } 
// const person1 = new Person('naman');
// const person2 = new Person('shubham ');
// console.log(person1); // object -> with all properties of person
// console.log(person2); // object -> with all properties of person

// in the above the value that we are passing will act as the value of the instance

// function sample(){
//     console.log(this.age);
//     sample2(this);
// }
// function sample2(that){
//     console.log(that.age);
// }
// const obj = {
//     name: 'naman',
//     age: 10

// }

// sample.call(obj);

// function animal(species, name, legs, wings){
//     this.species = species;
//     this.name = name;
//     this.legs = legs;
//     this.wings = wings;
// }
// const tiger = new animal('a', 'tiger', 4, false);
// const ostrich = new animal('b', 'ostrich', 2, true);
// console.log(tiger);
// console.log(ostrich);

// function Outer(){
//     this.name = "outer";
//     this.innerFunction = function(){
//         console.log(this.name);
//     }
// }

// const outer1 = new Outer();
// const outer2 = new Outer();

// outer1.innerFunction();
// const innerFunction2 = outer2.innerFunction;
// innerFunction2();

// var length = 4;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length: 3,
//     method(callback){
//         callback()
//     }
// }
// object.method(callback,1,2);

// function User(){
//     this.name = "abcd"
//     this.score = 200
//     this.sayUser = function(){
//         console.log(this.name);
//         const self = this;
//         function innerFunc(){
//             console.log(self.name);
//         }
//         innerFunc();
//     }
// }
// let name = new User();
// name.sayUser();

// const arrowFunc = ()=>{
//     console.log(this);

// }
// arrowFunc();

// const personObj = {
//     age = 10;
// }

// const normalFunc() {
//     console.log(this);
//     const arrowFunc = ()=>{
//         console.log(this);
//     }
//     arrowFunc();
// }
// normalFunc.call(personObj); 


// function normalFunc() {
//     console.log(this);
//     const arrowFunc = ()=>{
//         console.log(this);
//     }
//     arrowFunc();
// }
// normalFunc(); 

// function Pet(name){
//     this.name = name;
//     this.getName = () => this.name;
// }
// const cat = new Pet('dumbo');

// console.log(cat.getName());

// const{getName} = cat;
// console.log(getName())

// const obj = {
//     simple: 'sample',

//     welcome() {
//         return 'i am welcome', this.simple
//     },

//     notWelcome: () => {
//         return 'i am not welcome', this.simple
//     }
// }

// console.log(obj.welcome());
// console.log(obj.notWelcome())

// let user = {
//     firstName: 'shubham',
//     lastName: 'kale',
//     age:10,
//     courseList: [],

//     buyCourse: (courseName) => {
//         this.courseList.push(courseName)
//     },

//     getCourse: function(){
//         console.log(this.courseList);
//     }
// }
// user.buyCourse('node');
// user.getCourse();

// const user = (name) => {
//     this.name = name;
// }

// const user1 = new user();
// console.log(user1.name);
// const user = (name) => {
//     this.name = name;
//     return {};
// }

// const user1 = user('shubham');
// console.log(user1.name);

// function sample(value) {
//     return function(){
//         console.log(value);
//     }
// }
// const s1 = sample('abcd');
// const s2 = sample('efgh');
// s1();
// s2();

// function outer(name, random){
//     let i=10;
//     function inner(){
//         console.log(i);
//         console.log(name) 
//         console.log(random)
//     }
//     return inner;

// }
// const innerFunc = outer('shubham', 10);
// innerFunc();

// function x(){
//     var a = 10;
//     function random(){
//         console.log(a);
//     }
//     a = 200;
//     return random;
// }
// const randomInstance = x();
// randomInstance();

// function creatElement() {
//     let count = 0;
//     function increament() {
//         count++;
//         console.log(count);
//     }
//     let message = `Count is ${count}`;
//     function log(){
//         // count++;
//         console.log(message);
//     }
//     return [increament, log];
// }
// const [increament, log] = creatElement();
// increament();
// increament();
// log();
// log();
// increament();

// function createask(){
//     const stackItems = [];
//     return {
//         push(item){
//             stackItems.push(item);
//         },
//         pop(){
//             return stackItems.pop();
//         },
//         peek(){
//             return stackItems[stackItems.length - 1];
//         },
//         size(){
//             return stackItems.length
//         }
//     }
// }
// const stack = createask();
// stack.push(100);
// stack.push(200);
// stack.pop();
// stack.push(500);
// console.log(stack.peek());
// console.log(stack.size());

// function createTask(){
//     const stackItems = [];
//     return{
//         push(item){
//             stackItems.push(item);
//         },
//         pop(){
//             return stackItems.pop();
//         },
//         peek(){
//             return stackItems[stackItems.length - 1];
//         },
//         size(){
//             return stackItems.length;
//         }, 
//         returnStack(){
//             const tempStack  = [...stackItems]; // pass by reference 
//             return tempStack;
//         },
//         showStack(){
//             // for(let item of stackItems){
//             //     console.log(item);
//             return stackItems;
//         }
//     }
// }

// const stack = createTask();
// // console.log(stack.push);
// stack.push(100);
// stack.push(200);
// stack.pop();
// stack.push(500);
// console.log(stack.size());
// console.log(stack.peek());
// const newstoree = stack.returnStack()
// newstoree.push(10);
// console.log(stack.showStack());

// function counter(){
//     // your code
//     let count = 0;
//     return {
//         increament: function() {
//             count++;
//             console.log(count);
//         }
//     }
// }

// const counter1 = counter();
// counter1.increament();  //should print 1
// counter1.increament();  //should print 2

// counter1.count = 200;
// counter1.increament();  //should print 3

// function multiply(a, b){
//     if(a!== undefined && b!== undefined){
//         console.log(a*b);
//         return;
//     }

//     if(b === undefined){
//         return function(num){
//             console.log(a*num);
//         }
//     }
// }

// multiply(4,5); //20
// multiply(2,10); // 20
// const multiplyThree = multiply(3);
// multiplyThree(9); // 27
// multiplyThree(7); // 21

// function createBase(a, b){
//     if(b === undefined) {
//         return function(num){
//             console.log(a + num);
//         }
//     }
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(30);


// infinite currying
// function add(num){
//     // your code
//     let sum = num;

//     function addNext(nextNum){
//         if(nextNum === undefined){
//             return sum;
//         }else{
//             sum += nextNum;
//             return addNext;
//         }
//     }
//     return addNext;
// }

// function add(x){
//     return function(y){
//         if(y === undefined){
//             console.log(x);
//             return;
//         }
//         return add(x+y);
//     }
// }

// add(10)(20)(30)(40)(50)(); // 150
// add(10)(20)(30)(40)(50)(1)(1)(1)(1)(1)(); // 155
// add(10)(2)(1)(1)(1)(1)(); // 16
// add(30)(); // 30
// add(30)(2)(); // 32

// function User(name,age){
//     this.name = name;
//     this.age = age;
// }

// const u1 = new User('naman', 10);
// const u2 = new User('shubham', 20);

// console.log(u1.name);
// console.log(u1.age);
// console.log(u2.name);
// console.log(u2.age);

// function User(name,age){
//     const newObject = {};
//     newObject.name = name;
//     newObject.age = age;
//     return newObject;
// }

// const u1 = new User('naman', 10);
// const u2 = new User('shubham', 20);

// console.log(u1);

// console.log(u1.name);
// console.log(u1.age);
// console.log(u2.name);
// console.log(u2.age);

// Object.getPrototypeOf(u1, {});

// const arr =[10,20,30];
// function customMap(arr, cb){
//     const newArr = []
//     for(let i=0; i<arr.length; i++){
//         cb(arr[i], i, arr);
//     }
//     return newArr;
// }
// customMap(arr, cb)


// const arr = [10,20,30,40];
// Array.prototype.customMap = function(cb){
//     const tempMparr = [];
//     for(let i=0; i<this.length; i++){
//         tempMparr.push(cb(this[i], i, this));
//     }
//     return tempMparr;
// }
// const mpArr = arr.customMap((val,index, completeArr)=>{
//     console.log(val);
// })
// console.log(mpArr); //['undefined', 'undefined'];

// const newMpArr = arr.map((val, index, completeArr)=>{
//     console.log(val)
// })
// console.log(newMpArr);

// function User(name, age, count){
//     this.name = name;
//     this.age = age;
//     this.count = count;
// }
// const u1 = new User('naman', 10, 5);
// const u2 = new User('shubham', 20 , 0);

// User.prototype.getACombinedFunction = function (){
//     const intenalCall1 = ()=> {
//         return this.name;
//     }
//     const intenalCall2 = ()=> {
//         return this.age;
//     }
//     const intenalCall3 = ()=>{
//         return this.count;
//     }
//     const combined = `${intenalCall1()} ${intenalCall2()} ${intenalCall3()}`
//     return combined
// }
// console.log(u1.getACombinedFunction());

// Syntax of class keyword 

// class User{
//     constructor(name, age, count){
//         this.name = name;
//         this.age = age;
//         this.count = count;
//     }
//     increament(){
//         this.count++;
//     }
// }
// const u3 = new User('shubham', 10, 50);
// console.log(u3);

// function Parent(lastName, address){
//     this.lastName = lastName;
//     this.address = address;
// }

// const child = {
//     name:'shubham',
//     age: 10
// }

//  Parent.call(child, 'abcd', 'delhi');
// console.log(child);

// function Parent(lastName, address){
//     this.lastName = lastName;
//     this.address = address;
// }
// Parent.prototype.getLastName = function(){
//     return this.lastName;
// }

// function Child(name, age, lastName, address){
//     Parent.call(this, lastName, address);
//     this.name = name;
//     this.age = age;
// }

// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.getFirstName = function(){
//     return this.name;
// }
// const c1 = new Child('naman', 10, 'abcd', 'delhi')
// const c2 = new Child('shubham', 20, 'defg', 'banglore');
// console.log(c1);
// console.log(c1.getFirstName());
// console.log(c1.getLastName());

// console.log(c2);
// console.log(c2.getFirstName());
// console.log(c2.getLastName());

// class User{
//     constructor(name, age, useCase){
//         this.name = name;
//         this.age = age;
//         this.useCase = useCase;
//     }
// }

// class PremiumUser{
//     constructor(name, age, useCase, rechargeValue, endingDate, usersPending){
//         this.name = name;
//         this.age = age;
//         this.useCase = useCase;
//         this.rechargeValue = rechargeValue;
//         this.endingDate = endingDate;
//         this.usersPending = usersPending;
//     }
// }

// const personStore = {
//     greet: function(){
//         console.log("hello");
//     }
// }

// personStore.greet();

// function personFromPersonStore(name, age){
//     const p = Object.create(personStore)
//     p.name = name;
//     p.age = age;
//     return p;
// }

class User{
    constructor(name, age, count){
        this.name = name;
        this.age = age;
        this.count = count;
    }
    increament(){
        this.count++
    }
    static validateName(sampleName){
        if(sampleName.lenght > 4){
            return false
        }
        return true
    }
}

const u3 = new User('shubham', 10, 0);
console.log(u3.validateName());

