// 1.什麼是物件導向，OOP ( Object-Oriented Programming)

// 物件
// 分類{：會員功能(物件)
// name, age, address
// - 新增
// - 更新
// - 刪除

// 2.基本的class寫法，new是什麼

// 3.constructor 建構函式
class User {
  // 物件建立之前執行
  constructor(name1: string) {
    console.log('物件建立之前....')
    this.name = name1
  }
  // 成員(屬性[變數]跟功能[function])

  // 屬性
  name: string
  age: number
  address: string

  // 會員功能
  add() { }
  update() { }
  delete() { }
}

// 拿到設計圖 => ???? => 建立物件

const u1 = new User('naluwan1')
const u2 = new User('naluwan2')
const u3 = new User('naluwan3')

// u1.name = 
// u2.name = 
// u3.name = 

console.log('u1', u1);
console.log('u2', u2);
console.log('u3', u3);
