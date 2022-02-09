import React from 'react'
import Divider from '../Divider/DividerComponent'
import DropdownmenuComponent, { FloatingItem } from './DropdownmenuComponent'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
export default {
    title: 'DropdownmenuComponent',
    component: DropdownmenuComponent
}

export const Default = () => (
    <DropdownmenuComponent
        floatingSide="left"
        floatingItems={
            <>
                <FloatingItem>
                    <AiOutlineHeart /> Menu Name
                </FloatingItem>
                <FloatingItem>Teste</FloatingItem>
                <FloatingItem>Teste</FloatingItem>
                <FloatingItem>Teste</FloatingItem>
                <Divider />
                <FloatingItem>
                    <BiLogOut /> Log Out
                </FloatingItem>
            </>
        }
    >
        Meu Menu Drowdown
    </DropdownmenuComponent>
)
