import React from 'react'

import DatagridComponent from './DatagridComponent'

export default {
    title: 'DatagridComponent',
    component: DatagridComponent
}

export const Default = () => (
    <DatagridComponent
        defaultPage={1}
        pageAmount={10}
        amountRegister={100}
        rowClick={id => console.log(id)}
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
                {
                    rowId: '1',
                    items: [
                        { label: 'teste' },
                        { label: 'teste' },
                        { label: 'teste' },
                        { label: 'teste' },
                        { label: 'teste' }
                    ]
                },
                {
                    rowId: '2',
                    items: [
                        { label: 'teste1' },
                        { label: 'teste1' },
                        { label: 'teste1' },
                        { label: 'teste1' },
                        { label: 'teste1' }
                    ]
                },
                {
                    rowId: '3',
                    items: [
                        { label: 'teste2' },
                        { label: 'teste2' },
                        { label: 'teste2' },
                        { label: 'teste2' },
                        { label: 'teste2' }
                    ]
                },
                {
                    rowId: '4',
                    items: [
                        { label: 'teste3' },
                        { label: 'teste3' },
                        { label: 'teste3' },
                        { label: 'teste3' },
                        { label: 'teste3' }
                    ]
                },
                {
                    rowId: '5',
                    items: [
                        { label: 'teste4' },
                        { label: 'teste4' },
                        { label: 'teste4' },
                        { label: 'teste4' },
                        { label: 'teste4' }
                    ]
                },
                {
                    rowId: '6',
                    items: [
                        { label: 'teste5' },
                        { label: 'teste5' },
                        { label: 'teste5' },
                        { label: 'teste5' },
                        { label: 'teste5' }
                    ]
                }
            ]
        }}
    />
)
