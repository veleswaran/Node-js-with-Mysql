// const http = require('https'); //or http module also same as

// // request protocal
// const vel = http.request('https://www.google.com',(res)=>{
//     res.on('data',(vels)=>{
//         console.log(`Data chunk; ${vels}`);
//     });
//     res.on('end',()=>{
//         console.log('No more data');
//     })
// });


const {get} = require('https'); //or http module also same as

// request protocal
const vel = get('https://www.google.com',(res)=>{
    res.on('data',(vels)=>{
        console.log(`Data chunk; ${vels}`);
    });
    res.on('end',()=>{
        console.log('No more data');
    })
});

vel.end();