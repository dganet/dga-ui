import React, { useEffect } from 'react'
import { useTheme } from '../../../hooks/useTheme/ThemeContext'
import { useToast } from '../../../hooks/useToast'
import { Container } from './styles'
import { ToastMessages } from '@hooks/useToast/ToastContext'
import { AiOutlineClose } from 'react-icons/ai'
import { ToastTypes } from '../ToastComponent.types'
interface ToastProsp {
    toast: ToastMessages
    style?: object
}

const Toast = ({ toast, style }: ToastProsp) => {
    const { removeToast } = useToast()
    const theme = useTheme()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id)
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <Container style={style} toastType={toast.type} theme={theme}>
            <div>
                <p>{toast.message}</p>
            </div>
            <button onClick={() => removeToast(toast.id)}>
                <AiOutlineClose />
            </button>
        </Container>
    )
}

export default Toast
