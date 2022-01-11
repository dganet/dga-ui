import 'styled-components'

interface Colors{
    shadow: string,
    general: {
        [key: string]: string
    }
    primary:{
        [key: string]: string
    }
    secondary:{
        [key: string]: string
    }
    success:{
        [key: string]: string
    }
    danger:{
        [key: string]: string
    }
    warning:{
        [key: string]: string
    }
}
interface Breakpoints{
    [key: string]: string
}

interface Typography{
    head:{
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        h6: string
    },
    subtitles:{
        md: string,
        lg: string
    },
    paragraph: string,
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string
        colors: Colors
        breakpoints: Breakpoints
        typography: Typography
    }
}
