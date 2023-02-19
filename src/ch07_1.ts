// 沒有使用泛型的做法
// function hello(text: string) {
//   console.log(text);
// }

// function hello2(text: number) {
//   console.log(text);
// }

// hello('naluwan')
// hello2(123123)

// 使用泛型
// T = type
function hello<T, U>(text: T, text2: U): U {
  let data: T = text
  let data2: U = text2
  console.log(text, text2);
  return data2
}

hello<string, number>('naluwan', 123123)
hello<number, boolean>(123, true)