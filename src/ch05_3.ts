// overload function重載

// 多個一樣名稱的function
// function getData(data: string) {
//   // ...
// }

// function getData(data: number) {
//   // ...
// }

function getData(data: string): void
function getData(data: number): void
function getData(data: boolean): void
// function getData(data: string | number) {
//   console.log()
// }
function getData(data: unknown) {
  console.log()
}

getData(99)
getData('123')
getData(false)