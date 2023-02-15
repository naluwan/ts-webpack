// this
class CarInfo {
  title: string = '特斯拉汽車'

  constructor() {
    // this.title = ''
  }

  // 會被宣告在prototype中，只會宣告一次
  // this依照呼叫的人是誰決定
  hello() {
    console.log('this ==> ', this);
    console.log('this.title ==> ', this.title);
  }

  // 箭頭函式 只要被new出來，就會重新宣告一個新的
  // this會被綁死
  // hello = () => {
  //   console.log('this ==> ', this);
  //   console.log('this.title ==> ', this.title);
  // }
}

const carInfo = new CarInfo()

// 真正執行的地方
// this ==> carInfo
carInfo.hello()

// const hello2 = carInfo.hello
// this ==> undefined
// hello2()

const xxxCar = {
  title: 'xxx汽車',
  hello2: () => { }
}

xxxCar.hello2 = carInfo.hello
// this ==> xxxCar 誰呼叫，this就指向誰
xxxCar.hello2()