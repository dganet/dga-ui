import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonSize?: "large" | "medium" | "small";
    buttonType?: "primary" | "secondary" | "destructive" | "destructiveSecondary" | "white";
    onlyIcon?: boolean;
    icon?: IconType;
}
