// console.log(document);

// const h1TagList = document.getElementsByTagName('h1');
// console.log(h1TagList[0])

// console.log(document.getElementsByTagName('p'));

// console.log(document.getElementById('randomH1'))

// console.log(document.getElementsByClassName('c1'))

// const result = document.querySelectorAll('p');
// console.log(result);


// const q1Element3 = document.querySelectorAll('p');
// console.log(q1Element3.innerText);

// xonst nestedTag = document.querySelectorAll('div');
// const ranadomNumber = Math.floor(Math.random()*20);
// console.log(ranadomNumber);
// for(let i=0; i<ranadomNumber; i++){
//     console.log(i);
//     if(i === 10){
//         const allDivTag = document.querySelectorAll('div')
//         // allDivTag[2].innerText = 'You are a winner';
//         for(let divTag of allDivTag){
//             if(divTag.innerText == 'this is div text 2'){
//                 divTag.style.color = 'red';
//                 divTag.style.backgroundColor = 'rgb(0,255,0)'
//                 continue;
//             }
//             divTag.innerText = "you are all winners";

//         }
//     }
// }

// const nestedTag = document.querySelectorAll('div');


// nestedTag[2].classList.add('classToBeAdded', 'check2class');
// console.log(nestedTag[2].classList)
// for(let elem of nestedTag){
//     if(Array.from(elem.classList).includes('classToBeAdded')){
//         elem.style.textDecoration = 'underline';
//     }
// }

// const idSelect = document.getElementById('demoId')

// window.location
// setTimeout(()=>{
//     console.log('i am starting');
// },2000)
// console.log('i am console');
// const colorButton = document.querySelectorAll('button');
// colorButton[0].style.backgroundColor = 'red';

// setTimeout(() => {
//     colorButton[1].style.backgroundColor = 'green';
// },4000)
// for(let elem of colorButton){
//     if(Arrays.from(elem.classList).includes('red')){
//         elem.style.backgroundColor = 'red';
//     }
//     setTimeout(() =>{
//         elem.style.backgroundColor = 'green';
//     }, 4000)
// }

// setInterval(()=>{
//     console.log('i am starting');
// },2000)
// const count = 0;
// const sIId = setInterval(() =>{
//     count++;
//     if(count === 1000){
//         break;
//     }
// },1000)




// const counterStartValueTag = document.getElementById('counter');
// console.log(typeof parseInt(counterStartValueTag.innerText));
// let counterStartValue = parseInt(counterStartValueTag.innerText);

// const counterEndValueTag = document.getElementById('countStop');
// let counterEndValue = parseInt(counterEndValueTag.innerText);

// console.log(counterStartValue,counterEndValue);

// const testNodeTag = document.getElementById('testNode');

// const SIID = setInterval(()=>{
//     counterStartValue++;
//     if(counterStartValue === counterEndValue+1){
//         clearInterval(SIID);
//         setTimeout(() => {
//             testNodeTag.textContent = 'it has chaanged';
//         }, 5000)

//         return;
//     }
//     counterStartValueTag.textContent = counterStartValue;
    
// },10)
// console.log("it is changed")

// function showcommentform()
// {
// var data=”new text”
// document.getElementById('mylocation').innerHTML=data;
// }

// const demoId3Tag = document.getElementById('demoId3');
// // console.log(demoId3Tag);
// demoId3Tag.addEventListener('click', () => {
//     console.log('click event triggered on demoId3')
//     demoId3Tag.textContent = 'on clicked i have change'
// })

// const input1Tag = document.getElementById('input1')

// input1Tag.addEventListener('change', () => {
//     console.log('i changed')
// })
// input1Tag.addEventListener('focus', () => {
//     console.log('i changed 2')
// })
// input1Tag.addEventListener('blur', () => {
//     console.log('i changed 2')
// })

// function onclick(){
//     console.log('onclick with html');
// }
// function dbl(){
//     console.log('click double and i am trigger');
// }

// const input1Tag = document.getElementById('demoId3');
// input1Tag.addEventListener('click',() =>{
//     console.log('yes click')
// })

// }

// const inputTag1 = document.getElementById('ip1')
// const inputTag2 = document.getElementById('ip2')
// const sum = document.getElementById('sum')
// sum.addEventListener('click', () =>{
//     if(inputTag1.value === '' || inputTag2.value === ''){
//         console.log('provide both input');
//         return;
//     }
     
//     console.log((parseInt(inputTag1.value) + parseInt(inputTag2.value)));

//     inputTag1.value = '';
//     inputTag2.value = '';
// })

// const bigBoxTag = document.querySelector('#bigBox');
// console.log(bigBoxTag)
// bigBoxTag.addEventListener('mouseenter', ()=>{
//     console.log('mouse enter is done ');
// })
// bigBoxTag.addEventListener('mouseover', ()=>{
//     console.log('hovering in the box ');
// })
// bigBoxTag.addEventListener('mouseout', ()=>{
//     console.log('mouse out of the box ');
// })

// const h1TagWithH11Name = document.querySelector('h1[name="h11"]');
// console.log(h1TagWithH11Name);

// const nestedDiv = document.querySelector('#randomId #r2');
// console.log(nestedDiv)

// const inputBoxes = document.querySelector('[name=checkboxes]');
// console.log(inputBoxes.checked)

// const allCheckBoxes = document.querySelectorAll('input[checked]');
// for(let checkBoxElem of allCheckBoxes){
//     checkBoxElem.addEventListener('click', ()=>{
//         console.log('yes i am checked');
//     })
// }
// const btnTag = document.getElementById('sampleBtn');
// btnTag.addEventListener('click',()=>{
//     const newSelection = document.querySelectorAll('input[type="checkbox"]')
//     let checkedSelection = [];
//     for(let newSelec of newSelection){
//         if(newSelec.checked){
//             (checkedSelection.push(newSelec));
//         }
//     }
//     console.log(checkedSelection)
// })

// const typeTestTag = document.querySelector('input[type="text"]');
// const btnTag = document.querySelector("#sampleBtn");

// const textDisplayTag = document.querySelector('#textDisplay');
// const radioOutputTag = document.querySelector('#radioOutput');
// const checkBoxesOutputTag = document.querySelector('#checkBoxesOutput');

// btnTag.addEventListener('click', ()=>{
//     const checkboxesValues = [];
//     const radioData = document.querySelectorAll('input[type="radio"]:checked');
//     const radioDataValues = radioData[0].value;

//     const checkBoxData = document.querySelectorAll('input[type="checkbox"]:checked');
//     for(let checkBoxDataEle of checkBoxData){
//         checkboxesValues.push(checkBoxDataEle.value);
//     }

//     textDisplayTag.innerText = typeTestTag.value;
//     radioOutputTag.innerText = radioDataValues;
//     checkBoxesOutputTag.innerText = checkboxesValues;x
// })

// const divTag = document.querySelector('#div1');
// console.log(divTag);

// const form = document.querySelector('form')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log('my own event');
// })

// const formSubmit = document.querySelector('form');
// const btn = document.querySelector('input[type="number"]');
// const displayAreaTag = document.querySelector('#displayArea');
// const obj = {};
// formSubmit.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const nameValue = document.querySelector('#name').value
//     const ageValue = document.querySelector('#age').value
//     obj.name = nameValue
//     obj.age = ageValue

//     console.log(obj);

//     const displayAreaTag = document.querySelector('#displayArea');
//     displayAreaTag.textContent = JSON.stringify(obj);
// })

// const gpTag = document.querySelector('#grandParent');
// const pTag = document.querySelector('#parent');
// const cTag = document.querySelector('#child');

// gpTag.addEventListener('click', ()=>{
//     console.log('grand parent triggered')
// },true)

// pTag.addEventListener('click',()=>{
//     console.log('parent triggered')
// },true)
// cTag.addEventListener('click',()=>{
//     console.log('child triggered')
// },true)

// function customAddEventListener

// document.querySelector('#scissor')
//         .addEventListener('click', (e)=>{
//             console.log(e.target.innerText)
//         })

// document.querySelector('#paper')
//         .addEventListener('click', (e)=>{
//             console.log(e.target.innerText)
//         })

// document.querySelector('#pencil')
//         .addEventListener('click', (e)=>{
//             console.log(e.target.innerText)
//         })
// const arr = [];
// document.querySelector('#shoppingList')
//         .addEventListener('click', (e)=>{
//             // console.log(e.target);
//             // arr.push(e.target.innerText);
//             // console.log(arr);
//             console.log(e.target.tagName);
//             if(e.target.tagName === 'LI'){
//                 window.location.href = window.location.href + "/" + e.target.id;

//             }
//         })

// const abc = document.querySelector('#shoppingList')
//         // .addEventListener('click', (e)=>{
//         //     console.log(e.target);
//         //     // arr.push(e.target.innerText);
//         //     // console.log(arr);

//         // })
// console.log(abc)

// const abcd = document.
// document.querySelector('#name');
//         .addEventListener('keyup', (e)=>{
//             // const sample = e.target;
//             // console.log(e.key);
//             // e.target.key = e.target.value.toUpperCase()
//             // e.target.value = e.terget.value.toUpperCase();

//             if(e.keyCode === 13)
//         })
// document.querySelector('#name');
//         .addEventListener('keydown', (e)=>{
//             console.log('keydown', e.target.value);
//         })
// document.querySelector('#name');
//         .addEventListener('keypress', (e)=>{
//             console.log('keypress', e.target.value);
//         })

// document.querySelector('#form');
//         .addEventListener('click', (e)=>{
//             console.log('click')
//         })
// document.querySelector('#form');
//         .addEventListener('click', (e)=>{
//             console.log('click2')
//         })

// const btn = document.querySelector('#btn').addEventListener('click', ()=>{
//     const tempPTag = document.createElement('p');
// // const tempPTag = document.createElement('a');
// // const tempPTag = document.createElement('div');
// // const tempPTag = document.createElement('p');
// // console.log(tempPTag);
// tempPTag.innerText = 'this generate through JS';
// console.log(tempPTag);

// const test = document.createElement('div');
// test.innerText = 'div test';
// const test2 = document.createElement('div');
// test.innerText = 'div test2';
// const baseBody = document.body;
// console.log(baseBody);
// // baseBody.append(tempPTag, test,test2);

// baseBody.appendChild(tempPTag,test);

// baseBody.prepend(tempPTag); 
// })

// add thing on to the DOM through JS

// how can remeove the element
// const btn1 = document.querySelector('#btn');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');

// const mainDivTag = document.querySelector('#mainDiv');

// btn1.addEventListener('click', ()=>{
//     //TODO: remove individual spans 
//     // const span1Tag = document.querySelector('#span1');
//     // span1Tag.remove();

//     //TODO: remove whole content from the div 
//     // mainDivTag.innerHTML = '';

//     //TODO: remove just span from the div
//     const span1Tag = document.querySelectorAll('#mainDiv .span1');
//     for(let span of span1Tag){
//         span.remove();
//     }
// // const span1Tag = document.querySelectorAll('#mainDiv .span1');

// })

// btn2.addEventListener('click', ()=>{
//     const nd = document.createElement('span');
//     nd.textContent = 'random addition';
//     nd.classList.add('span1');

//     nd.setAttribute('title', Math.random());
//     nd.setAttribute('id','notTheCorrectWay');

//     mainDivTag.append(nd);
// })

// btn3.addEventListener('click', ()=>{
//     const span1Tag = document.querySelectorAll('#mainDiv .span1');
//     for(let span of span1Tag){
//         span.removeAttribute('id');
//     }
// })

// const box = document.getElementById('box');
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2'); 

// const color = ['red', 'green','blue', 'orange'];


// function getRandomColor(){
//     return color(Math.floor(Math.random()*color.length));
    
// }

// btn1.addEventListener('click', ()=>{
//     // const randomColor = color(Math.floor(Math.random()*color.length));
//     box.style.backgroundColor = getRandomColor();
// })

// btn2.addEventListener('click', ()=>{
//     // const randomColor = color(Math.floor(Math.random()*color.length));
//     box.style.color = getRandomColor();
// })

const user = [
    {
        name:'shubham',
        age:25,
        gender:'m',
        address:'pune'
    },
    {
        name:'dikshu',
        age:24,
        gender:'f',
        address:'kolkata'
    },
    {
        name:'shilpa',
        age:22,
        gender:'f',
        address:'mumbai'
    },
    {
        name:'sweta',
        age:20,
        gender:'f',
        address:'varha'
    }
]

const displayUserArea = document.getElementById('displayUsers');

for(let users of user){
    const tempParentDiv = document.createElement('div')
    const tempH1 = document.createElement('h1');
    const tempDiv1 = document.createElement('div');
    const tempDiv2 = document.createElement('div');
    const tempDiv3 = document.createElement('div');

    tempH1.innerText = users.name.toUpperCase();
    tempDiv1.innerText = `age - ${users.age}`;
    tempDiv2.innerText = `gender - ${users.gender === 'm'? 'Male': 'Female'}`;
    tempDiv3.innerText = `address - ${users.address}`;

    tempParentDiv.append(tempH1);
    tempParentDiv.append(tempDiv1);
    tempParentDiv.append(tempDiv2); 
    tempParentDiv.append(tempDiv3); 
    displayUserArea.append(tempParentDiv);
}
    
