//task1
// const arr=[23,5,1,3,12,4,9,81,7,11,22,31,6]

// function maximumEven(arr) {
//     let maxArrElement = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0 && maxArrElement<arr[i]){
//             maxArrElement = arr[i]
//         }

//     }
// return maxArrElement
// }
// function minimumOdd(arr) {
//     let minArrElement = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] %2 !==0 && minArrElement>arr[i]){
//             minArrElement = arr[i]
//         }

//     }
//     return minArrElement
// }
// let maxEven = maximumEven(arr)
// let minOdd = minimumOdd(arr)
// // console.log(maxEven);
// // console.log(minOdd);

// console.log("Evvelki array:",arr);
// arr[arr.indexOf(maxEven)] = minOdd
// arr[arr.indexOf(minOdd)] = maxEven

// console.log("Deyisdirilmis array: ",arr);


//taks11111
const arr=[23,5,1,3,12,4,9,81,7,11,22,31,6]
function checkEven(arr) {
    let maxEven=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0 && arr[i]>maxEven) {
            maxEven=arr[i]
        }
    }
    return maxEven
}
function checkOdd(arr) {
    let minOdd=arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!=0 && arr[i]<minOdd) {
            minOdd=arr[i]
        } 
    }
    return minOdd
}
// console.log(checkEven(arr));
// console.log(checkOdd(arr));
// arr[arr.indexOf(checkEven(arr))]=checkOdd(arr)
// arr[arr.indexOf(checkOdd(arr))]=checkEven(arr)
// console.log(arr);
let maxEven = checkEven(arr)
let minOdd = checkOdd(arr)
// console.log(maxEven);
// console.log(minOdd);

console.log("Evvelki array:",arr);
// console.log(arr.indexOf(maxEven))
// console.log(arr.indexOf(minOdd))

arr[arr.indexOf(maxEven)] = minOdd 
arr[arr.indexOf(minOdd)] = maxEven

console.log("Deyisdirilmis array: ",arr);

//task2
// var arr = [
//   { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//   { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//   { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//   { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//   {
//     urunAdi: "Tavuk Göğsü",
//     fiyat: 15.0,
//     stok: 30,
//     kategori: "Et ve Et Ürünleri",
//   },
//   { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//   {
//     urunAdi: "Ton Balığı",
//     fiyat: 10.0,
//     stok: 20,
//     kategori: "Konserve ve Hazır Yiyecekler",
//   },
//   { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//   { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//   { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
// ];

// function moreThanFifty(arr) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].stok>50){
//             newArr.push(arr[i])
//         }

//     }
//     return newArr
// }

// console.log(moreThanFifty(arr));

//task3
// var arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri",},
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler",},
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
//   ];

// function showMeyveAndSebze(arr) {
//     let meyveVeSebzeler = []

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].kategori === "Meyve ve Sebzeler")
//     meyveVeSebzeler.push(arr[i])
// }

// return meyveVeSebzeler
// }

// console.log(showMeyveAndSebze(arr));

//task4

// var arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri",},
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler",},
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
//   ];

// function showMeyveAndSebze(arr) {
//     let meyveVeSebzeler = []

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].kategori === "Meyve ve Sebzeler" && arr[i].stok > 2)
//     meyveVeSebzeler.push(arr[i])
// }


// return meyveVeSebzeler
// }

// console.log(showMeyveAndSebze(arr));

//task5

// var arr = [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// function CheckSut(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].urunAdi === "Süt"){
//             return true
//         }

//     }

// return false
// }

// console.log(CheckSut(arr));

//task6

// var arr = [
//   { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//   { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//   { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//   { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//   { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri", },
//   { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//   { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler",  },
//   { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//   { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//   { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
// ];

// function ShowIndexOfTonFish(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].urunAdi === "Ton Balığı") {
//       return i;
//     }
//   }
// }
// console.log(ShowIndexOfTonFish(arr));
