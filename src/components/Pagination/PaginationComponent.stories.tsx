import React from 'react'

import PaginationComponent from './PaginationComponent'

export default {
    title: 'PaginationComponent',
    component: PaginationComponent
}

export const Default = () => (
    <PaginationComponent
        defaultPage={1}
        onChange={id => console.log(id)}
        count={10}
    />
)
