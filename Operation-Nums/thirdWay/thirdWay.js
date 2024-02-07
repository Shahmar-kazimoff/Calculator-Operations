// 2) Toplamda 3 funksiyaniz olacaq.
// Verilən arrayda ilk funksiyada tək ədədləri 
// tapacaqsız.İkinci funksiyada bu tək ədədlərdən 
// 3 və 5ə bölünənləri tapib 
// Output funksiyasına göndərəcəksiz.



let resultArr = [];

function operation(arr, callback) {
    arr = arr.map((num) => (num % 2 !== 0 && num % 15 === 0 ? num : null)).filter((num) => num !== null);
    return callback(arr, output);
}

function output(output) {
    console.log(output);
}

let arr = [41, 34, 25, 225, 30, 75, 60, 135, 165];
operation(arr, output);

