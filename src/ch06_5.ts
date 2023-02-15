// static 靜態(可以被共用的東西？)
class Bank {
  private static balance: number = 1000
  static withdraw(money: number) {
    if (this.balance <= 0) return
    this.balance -= money
  }
  static getBalance() {
    return this.balance
  }
}

// 用static是希望所有的地方都可以共用，不然bb1銀行和bb2銀行領錢時，金額都是各自為主的，無法同步
// const bb1 = new Back()
// const bb2 = new Back()

// 加private可以預防直接透過class的變數直接修改
// Bank.balance = 9999999999

function userAWithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalance());
}

function userBWithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalance());
}

userAWithdraw(300)
userBWithdraw(400)