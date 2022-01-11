import { defaultTheme } from '../styles/defaultTheme'

export const createTheme = (theme: typeof defaultTheme) => {
    return {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors,
            ...theme.colors
        },

        name: theme.name || defaultTheme.name
    } as typeof defaultTheme
}
