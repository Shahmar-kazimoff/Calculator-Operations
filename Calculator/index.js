// 1)

// 4 esas funksiyaniz olacaq.
// (Topla(),Cixma(),Vurma(),Bolme()).
// Bir Callback funksiyaniz olacaq(Output()).
// Kalkulyator yazacaqsiz.Işləmə prinsipi aşağıdakı 
// kimi olacaq.
// Switch case olacaq 4 ədəd.
// topla,cixma,vurma,bolme caseləri olacaq.
// Key olaraq bunlardan hər hansı biri seçilsə 
// yuxarıdakı funksiyaları işlədəcək.


function calculator(num1, num2, operation) {
    switch (operation) {
        case "plus":
            Output(sum(num1, num2));
            break;
        case "minus":
            Output(subtraction(num1, num2));
            break;
        case "multiply":
            Output(multiplication(num1, num2));
            break;
        case "divide":
            Output(division(num1, num2));
            break;
        default:
            Output("Wrong operation");
    }
}


function Output(result) {
    console.log("Result: " + "is " + result);
}

function sum(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "operation failed";
    }
}



calculator(59, 6, "plus");
calculator(56, 4, "minus");
calculator(15, 3, "multiply");
calculator(30, 2, "divide");