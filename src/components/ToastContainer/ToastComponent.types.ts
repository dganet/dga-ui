import { ToastMessages } from '../../hooks/useToast/ToastContext'

export type ToastProps = {
    messages: ToastMessages[]
    content?: string
}

export type ToastTypes = 'info'| 'lightInfo' | 'success' | 'lightSuccess' | 'warning' | 'lightWarning' | 'error' | 'lightError';

export interface ToastStyled {
    toastType: ToastTypes
}
