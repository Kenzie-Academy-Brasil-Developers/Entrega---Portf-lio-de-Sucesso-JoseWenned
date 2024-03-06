import { forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, >((props, ref) => {

    const { type, children, onClick, ...rest } = props

    return(
        <>
            <button type={type} onClick={onClick} ref={ref} {...rest}>
                { children }
            </button>
        </>
    )
})