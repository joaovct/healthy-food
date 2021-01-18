export interface Props{
    image?: {
        src: string
        alt: string
    }
    options?: {
        flow?: "row" | "column" 
    }
}