import { RefObject } from "react";

export interface ShowArrows{
    prev: boolean
    next: boolean
}

export type Hook = ({cardWidth, cardGap}: {cardWidth: number, cardGap: number}) => {
    clickPrevArrow: () => void
    clickNextArrow: () => void
    showArrows: ShowArrows
    innerPostsRef: RefObject<HTMLDivElement>
}