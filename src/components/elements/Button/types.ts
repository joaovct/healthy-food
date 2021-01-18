type ButtonStyle = 'primary' | 'secondary' | 'bold-primary' | 'bold-secondary'
export interface ButtonProps{
    btnStyle?: ButtonStyle
    effects?: {
        boxShadow?: boolean
        boxShadowOnHover?: boolean
        blur?: boolean
    }
}