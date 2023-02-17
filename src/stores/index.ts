// export const useShowRenew = defineStore('renew', () => {
//   const flag = ref(false)
//   const hiddenRenew = () => {
//     flag.value = false
//   }
//   const showRenew = () => {
//     flag.value = true
//   }
//   const changeRenew = () => {
//     flag.value = !flag.value
//   }
//   return { flag, hiddenRenew, showRenew, changeRenew }
// }, {
//   persist: {
//     enabled: true,
//     strategies: [
//       {
//         key: 'renewParam',
//         storage: localStorage,
//       },
//     ],
//   },
// })

