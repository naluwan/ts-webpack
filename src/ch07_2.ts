// interface 搭配 function 的泛型

interface Card<T> {
  title: string
  desc: T
}

function printCardInfo<TT>(desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: 'naluwan',
    desc
  }
  return data
}

console.log(printCardInfo<number>(9999))


// interface 搭配 class 泛型
interface CarProps<T> {
  name: T
}

class Car<TT> implements CarProps<TT>{
  name: TT
  constructor(value: TT) {
    this.name = value
  }
}

const car = new Car<string>('nalewan car')

console.log(car)