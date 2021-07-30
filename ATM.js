BALANCE = "20000"
console.log(BALANCE, "in a accout")
console.log("******************WELCOME*********************")
console.log("******************TO ATM**********************")
const readlineSync = require("readline-sync")
var ATM_CARD = readlineSync.question("Enter the atm card  =>")
if (ATM_CARD == "insert the atm card") {
    var language = readlineSync.question("Enter the language  =>")
    if (language == "hindi" || "english" || "marathi") {
        var account = readlineSync.question("Enter the account type  =>")
        if (account == "saving" || account == "current") {
            var pin_code = readlineSync.questionInt("Enter the pin code  =>")
            if (pin_code == 1234) {
                var amount_cash = readlineSync.questionInt("Enter the amount cash  =>")
                if (amount_cash > 0 && amount_cash < 20000) {
                    console.log(amount_cash, "withdraw money")
                    console.log(20000 - amount_cash, "remaining money in ATM")
                } else {
                    console.log(amount_cash, "This amount is not your account")
                }
            } else {
                console.log("This is not your pin code")
            }
        } else {
            console.log("This is not proper account name")
        }
    } else {
        console.log("Incorrect launguage")
    }
} else {
    console.log("This is not atm card")
}