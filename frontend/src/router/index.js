import Vue from 'vue'
import Router from 'vue-router'
import DomainList from '@/components/domains/DomainList'
import DomainForm from '@/components/domains/DomainForm'
import ParametersForm from '@/components/parameters/ParametersForm'
import LogList from '@/components/logs/LogList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/domains/',
            name: 'DomainList',
            component: DomainList
        },
        {
            path: '/domains/add/',
            name: 'DomainAdd',
            component: DomainForm
        },
        {
            path: '/domains/:domainPk([0-9]+)/',
            name: 'DomainEdit',
            component: DomainForm
        },
        {
            path: '/parameters/:app',
            name: 'ParametersEdit',
            component: ParametersForm
        },
        {
            path: '/logs/',
            name: 'LogList',
            component: LogList
        }
    ]
})