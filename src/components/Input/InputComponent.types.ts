import React, { InputHTMLAttributes, ReactElement } from "react";
import { IconType } from "react-icons";

export interface  InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    inputSize?: "large"| "medium" | "small"
    inputType?: "regular"|"icon"|"media" | "number"
    inputIconSide?: "left" | "right"
    icon?: IconType
    error?: boolean
    success?: boolean
}
