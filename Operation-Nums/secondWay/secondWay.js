// 2) Toplamda 3 funksiyaniz olacaq.
// Verilən arrayda ilk funksiyada tək ədədləri 
// tapacaqsız.İkinci funksiyada bu tək ədədlərdən 
// 3 və 5ə bölünənləri tapib 
// Output funksiyasına göndərəcəksiz.



let resultArr = [];

function operation(arr, callback) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
        }
    }

    return callback(arr, output);
}

function operationSec(arr, callback) {
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] % 15 !== 0) {
            arr.splice(j, 1);
        }
    }

    resultArr = arr.slice();

    return callback(resultArr);
}

function output(output) {
    console.log(output);
}

let arr = [41, 34, 25, 225, 30, 75, 60, 135, 165];
operation(arr, operationSec);