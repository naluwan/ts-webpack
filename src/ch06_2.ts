interface OBJ {
  name: string
}

const obg: OBJ = { name: '' }

interface UserInterface {
  // 屬性
  id: number
  name: string
  age: number
  address: string

  // 會員功能
  add: (data: any) => void
  update: (id: number) => boolean
  delete: (id: number) => boolean
}

class LiveUser implements UserInterface {
  id: number
  name: string
  age: number
  address: string

  add(data: any) { }
  update(id: number) {
    // ...
    return true
  }
  delete(id: number) {
    // ...
    return true
  }

  // 額外新增的功能
  startLive() { }
  endLive() { }
}