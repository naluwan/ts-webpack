// Rest參數 (function)

// 多個參數 -> func
// function calculate(...nums: number[]) {
//   console.log(nums)
// }

// calculate(1, 2, 3, 4, 5, 6, 99, 100);

function calculate(a: number, b: number, c: number) {
  console.log('a ===> ', a);
  console.log('b ===> ', b);
  console.log('c ===> ', c);

}

// 用as const 斷言宣告function 參數
const nums = [1, 2, 3] as const

calculate(...nums)