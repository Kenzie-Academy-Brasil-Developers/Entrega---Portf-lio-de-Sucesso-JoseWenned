import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    type?: "submit" | "reset" | "button"
    children?: string

}