import { concat } from 'lodash-es'

export function hello(to: string = 'World') {
  const txt = `Hello ${to}!`
  alert(txt)
  return txt
}

// 生成个随机函数
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 合并数组
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns 合并后的数组
 */
export function concatArray(arr1: number[], arr2: number[]) {
  return concat(arr1, arr2)
}
