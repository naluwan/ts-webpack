// js
// function get(a, b){
//   return a + b
// }

// ts
function get(a:number, b: string, c: boolean){
  return a + b
}

get(99, '', true)

// ts function 可選參數
function set(name: string, age?: string){
  if(typeof age === 'string'){
    return age.split('')
  }
}

// return type
function getNum(){
  return 100
}

function getName(): string {
  return ''
}

// type
type Info = {
  name: string,
  age: number
}

function createUserInfo(info: Info) {
  console.log(info.name)
  console.log(info.age)
  return info
}

// never
function getUserData(): never {
  throw new Error('')
}

// void
function hello() {
  console.log('hello')
}

// 構建函式
// new
type CardObj = {
  name: string
}

type CardCreator = {
  new(name: string): CardObj
}

function createCard(cardCreator: CardCreator) {
  return new cardCreator('naluwan')
}

// return []
function getArr() {
  // return [0, 1, 'naluwan'] as const
  return [0, 1, 'naluwan'] as [number, number, string]
}

const [id, age, userName] = getArr()
// as const ==> [id: 0, age: 1, userName: 'naluwan']
// as [number, number, string] ==>  [id: number, age: number, userName: string]


