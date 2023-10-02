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


const API = "https://real-puce-turtle-tam.cyclic.cloud/";

const stockMarketCap = fetch(`${API}stock/stock-market-caps`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
        
        return data;
    })

const stockName = fetch(`${API}stock/stock-symbols`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data)
        return data;
    })










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
