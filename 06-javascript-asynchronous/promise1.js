//Soal 1
const myCountPromise = (bil) => {
    return new Promise((resolve, reject) => {
        if(bil != undefined){
            setTimeout(function() {
                resolve(
                    bil * 2
            );
              }, 2000)
            
        }else{
            reject('Maaf tidak ada nilai dalam parameter');
        }
    })
}

myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})