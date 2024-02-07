// 2) Toplamda 3 funksiyaniz olacaq.
// Verilən arrayda ilk funksiyada tək ədədləri 
// tapacaqsız.İkinci funksiyada bu tək ədədlərdən 
// 3 və 5ə bölünənləri tapib 
// Output funksiyasına göndərəcəksiz.




let resultArr=[]

function operation(arr,callback) {
    let NewArr =[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===1) {
            NewArr.push(arr[i])
        }

    }
    return callback (NewArr,Output);

}

function operationSec(NewArr,callback) {
    for (let j = 0; j < NewArr.length; j++) {
        if (NewArr[j]%15===0) {
            resultArr.push(NewArr[j])
        }
    }
    return callback(resultArr,Output)
}

function Output(output) {
    console.log(output);
}

let arr=[12,34,25,15,30,75,60,105]
operation(arr,operationSec)




