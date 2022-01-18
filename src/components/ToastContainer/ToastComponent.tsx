import React from 'react'
import Toast from './Toast'
import { useTransition } from 'react-spring'
import { Container } from './ToastComponent.styles'
import { ToastProps } from './ToastComponent.types'

const ToastComponent = ({ messages }: ToastProps) => {
    const messageWithTransitions = useTransition(messages, {
        from: { bottom: '-120%', opacity: 0 },
        enter: { bottom: '0%', opacity: 1 },
        leave: { bottom: '-120%', opacity: 0 }
    })
    return (
        <Container>
            {messageWithTransitions((props, item) => {
                return <Toast key={item.id} toast={item} style={props} />
            })}
        </Container>
    )
}

export default ToastComponent
