import {createStore} from 'vuex'

import rentalModule from './modules/rentals/index'
import requestModule from './modules/requests/index'
import authModule from './modules/auth/index'

const store = createStore({
    modules: {
        rentals: rentalModule,
        requests: requestModule,
        auth: authModule
    },
})

export default store