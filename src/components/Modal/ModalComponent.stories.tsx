import React from 'react'

import ModalComponent, { ModalRegular } from './ModalComponent'

export default {
    title: 'ModalComponent',
    component: ModalComponent
}

export const Default = args => (
    <ModalComponent title="Modal Title" isOpen={true} {...args} />
)
export const ModalRegularDefault = args => (
    <ModalRegular title="Modal Title" isOpen={true} {...args}>
        asdfasdf
    </ModalRegular>
)

export const Test = args => <ModalComponent {...args} />
