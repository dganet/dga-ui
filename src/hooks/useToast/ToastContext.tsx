import ToastComponent from '@components/ToastContainer/ToastComponent'
import { ToastTypes } from '@components/ToastContainer/ToastComponent.types'
import React, { useCallback, useState } from 'react'
import { v4 } from 'uuid'
interface ToastContextData {
    addToast(messages: Omit<ToastMessages, 'id'>): void
    removeToast(id: string): void
}

export interface ToastMessages {
    id: string
    type: ToastTypes
    message: string
}
const toastContext = React.createContext<ToastContextData>(
    {} as ToastContextData
)

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessages[]>([])

    const addToast = useCallback(
        ({ type, message }: Omit<ToastMessages, 'id'>) => {
            const id = v4()
            const toast = {
                id,
                type,
                message
            }
            setMessages(prev => [...prev, toast])
        },
        []
    )

    const removeToast = useCallback((id: string) => {
        setMessages(prev => prev.filter(message => message.id !== id))
    }, [])

    return (
        <toastContext.Provider value={{ removeToast, addToast }}>
            {children}
            <ToastComponent messages={messages} />
        </toastContext.Provider>
    )
}

function useToast(): ToastContextData {
    const context = React.useContext(toastContext)

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }

    return context
}

export { ToastProvider, useToast }
