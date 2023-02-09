// ===== extends =====
// class Animal {
//   name: string
//   run() {
//     console.log('run......');
//   }
// }

// class Dog extends Animal {
//   // 會覆蓋
//   run() {
//     console.log('dog run......');
//   }
// }
// class Cat extends Animal { }

// const d1 = new Dog()
// d1.run()

// const c1 = new Cat()
// c1.run

// ===== constructor, super =====
// class Animal {
//   name: string
//   constructor(name1: string) {
//     this.name = name1
//   }
//   run() {
//     console.log('run......', this.name);
//   }
// }

// class Dog extends Animal {
//   // 會覆蓋
//   run() {
//     // super可以呼叫父層的東西
//     super.run()
//     console.log('dog run......');
//   }
// }

// const d1 = new Dog('皮蛋')
// d1.run()

// ===== abstract (抽象類別)=====
abstract class Animal {
  run() {
    console.log('run......');
  }
  abstract hello(): void
}

class Dog extends Animal {
  hello(): void {

  }
}

// const d1 = new Dog()
// d1.run()