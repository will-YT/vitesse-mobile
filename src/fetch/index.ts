import { useFetcher } from '~/fetch/fetch'

// 首页
export const service = async (data?: any) => useFetcher('/', { ...data })
