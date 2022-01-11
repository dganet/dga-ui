import React from 'react'

import InputComponent from './InputComponent'
import { BiSearch } from 'react-icons/bi'
export default {
    title: 'InputComponent',
    component: InputComponent
}

export const Default = () => (
    <InputComponent
        label="teste"
        placeholder="teste"
        icon={BiSearch}
        inputIconSide="left"
    />
)

export const Number = () => <InputComponent label="number" inputType="number" />

export const Error = () => <InputComponent label="error" error />
