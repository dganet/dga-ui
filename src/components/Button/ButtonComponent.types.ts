import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
    buttonSize?: "large" | "medium" | "small"
    buttonType?: "primary" | "secondary" | "destructive" | "destructiveSecondary" | "white"
    onlyIcon?: boolean
    icon?: IconType
}
