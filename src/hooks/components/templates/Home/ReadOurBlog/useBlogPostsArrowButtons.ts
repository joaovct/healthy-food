import { useEffect, useRef, useState } from "react"
import { ShowArrows, Hook } from "./types"

const useBlogPostsArrowButtons: Hook = ({cardGap, cardWidth}) => {
    const [showArrows, setShowArrows] = useState<ShowArrows>({prev: false, next: true})
    const innerPostsRef = useRef<HTMLDivElement>(null)

    const manageArrowsState = () => {
        const element = innerPostsRef.current
        if(element){
            let state: ShowArrows = {prev: false, next: true}
            
            if(element.scrollLeft > cardGap){
                state = {...state, prev: true}
            }else{
                state = {...state, prev: false}
            }

            if(element.offsetWidth + element.scrollLeft >= element.scrollWidth){
                state = {...state, next: false}
            }else{
                state = {...state, next: true}
            }

            setShowArrows(state)
        }
    }

    const clickPrevArrow = () => {
        if(innerPostsRef.current){
            innerPostsRef.current.scrollLeft -= cardWidth + cardGap
            setTimeout(manageArrowsState, 750)
        }
    }
    const clickNextArrow = () => {
        if(innerPostsRef.current){
            innerPostsRef.current.scrollLeft += 348 + 48
            setTimeout(manageArrowsState, 750)
        }
    }

    useEffect(manageArrowsState,[innerPostsRef])

    return {
        showArrows,
        clickPrevArrow,
        clickNextArrow,
        innerPostsRef
    }
}

export default useBlogPostsArrowButtons