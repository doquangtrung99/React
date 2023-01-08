import TestPage from "../pages/TestPage"
import { HomePage } from '../pages'

export const publishroute = [
    {
        path: '/testpage', component: TestPage, layout: false
    },
    {
        path: '/', component: HomePage, layout: true
    }
]

