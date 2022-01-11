import {  DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
    name: 'default',
    colors: {
        shadow:"rgba(21,34,50,0.08)",
        general: {
            100: '#131523',
            90: '#333752',
            80: '#5A607F',
            70: '#7E84A3',
            60: '#A1A7C4',
            50: '#D7DBEC',
            40: '#E6E9F4',
            30: '#F5F6FA'
        },
        primary: {
            100: '#1E5EFF',
            90: '#336DFF',
            80: '#4F81FF',
            70: '#608DFF',
            60: '#89ABFF',
            50: '#B6CBFF',
            40: '#D9E4FF',
            30: '#ECF2FF'
        },
        secondary: {
            100: '#6E0BD4',
            90: '#8125DF',
            80: '#9645E9',
            70: '#A75EF1',
            60: '#B97FF3',
            50: '#D8B1FF',
            40: '#E9D3FF',
            30: '#F4E9FE'
        },
        danger: {
            100: '#F0142F',
            90: '#F12B43',
            80: '#F34359',
            70: '#F45A6D',
            60: '#F8919D',
            50: '#FAB3BC',
            40: '#FCD5D9',
            30: '#FDE7EA'
        },
        success: {
            100: '#06A561',
            90: '#1FD286',
            80: '#25E191',
            70: '#48E9A5',
            60: '#74EFB9',
            50: '#95F6CC',
            40: '#C4F8E2',
            30: '#DAF9EC'
        },
        warning: {
            100: '#F99600',
            90: '#FFC700',
            80: '#FFD613',
            70: '#FFE45F',
            60: '#FFE582',
            50: '#FFECA3',
            40: '#FFF4C9',
            30: '#FFF9E1'
        }

    },
    breakpoints:{
        xl: '1140px',
        lg: '960px',
        md: '720px'
    },
    typography: {
        head:{
            h1: '80px',
            h2: '64px',
            h3: '48px',
            h4: '32px',
            h5: '24px',
            h6: '20px'
        },
        subtitles:{
            md: '20px',
            lg: '24px'
        },
        paragraph: '14px',
    }
}
