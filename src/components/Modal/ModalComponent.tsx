import { useTheme } from '../../hooks/useTheme'
import React, { memo, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import {
    Container,
    ModalContainer,
    ModalHeader,
    ModalRegularButton,
    ModalRegularContainer,
    ModalRegularContent
} from './ModalComponent.styles'
import { ModalProps } from './ModalComponent.types'
import Button from '../Button/ButtonComponent'

const ModalDOM = ({ children }: { children: React.ReactNode }) => {
    if (typeof window !== 'undefined') {
        const modalRoot =
            document.querySelector('modal-root') ||
            document.createElement('div')
        modalRoot.setAttribute('id', 'modal-root')

        useEffect(() => {
            document.body.appendChild(modalRoot)

            return () => {
                document.body.removeChild(modalRoot)
            }
        }, [modalRoot])

        return ReactDOM.createPortal(children, modalRoot)
    }
    return null
}

const ModalComponent = ({
    children,
    title,
    isOpen = false,
    handleClose
}: ModalProps) => {
    const theme = useTheme()
    return (
        <ModalDOM>
            <Container theme={theme} isOpen={isOpen}>
                <ModalContainer theme={theme}>
                    <ModalHeader theme={theme} hasTitle={!!title}>
                        {title}
                        <div onClick={handleClose}>
                            <AiOutlineClose />
                        </div>
                    </ModalHeader>
                    {children}
                </ModalContainer>
            </Container>
        </ModalDOM>
    )
}

export const ModalRegular = ({ children, ...rest }: ModalProps) => {
    const theme = useTheme()
    return (
        <ModalComponent {...rest}>
            <ModalRegularContainer theme={theme}>
                <ModalRegularContent>{children}</ModalRegularContent>
                <ModalRegularButton>
                    <Button
                        style={{ marginRight: '10px' }}
                        buttonSize="medium"
                        buttonType="white"
                    >
                        Cancel
                    </Button>
                    <Button buttonSize="medium">Confirm</Button>
                </ModalRegularButton>
            </ModalRegularContainer>
        </ModalComponent>
    )
}

export default memo(ModalComponent)
