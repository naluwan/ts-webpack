// keyof

interface UserCard {
  name: string
  age: number
  cardTitle: string
  cardDesc: string
}

type T1 = keyof UserCard

// 'name' | 'age' | 'cardTitle' | 'cardDesc'
const a: T1 = 'name'

// 泛型
// 告訴typescript，T是一個物件，使用extends keyof把T的key給K，讓K可以當作Ｔ裡面的一個key
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}