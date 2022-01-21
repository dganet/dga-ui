import React from 'react'
import Input from '../Input/InputComponent'
import CardComponent from './CardComponent'

export default {
    title: 'CardComponent',
    component: CardComponent
}

export const Default = () => (
    <CardComponent cardType="white">
        <Input placeholder="Search" />
    </CardComponent>
)
export const Shadow = () => (
    <CardComponent cardType="shadow">
        <h1>asdfasdf</h1>
    </CardComponent>
)
export const Border = () => (
    <CardComponent cardType="border">
        <h1>asdfasdf</h1>
    </CardComponent>
)
export const BorderShadow = () => (
    <CardComponent cardType="border-shadow">
        <h1>asdfasdf</h1>
    </CardComponent>
)
