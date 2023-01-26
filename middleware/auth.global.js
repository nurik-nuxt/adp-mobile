import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    // let { isAuthenticated } = useAuthStore()
    //
    // if (to.name === 'login' || to.name === 'registration') {
    //     if (isAuthenticated) {
    //         return navigateTo({ name: 'index' })
    //     }
    //
    //     // if (from.name === 'login') {
    //     //   if (isAuthenticated) {
    //     //     return navigateTo({ name: 'index' })
    //     //   }
    //     // } else {
    //     //   if (isAuthenticated) {
    //     //     return abortNavigation()
    //     //   }
    //     // }
    // } else {
    //     if (!isAuthenticated) {
    //         return navigateTo({ name: 'login' })
    //     }
    // }
})
