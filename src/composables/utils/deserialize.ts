// 反序列化
export default function deserialize(str: string, decode: any, tag = '&') {
  let tempArr = []
  const res: any = {}
  if (str) {
    const item = str.split(tag)
    for (let i = 0; i < item.length; i++) {
      tempArr = item[i].split('=')
      res[tempArr[0]] = decode ? decodeURIComponent(tempArr[1]) : tempArr[1]
    }
    return res
  }
  else {
    return null
  }
}
