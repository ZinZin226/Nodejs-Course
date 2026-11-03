const fs = require('fs');

//read
// fs.readFile('./docs/sampleText.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }

//     console.log(data.toString());
// })

// write

// if(!fs.existsSync('./docs/sampleText123.txt')) {
//   fs.writeFile('./docs/sampleText123.txt', 'Fighting!! This is first day of 21 Days Challenge!', (err) => {
//     if(err) {
//         console.log(err)
//     }

//     console.log('after writing files');
//     })
// }else {
//     // delete
//     fs.unlink('./docs/sampleText123.txt', (err) => {
//         if(err) {
//             console.log(err)
//         }

//         console.log('file deleted');
// });
// }



if(fs.existsSync('./newFolder')) {
// Folder delete 
    fs.rmdir('./newFolder', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}else {
    // folder create

fs.mkdir('./newFolder', (err) => {
    if(err) {
        console.log(err)
    }
    console.log('folder created');
})
}