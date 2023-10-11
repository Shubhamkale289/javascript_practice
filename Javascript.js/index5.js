// const btn1Tag = document.querySelector('#btn1');
// const btn2Tag = document.querySelector('#btn2');
// const contentDisplayTag = document.querySelector('#contentDisplay');
// btn1Tag.addEventListener('click', ()=>{
//     contentDisplayTag.textContent += 'added through Js -----'
// })
// btn2Tag.addEventListener('click', ()=>{
//     console.log('JS thread is block');
//     let abcd = 0;
//     for(let i=0; i<10000000000; i++){
//         abcd++
//     }
//     console.log('JS thread is blocked');
// })

    // console.log('one');

    // const randomTimeFunc = ()=>{
    //     return Math.floor(Math.random()*5000);
    // }

    // setTimeout(()=>{
        
    //     console.log('two');
    //     setTimeout(()=>{
    //         return 'i am second x';
    //     }, randomTimeFunc())
    //     setTimeout(()=>{
    //         console.log('i am second x2');
    //     }, randomTimeFunc())
    // }, randomTimeFunc())

    // console.log('three');

// console.time();
// console.log('start')
// console.log('D')
// console.timeEnd();

// console.log('start');
// setTimeout(()=>{
//     console.log('end');
// }, 500)
// setTimeout(()=>{
//     console.log('A');
//     setTimeout(()=>{
//         console.log('B');
//         setTimeout(()=>{
//             console.log('C');
//             setTimeout(()=>{
//                 console.log('D');
//             })            
//         }, 500)
//     }, 500)
// }, 500)

// const promiseState = new Promise((resolve, reject)=>{
//     // resolve();
//     reject()
// })
// promiseState.then(()=>{
//     console.log('please help me in executing')
// })
// .catch(()=>{
//     console.log('please reject me');
// })

// function getPromise(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // resolve();
//             reject(); 
//         },1000)
//     })
// }

// getPromise()
//     .then(()=>{
//         console.log('this is calleed because of promise'); 
//     })
//     .catch(()=>{
//         console.log('error is seen')
//     })

// const getPromiseValuwNew = getPromise();
// getPromiseValuwNew.then(()=>{
//     console.log('this is called because of resolve')
// })
// // console.log(getPromiseValuwNew);

// getPromise()
//     .then(()=>{
//         console.log('this is called because of promise');
//     })

// const getPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const data = {
//             name:'shubham',
//             children: ['a','b','c']
//         };
//         resolve(data);
//     },1000)
// })
//     .then((data)=>{
//         console.log(data);
//     },1000)
//     .catch((error)=>{
//         console.log('err');
//     })

// const promiseStore = new Promise(()=>{})
// setTimeout(()=>{
//     console.log(promiseStore);
// }, 5000)
// function read({title, id}){
//     console.log(title, id);
// }
// const apiResponse = fetch('https://jsonplaceholder.typecode.com/posts'){
//     methos:'GET'
// }
// .then((data) => {
//     return data.json();
// })
// .then((data) => {
//     read(data[0]);
// })
// .catch(()=>{
//     console.log('error');
// })

// const promiseFunc = ()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             resolve({name:'shubham'});
//         },3000)
//     })
// }
// const promiseVal = promiseFunc();

// promiseFunc()
//     .then(()=>{
//         console.log('phone bought');
//         console.log('laptop bought');
//         console.log('charger bought');

//     })
//     .catch(()=>{
//         console.log('error')
//     })

// setTimeout(()=>{
//     console.log('phone bought');
//     console.log('charger bought');
//     console.log('laptop bought');
// },3000)

// const categories = [
//     {
//         category:'healthcare',
//         products: 140,
//         sellerInvolved: 20
//     },
//     {
//         category: 'toys',
//         products: 100,
//         sellerInvolved: 30
//     }
// ];

// const product = 
//     {
//         healthcare: [{
//             name: 'medicine1',
//             qty: 10,
//             brand: 'abcd'
//         },
//         {
//             name: 'medicine2',
//             qty: 20,
//             brand: 'abcd2'
//         }
//         ]

//         toys: [{
//             name: 'toy1',
//             qty: 10,
//             brand: 'abcd1'
//         },
//         {
//             name: 'toy2',
//             qty: 20,
//             brand: 'abcd2'
//         }
//         ]
//     }

// // getCategories API
// const getCategories = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(categories);
//         })
//     })
// }

// const getProductDetails = (category) =>{
//     return Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(product[category])
//         })
//     })
// }

// const getCategoryresdetails = getCategories();
// getCategoryresdetails.then((categoryData)=>{
//     const currentCategory = categoryData[1].category;
//     return getProductDetails(currentCategory);
// })
// .then(()=>{
//     console.log(productDetails);
// })


// const API = "https://real-puce-turtle-tam.cyclic.cloud/";

// const stockMarketCap = fetch(`${API}stock/stock-market-caps`)
//     .then((data)=>{
//         return data.json();
//     })
//     .then((data)=>{
//         console.log(data);
        
//         return data;
//     })

// const stockName = fetch(`${API}stock/stock-symbols`)
//     .then((data)=>{
//         return data.json();
//     })
//     .then((data)=>{
//         console.log(data)
//         return data;
//     })

// const getStockMarketCaps = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(marketCaps);
//         })
//     })
// }

// const getStockSymbols = (marketSymbols) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(sysmbols[marketCaps]);
//         })
//     })
// }

// const getStockSymbolsDetails = getSymbols();
// getCategoryresdetails.then((categoryData)=>{
//     const currentCategory = categoryData[1].category;
//     return getProductDetails(currentCategory);
// })
// .then(()=>{
//     console.log(productDetails);
// })


// function executeTask(){
//     setTimeout(()=>{
//         console.log('nake todo list')
//         setTimeout(() => {
//             console.log('todo 1')
//             setTimeout(() => {
//                 console.log('todo 2')
//                 setTimeout(() => {
//                     console.log('todo 3')
//                     setTimeout(() => {
//                         console.log('relax')
//                     }, 12000);
//                 }, 10000);
//             }, 5000);
//         }, 2000);
//     },1000)
// }
// const readyDelevery = true;
// function cooking(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if(readyDelevery){
//                 resolve("receipe is ready")
//             }else{
//                 reject("i am out");
//             }
//         },1000)
//     })
   
// }

// cooking()
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// const API = 'https://jsonplaceholder.typicode.com/todos/1';

// const stockMarket = fetch(`${API}`)
//     .then((response)=>{
//         return data.json(response);
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch(()=>{
//         console.log("error")
//     })

// let marketCapData;
// let stockNameData;
// function getHighestMarketCapStockDetails(){
//     fetch(`$(API)stock/stock-market-caps`)
//         .then((data)=>{
//             return data.json();
//         })
//         .then((stockMarketCapData)=>{
//             marketCapData = stockMarketCapData;
//             return fetch(`${API}stock/stock-symbols`);
//         })
//         .then((data)=>{
//             return data.json();
//         })
//         .then((stockNameDataFromAPI)=>{
//             stockNameData = stockNameDataFromAPI;
//             console.log(stockNameData);
//             console.log(marketCapData);

//             const sortedMarketCapStock = marketCapData.sort((stockA, stockB)=>{
//                 return stockB['market-cap'] - stockA['market-cap']
//             })
//             const topMarketCapStock = sorttedMarketCapData[0];
//             const [filteredStockName] = stockNameData.filter((stock)=>{
//                  return stock.symbol === topMarketCapStock.symbol
//             })
//             console.log(filteredStockName);
//             console.log(topMarketCapStock);
//             const consolidatedData = {...filteredStockName, ...topMarketCapStock}
//             console.log(consolidatedData);
//         })
// }


// let marketCapData;
// let stockNameData;

// async function getHighestMarketCapStockDetails(){
//     try{
//         const getHighestMarketCapStockDetailsData = await fetch(`${API}stock/stock-market-caps`)
//         const getHighestMarketCapStockDetailsDataJson = await getHighestMarketCapStockDetailsData.json()
//         const marketCapData = await fetch(`${API}stock/stock-symbols`)
//         const dataMarketCapData = await marketCapData.json() 
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// function taskA1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             // resolve('task a1 done')
//             reject('i am reject');
//         }, 1000);
//     })
// }

// function taskA2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('task a2 done')
//         }, 1000);
//     })
// }

// function taskB(a1, a2){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('task B done')
//         }, 1000);
//     })
// }

// let a1;
// let a2;

// const arr = Promise.allSettled([taskA1(), taskA2()])
// arr.then((data)=>{
//     console.log(data)
//     if(data[0].status === 'fulfilled' && data[1].status === 'fulfilled'){
//         return taskB(data[0], data[1]);
//     }else{
//         console.log('their is some problem in the TaskB')
//     }
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>[
//     console.log(err)
// ])

// const varP1 = function(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('i am resolved in x time');
//         }, 5000);
//     })
// }

// const varP2 = function(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('i am resolved in t time');
//         }, 5000);
//     })
// }

// const sample = varP2();

// varP1().then((data)=>{
//     console.log(data);
//     return sample
// })
// .then((data)=>{
//     console.log(data);
// })

// setInterval(()=>{
//     console.log('i am continuesly running');
// },1000)
// setInterval(()=>{
//     console.log('i am continuesly running 2');
// },1000)

// function TaskA3(){
//     console.log('start 3')
//     return new Promise((resolve,reject)=>{
//         console.log('start 4')
//         setTimeout(()=>{
//             console.log('start 5')
//             resolve('task a3 done')
//         }, 1000)
//     })
// }

// console.log('start');

// async function random(){
//     console.log('start 2')
//     await TaskA3()
//     console.log('start 10')
// }
// console.log('start 11')
// random();
// console.log('start 12')

// async function random2(){
//     return new Promise((resolve)=>{
//         resolve('something')
//     })
// }

// const storeValue = random2();
// storeValue.then((data)=>{
//     console.log(data)
// })

// async function example(){
//     const storeValue = await random2()
//     console.log(storeValue)
// }
// example()

// let data = new Promise((resolve, rejeect)=>{
//     setTimeout(()=>{
//         resolve('abcd')
//         rejeect('rejected')
//     })
// })
// data.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// setTimeout(()=>{
//     console.log('i am set timeout')
// },0)

// new Promise((resolve, reject)=>{
//     resolve("I am a resolve Promise")
// })
// .then((data)=>{
//     console.log(data)
// })

// console.log('i am normal');

const timeTag = document.getElementById('time');
timeTag.innerText = '00:00:00';

let startTime;
let elapsedTime = 0;
let timeInterval;

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');

function start(){
    startTime = new Date().getTime() - elapsedTime;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;

}
function pause(){

}
function stop(){

}
function updateTimer(){
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (3600*1000));
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime%60000) / 1000);

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("time").textContent = formattedTime;
}


