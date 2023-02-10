// 成員(公開、私有、受保護)

// 修飾詞 public private protected
// class UserInfo {
//   // 當成員沒有任何修飾詞，那就是public
//   name: string = 'naluwan'
//   // 當加入private
//   private age: number = 18
//   // 當加入protected
//   protected address: string = '中和員山路'
//   // 返回private成員，可以讓外面知道private成員的值且不會被改變
//   getAge() {
//     return this.age
//   }
// }

// const uInfo = new UserInfo()
// uInfo.name
// console.log(uInfo.getAge());


// class StreamerInfo extends UserInfo {
//   hello() {
//     console.log(this.address);
//     console.log(this.getAge());
//   }
// }

// const sInfo = new StreamerInfo()
// sInfo.hello()


// JS 原生私有成員寫法(2020新功能)

class UserInfo {
  // 當加入private
  #age: number = 18
  // 獲取name
  getName() {
    return this.#age
  }
}

const uInfo = new UserInfo()
console.log(uInfo.getName());

