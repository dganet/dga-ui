export type TabProps = {
    children: React.ReactNode
    titles: string[]
}

export interface TabPanelProps {
    children: React.ReactNode
    indexActive?: number
    index: number
}
