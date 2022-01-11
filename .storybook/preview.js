import React from 'react'

import { CustomThemeProvider } from '../src/hooks/useTheme/ThemeContext'
import { ToastProvider } from '../src/hooks/useToast'

export const decorators = [
    Story => (
        <CustomThemeProvider>
            <ToastProvider>
                <Story />
            </ToastProvider>
        </CustomThemeProvider>
    )
]
