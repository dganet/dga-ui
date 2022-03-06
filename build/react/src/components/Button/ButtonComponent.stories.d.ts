/// <reference types="react" />
import { ButtonProps } from './ButtonComponent.types';
declare const _default: {
    title: string;
    component: {
        ({ children, buttonSize, buttonType, onlyIcon, disabled, icon: Icon }: ButtonProps): JSX.Element;
        displayName: string;
    };
    args: {
        buttonSize: string;
        buttonType: string;
        disabled: boolean;
        onlyIcon: boolean;
    };
    argTypes: {
        disabled: {
            control: string;
        };
        buttonSize: {
            control: {
                type: string;
                options: string[];
            };
        };
        buttonType: {
            control: {
                type: string;
                options: string[];
            };
        };
        icon: {
            control: boolean;
        };
        onlyIcon: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Primary: any;
export declare const OnlyIcon: any;
export declare const Disabled: any;
