import { createFetch } from '@vueuse/core'
import { showConfirmDialog, showDialog, showFailToast, showToast } from 'vant'

export const useFetcher = async (url: any, params: any) => {
  const useMyFetch = createFetch({
    baseUrl: '',
    options: {
      async beforeFetch({ options }) {
        const data = JSON.parse(options.body as any)
        if (data.signature) { data.timestamp = new Date().getTime() }
        options.body = serialize(data)
        options.headers = {
          ...options.headers,
          'Content-Type': 'application/x-www-form-urlencoded',
        }
        return { options }
      },
    },
    fetchOptions: {
      mode: 'cors',
    },
  })
  const { data } = await useMyFetch(url).post({ ...params }).json()
  return new Promise((resolve, reject) => {
    if (data.value.code === 0) {
      resolve(data.value.data)
    }
    else {
      showFailToast({ message: data.value.msg })
      reject(data.value.msg)
    }
  })
}
