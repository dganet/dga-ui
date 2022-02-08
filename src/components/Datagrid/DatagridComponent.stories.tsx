import React from 'react'

import DatagridComponent from './DatagridComponent'

export default {
    title: 'DatagridComponent',
    component: DatagridComponent
}

export const Default = () => (
    <DatagridComponent
        defaultPage={1}
        pageAmount={18}
        amountRegister={100}
        rowClick={id => console.log(id)}
        onChangePage={page => console.log(page)}
        data={{
            header: [
                { width: 100, label: 'Nome', key: 'name' },
                { width: 100, label: 'Email', key: 'email' },
                { width: 100, label: 'CPF', key: 'cpf' },
                {
                    width: 100,
                    label: 'Telefone',
                    key: 'phone_number'
                }
            ],
            body: [
                {
                    id: '176a67a5-0cbb-4818-8ea9-c7c5faf324e8',
                    name: '',
                    email: 'mateus@mobilizebrasil.com',
                    cpf: '7038636812',
                    phone_number: '13996099753'
                },
                {
                    id: '80b510cd-c71e-4b8a-a0e8-0dcc15277f8d',
                    name: 'ADRIANA SAMPAIO',
                    email: 'claudiomsi@hotmail.com',
                    cpf: '2543458832',
                    phone_number: '13996099609'
                },
                {
                    id: 'e34eb99a-e765-4447-bc32-ab56176a109f',
                    name: 'ADRIANA SAMPAIO',
                    email: 'andremerli74@gmail.com',
                    cpf: '10907926894',
                    phone_number: '13996099603'
                },
                {
                    id: '55a70825-ed85-4845-b7df-765251bb0ada',
                    name: ' ALAN UCHOA PELLEJERO',
                    email: 'daisyess@gmail.com',
                    cpf: '36043276879',
                    phone_number: '13996099610'
                },
                {
                    id: '0cd7a14b-e87f-4984-a548-bf1d73955417',
                    name: 'ALAN UCHOA PELLEJERO',
                    email: 'zxhbpg@jmurip.com',
                    cpf: '5459322979',
                    phone_number: '13996099604'
                },
                {
                    id: '811125f2-dcf4-4339-b48a-9c295af8eefd',
                    name: ' ALEXANDRE ROGÉRIO BRAZ',
                    email: 'daniel.abr@hotmail.com',
                    cpf: '33891563809',
                    phone_number: '13996099611'
                },
                {
                    id: '759c48ac-8283-4c87-b021-983af21f450c',
                    name: 'ALEXANDRE ROGÉRIO BRAZ',
                    email: 'pmlxew@veracg.com',
                    cpf: '11533741883',
                    phone_number: '13996099605'
                },
                {
                    id: '9a06af2d-4603-4fce-88ee-bfc43b77acce',
                    name: ' ALINE APARECIDA JUSTO',
                    email: 'deuzimarcorreiadesantana@gmail.com',
                    cpf: '14527912879',
                    phone_number: '13996099612'
                },
                {
                    id: '48937a82-3680-457b-81eb-931025913ec0',
                    name: 'ALINE APARECIDA JUSTO',
                    email: 'cgbvud@lxvhhq.com',
                    cpf: '37909198884',
                    phone_number: '13996099606'
                },
                {
                    id: '773028de-157f-485d-bb20-71101438117b',
                    name: ' ALINE NUNES DE OLIVEIRA MACHADO DOS SANTOS',
                    email: 'dfqjjd@fettiv.com',
                    cpf: '25244395858',
                    phone_number: '13996099613'
                },
                {
                    id: 'e793c232-5d01-48d2-9a44-e49045dad9e6',
                    name: ' ALINE REGINA DA ROCHA ',
                    email: 'diego.gregb@hotmail.com',
                    cpf: '29247183847',
                    phone_number: '13996099614'
                },
                {
                    id: 'cd57ba17-e046-4f45-ab60-f4299c881db3',
                    name: 'ALINE REGINA DA ROCHA',
                    email: 'carmed@usp.br',
                    cpf: '27672903829',
                    phone_number: '13996099607'
                },
                {
                    id: '7b81db01-6522-4f03-bb26-d0d7c82ee7c8',
                    name: ' ÁLVARO LUIS SILVA SIQUEIRA',
                    email: 'ucmnyo@afyyrn.com',
                    cpf: '18089517862',
                    phone_number: '13996099615'
                },
                {
                    id: '1af36b9f-da4e-40cc-b5a9-ed607e048ff7',
                    name: ' AMANDA GOUVEIA ALVES',
                    email: 'Edu.itaperuna@gmail.com',
                    cpf: '6771704831',
                    phone_number: '13996099616'
                },
                {
                    id: '4a24153d-79a1-46c7-a4b6-940f08d0153a',
                    name: 'AMANDA GOUVEIA ALVES',
                    email: 'caueameni@gmail.com',
                    cpf: '34462183860',
                    phone_number: '13996099608'
                }
            ]
        }}
    />
)
