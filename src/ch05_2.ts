//  泛型
// T ==> type
function print<T>(data: T) {
  let name: T
  console.log(data)
}

// 使用的時候再決定要使用什麼type
print<string>('naluwan')
print<number>(999)
print<boolean>(true)