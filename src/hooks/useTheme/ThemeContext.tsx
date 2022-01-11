import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react'
import { defaultTheme } from '../../styles/defaultTheme'
import { DefaultTheme } from 'styled-components'

interface ThemeContextData {
    getCurrentTheme: () => typeof defaultTheme
}

interface ICustomThemeProvider {
    children: React.ReactNode
    theme?: typeof defaultTheme
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const CustomThemeProvider = ({ children, theme }: ICustomThemeProvider) => {
    const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(defaultTheme)

    useEffect(() => {
        if (theme) {
            setCurrentTheme(theme)
        } else {
            setCurrentTheme(defaultTheme)
        }
    })

    const getCurrentTheme = useCallback(
        () => currentTheme as typeof defaultTheme,
        [currentTheme]
    )

    return (
        <ThemeContext.Provider value={{ getCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): typeof defaultTheme {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error(
            'useCustomTheme must be used within a CustomThemeProvider'
        )
    }

    return context.getCurrentTheme()
}

export { useTheme, CustomThemeProvider }
