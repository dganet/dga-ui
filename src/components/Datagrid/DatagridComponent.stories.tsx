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
                    label: 'Name',
                    width: 100,
                    key: 'name'
                },
                {
                    label: 'Email',
                    width: 100,
                    key: 'email'
                },
                {
                    label: 'cpf',
                    width: 100,
                    key: 'cpf'
                },
                {
                    label: 'Telefone',
                    width: 100,
                    key: 'phone_number'
                }
            ],
            body: [
                {
                    email: 'mateus@mobilizebrasil.com',
                    cpf: '7038636812',
                    name: '',
                    phone_number: '13996099753',
                    id: '176a67a5-0cbb-4818-8ea9-c7c5faf324e8'
                },
                {
                    email: 'claudiomsi@hotmail.com',
                    name: 'ADRIANA SAMPAIO',
                    cpf: '2543458832',
                    phone_number: '13996099609',
                    id: '80b510cd-c71e-4b8a-a0e8-0dcc15277f8d'
                }
            ]
        }}
    />
)
