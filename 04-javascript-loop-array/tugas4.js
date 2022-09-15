//Soal 1
for (let index = 0; index < 10; index++) {
    console.log(index);
}

//Soal 2
for (let index = 0; index < 10; index++) {
    if(index %  2 != 0) console.log(index);
}

//Soal 3
for (let index = 0; index < 10; index++) {
    if(index %  2 == 0) console.log(index);
}

//Soal 4
let array1 = [1,2,3,4,5,6];
console.log(array1[5]);

//Soal 5
let array2 = [5,2,4,1,3,5];
array2.sort();
console.log(array2);

//Soal 6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
for (let index = 0; index < array3.length; index++) {
    console.log(array3[index]);    
}

//Soal 7
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for (let index = 0; index < array4.length; index++) {
    if(array4[index] % 2 == 0){
        console.log(array4[index]);    
    }
}

//Soal 8
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"];
var result = kalimat.join(" ");
console.log(result);

//Soal 9
var sayuran=[];
sayuran.push('Kangkung');
sayuran.push('Bayam');
sayuran.push('Buncis');
sayuran.push('Kubis');
sayuran.push('Timun');
sayuran.push('Seledri');
sayuran.push('Tauge');
console.log(sayuran);
