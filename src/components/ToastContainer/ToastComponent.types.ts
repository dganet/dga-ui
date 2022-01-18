import { ToastMessages } from '../../hooks/useToast/ToastContext'

export type ToastProps = {
    messages: ToastMessages[]
    content?: string
}
