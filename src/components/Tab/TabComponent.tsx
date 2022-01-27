import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

import {
    Container,
    Content,
    TabTitles,
    TabCell,
    TabPanelContainer
} from './TabComponent.styles'
import { TabProps, TabPanelProps } from './TabComponent.types'

const TabComponent = ({ children, titles }: TabProps) => {
    const [activeCell, setActiveCell] = useState(0)
    const theme = useTheme()
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { indexActive: activeCell })
        }
        return child
    })

    return (
        <Container theme={theme}>
            <TabTitles theme={theme}>
                {titles?.map((element, index) => (
                    <TabCell
                        key={`${element}-${index}`}
                        data-testid="tabCell"
                        theme={theme}
                        isActive={index === activeCell}
                        onClick={() => setActiveCell(index)}
                    >
                        {element}
                    </TabCell>
                ))}
            </TabTitles>
            <Content theme={theme}>{childrenWithProps}</Content>
        </Container>
    )
}

const TabPanel = ({ children, indexActive, index }: TabPanelProps) => {
    return (
        <TabPanelContainer active={indexActive === index}>
            {children}
        </TabPanelContainer>
    )
}

export { TabComponent, TabPanel }
