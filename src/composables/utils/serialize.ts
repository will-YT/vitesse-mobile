// 序列化
export default function serialize(obj: any, encode?: any, tag?: any) {
  const arr = []
  for (const o in obj) {
    const value = (obj[o] === undefined || obj[o] === null) ? '' : obj[o]
    arr.push(`${o}=${encode ? encodeURIComponent(value) : value}`)
  }
  arr.sort()
  return arr.join(tag || '&')
}
