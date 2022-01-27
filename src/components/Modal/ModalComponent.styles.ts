import styled, { css } from 'styled-components'
import { ContainerModalProps } from './ModalComponent.types'

export interface ModalHeaderStyledProps {
    hasTitle?: boolean
}

export const Container = styled.div<ContainerModalProps>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
`
export const ModalContainer = styled.div`
    height: 208px;
    min-width: 540px;
    min-height: 208px;
    background: ${props => props.theme.colors.white};
    border-radius: 6px;
    padding: 12px;
`

export const ModalHeader = styled.div<ModalHeaderStyledProps>`
    display: flex;
    font-size: 20px;
    line-height: 28px;
    width: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: ${props => props.hasTitle
    ? 'space-between'
    : 'flex-end'};

    margin-bottom: 20px;

    svg {
        height: 19px;
        width: 15px;
        fill: ${props => props.theme.colors.general[80]};
        cursor: pointer;
    }
`
/** MODAL REGULAR */
export const ModalRegularButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const ModalRegularContainer = styled.div`
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
`
export const ModalRegularContent = styled.div`
    flex: 1;
`
