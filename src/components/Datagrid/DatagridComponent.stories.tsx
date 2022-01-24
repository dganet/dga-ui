import React from 'react'

import DatagridComponent from './DatagridComponent'

export default {
    title: 'DatagridComponent',
    component: DatagridComponent
}

export const Default = () => (
    <DatagridComponent
        data={{
            header: [
                {
                    label: '110',
                    width: 110
                },
                {
                    label: '80',
                    width: 80
                },
                {
                    label: 'Name',
                    width: 100
                },
                {
                    label: 'Name',
                    width: 100
                },
                {
                    label: 'Name',
                    width: 100
                },
                {
                    label: 'Name',
                    width: 100
                }
            ],
            body: [
                [
                    { label: 'n1' },
                    { label: 'n2' },
                    { label: 'n3' },
                    { label: 'n4' },
                    { label: 'n5' },
                    { label: 'n6' }
                ],
                [
                    { label: 'n1' },
                    { label: 'n2' },
                    { label: 'n3' },
                    { label: 'n4' },
                    { label: 'n5' },
                    { label: 'n6' }
                ],
                [
                    { label: 'n1' },
                    { label: 'n2' },
                    { label: 'n3' },
                    { label: 'n4' },
                    { label: 'n5' },
                    { label: 'n6' }
                ]
            ]
        }}
    />
)
