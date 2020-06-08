import Main from './components/Main.vue'
import Rules from './components/Rules.vue'
import Schedule from './components/Schedule.vue'
import Registration from './components/Registration.vue'
import Verification from './components/Verification.vue'

export default [
    {path: '/', component: Main},
    {path: '/rules', component: Rules},
    {path: '/schedule', component: Schedule},
    {path: '/registration', component: Registration, props: true},
    {path: '/verification', component: Verification}
]