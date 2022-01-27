import React from 'react'

import { TabComponent, TabPanel } from './TabComponent'

export default {
    title: 'TabComponent',
    component: TabComponent
}

export const Default = () => (
    <TabComponent titles={['Informaçoes Básicas', 'Endereço']}>
        <TabPanel index={0}>asdfasdf</TabPanel>
        <TabPanel index={1}>1212341234123</TabPanel>
    </TabComponent>
)
