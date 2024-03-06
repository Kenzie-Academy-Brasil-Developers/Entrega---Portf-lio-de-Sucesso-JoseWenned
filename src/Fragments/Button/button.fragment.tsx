import { forwardRef } from "react"
import { IButtonProps } from "../../Interfaces/Button/button.interface"

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {

    const { type, children, onClick, ...rest } = props

    return(
        <>
            <button type={type} onClick={onClick} ref={ref} {...rest}>
                { children }
            </button>
        </>
    )
})