// 在infer之前，補充extends用法(Array)
// function sliceArr<T>(a: T) {
//   console.log(a.length);
// }

// 先預設Ｔ會是一個陣列
// function sliceArr<T extends Array<number>>(a: T) {
//   console.log(a.length);
// }

// infer用法
// infer就像是一個變數宣告，但是必須T有辦法extends後方的條件
// 如下面範例，T必須要是一個陣列，才有辦法去判斷陣列內的類型，才有辦法返回Ｐ
// infer P作用的時機點是當T extends Array<infer P>成立時才有用
// type TT1<T> = T extends Array<infer P> ? P : never
// type R1 = TT1<['naluwan']>
// type R2 = TT1<number>

// function用法
// type ParamType<T> = T extends (param1: infer P) => any ? P : never

// type R1 = ParamType<(a: number) => void>

// interface UserCard { name: string }
// type R2 = ParamType<(a: UserCard) => void>

// type R3 = ParamType<[]>