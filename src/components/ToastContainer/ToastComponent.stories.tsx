import React from 'react'
import { useToast } from '../../hooks/useToast/ToastContext'

import ToastComponent from './ToastComponent'

export default {
    title: 'ToastbarComponent',
    component: ToastComponent
}

export const Default = () => {
    const { addToast } = useToast()
    return (
        <button
            onClick={() =>
                addToast({
                    message: 'Hello World',
                    type: 'success'
                })
            }
        >
            Adicionar toast
        </button>
    )
}
