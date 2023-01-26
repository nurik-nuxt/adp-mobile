export default defineNuxtPlugin(() => {
    return {
        provide: {
            thousandSeparator: (value) => {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        }
    }
})
