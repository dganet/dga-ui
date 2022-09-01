import { ReactNode } from "react"

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = {
    colGap?: number
    rowGap?: number
    children: ReactNode
}


export type RowProps = {
    centralize?: boolean;
    children: ReactNode;
}

export type RowStyleProps ={
    gap?: number
    centralize: boolean
}

export type ColProps = {
    xl?: GridSize
    lg?: GridSize
    md?: GridSize
    sm?: GridSize
    xs?: GridSize
    children: ReactNode;
}

export type ColStyleProps = {
    gap?: number;
    xl?: GridSize
    lg?: GridSize
    md?: GridSize
    sm?: GridSize
    xs?: GridSize
}
