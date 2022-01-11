import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement, FC } from 'react'
import { defaultTheme } from '../styles/defaultTheme'
import { CustomThemeProvider } from '../hooks/useTheme/ThemeContext'

const Providers: FC = ({ children }) => {
    return (
        <CustomThemeProvider theme={defaultTheme}>
            {children}
        </CustomThemeProvider>
    )
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
