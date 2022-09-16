//Soal 1
function cetakFunction() {
    return 'Hallo Nama saya Alif Andarta Al Falah';
}
console.log(cetakFunction());
//Soal 2
function myFunction(angka1, angka2) {
    return angka1 + angka2;
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output)

//Soal 3
let Hello = () => {
    return 'Hello';
}

//Soal 4
let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
}

console.log(obj.bahasa);

//Soal 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    kelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3],
}
console.log(objDaftarPeserta);

//Soal 6
let data = [
    {
        nama: 'Nanas',
        warna: 'Kuning',
        adaBijinya: 'tidak',
        harga: '9000',
    },
    {
        nama: 'Jeruk',
        warna: 'Oranye',
        adaBijinya: 'ada',
        harga: '8000',
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        adaBijinya: 'ada',
        harga: '10000',
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        adaBijinya: 'tidak',
        harga: '5000',
    }
];

let result = data.filter(buah => buah.adaBijinya === 'tidak');
console.log(result);

//Soal 7
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

const { name, brand, year } = phone;

// kode di bawah ini jangan dirubah atau dihapus
console.log(name, brand, year);

//Soal 8
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}

let objOutput = {}

// kode diatas ini jangan di rubah atau di hapus sama sekali

objOutput = { ...dataBukuTambahan, ...buku };

// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput)


//Soal 9
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil));