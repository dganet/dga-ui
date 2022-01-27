export type ModalProps = {
    children: React.ReactNode
    title: string
    isOpen: boolean
    handleClose: () => void
}
export interface ContainerModalProps {
    isOpen: boolean
}
