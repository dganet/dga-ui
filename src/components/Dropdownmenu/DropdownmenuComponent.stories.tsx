import React from 'react'

import DropdownmenuComponent, { FloatingItem } from './DropdownmenuComponent'

export default {
    title: 'DropdownmenuComponent',
    component: DropdownmenuComponent
}

export const Default = () => (
    <DropdownmenuComponent
        floatingSide="left"
        floatingItems={
            <>
                <FloatingItem>Teste</FloatingItem>
                <FloatingItem>Teste</FloatingItem>
                <FloatingItem>Teste</FloatingItem>
                <FloatingItem>Teste</FloatingItem>
            </>
        }
    >
        Meu Menu Drowdown
    </DropdownmenuComponent>
)
