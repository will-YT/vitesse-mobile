import { showToast } from 'vant'
const mockData = { lng: 116.40, lat: 39.90 }
export const usePosition = () => {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 500,
      }
      const success = (pos: any) => {
        const coords = pos.coords
        resolve({ lng: coords.longitude, lat: coords.latitude })
      }
      const error = (error: any) => {
        // switch (error.code) {
        //   case error.PERMISSION_DENIED:
        //     alert('定位失败,用户拒绝请求地理定位')
        //     break
        //   case error.POSITION_UNAVAILABLE:
        //     alert('定位失败,位置信息是不可用')
        //     break
        //   case error.TIMEOUT:
        //     alert('定位失败,请求获取用户位置超时')
        //     break
        //   case error.UNKNOWN_ERROR:
        //     alert('定位失败,定位系统失效')
        //     break
        // }
        process.env.NODE_ENV !== 'development' ? resolve(mockData) : reject(error)
      }
      if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(success, error, options)

      else
        showToast('浏览器不支持地理定位。')
    }
    catch (e) {
      reject(new Error('e'))
    }
  })
}

