import { library } from '@fortawesome/fontawesome-svg-core'

import { faBars, faBook, faComputer, faGraduationCap, faHatWizard, faListSquares, faMagnifyingGlass, faPaperclip, faPlaneDeparture, faUser, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import VueTyperPlugin from 'vue-typer'

library.add(
    faHatWizard,
    faMagnifyingGlass,
    faUserPlus,
    faUser,
    faListSquares,
    faComputer,
    faBook,
    faPaperclip,
    faPlaneDeparture,
    faGraduationCap,
    faBars,
    faXmark
    )


import { createApp, VueElement } from 'vue'
import App from './App.vue'
// var VueTyperPlugin = require('vue-typer').default
// var VueTyperPlugin = window.VueTyper.default

const app = createApp(App)
// app.use(VueTyperPlugin)
app.component('my-icons', FontAwesomeIcon)

app.mount('#app')
