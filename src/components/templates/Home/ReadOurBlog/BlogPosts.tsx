import React from 'react'
import styled from 'styled-components'
import Card, {CardStyled, CardFigure, CardContent} from '../../../modules/Card/Card'
import {H3 as Subtitle} from '../../../elements/Subtitle/Subtitle'
import page from '../../../elements/Page/Page'
import breakpoints from '../../../../styles/breakpoints'
import image1 from '../../../../assets/images/home/blog-post-1.png'
import author1 from '../../../../assets/images/home/author-post-1.png'
import image2 from '../../../../assets/images/home/blog-post-2.png'
import author2 from '../../../../assets/images/home/author-post-2.png'
import image3 from '../../../../assets/images/home/blog-post-3.png'
import author3 from '../../../../assets/images/home/author-post-3.png'
import image4 from '../../../../assets/images/home/blog-post-4.png'
import author4 from '../../../../assets/images/home/author-post-4.png'
import {ReactComponent as Arrow} from '../../../../assets/images/svg/icons/arrow.svg'
import colors from '../../../../styles/colors';
import { ShowArrows } from '../../../../hooks/components/templates/Home/ReadOurBlog/types';
import useBlogPostsArrowButtons from '../../../../hooks/components/templates/Home/ReadOurBlog/useBlogPostsArrowButtons';

const cardWidth = 348
const cardGap = 48

const BlogPosts = () => {
    const {showArrows, innerPostsRef, clickPrevArrow, clickNextArrow} = useBlogPostsArrowButtons({cardWidth, cardGap})

    return(
        <Page>
            <ButtonArrow showArrows={showArrows} onClick={clickPrevArrow}>
                <Arrow/>
            </ButtonArrow>
            <ButtonArrow showArrows={showArrows} onClick={clickNextArrow}>
                <Arrow/>
            </ButtonArrow>
            <InnerBlogPosts ref={innerPostsRef}>
                <WrapperCard>
                    <Card
                        image={{
                            src: image1,
                            alt: "Quick-start guide to nuts and seeds"
                        }}
                        options={{flow: 'column'}}
                    >
                        <Subtitle>Quick-start guide <br/> to nuts and seeds</Subtitle>
                        <Author>
                            <img src={author1}/>
                            <span>Kevin Ibrahim</span>
                        </Author>
                    </Card>
                </WrapperCard>
                <WrapperCard>
                    <Card
                        image={{
                            src: image2,
                            alt: "Nutrition: Tips for Improving Your Health"
                        }}
                        options={{flow: 'column'}}
                    >
                        <Subtitle>Nutrition: Tips for <br/> Improving Your Health</Subtitle>
                        <Author>
                            <img src={author2}/>
                            <span>Kevin Ibrahim</span>
                        </Author>
                    </Card>
                </WrapperCard>
                <WrapperCard>
                    <Card
                        image={{
                            src: image3,
                            alt: "The top 10 benefits of eating healthy"
                        }}
                        options={{flow: 'column'}}
                    >
                        <Subtitle>The top 10 benefits <br/> of eating healthy</Subtitle>
                        <Author>
                            <img src={author3}/>
                            <span>Kevin Ibrahim</span>
                        </Author>
                    </Card>
                </WrapperCard>
                <WrapperCard>
                    <Card
                        image={{
                            src: image4,
                            alt: "What Makes a Healthy Diet?"
                        }}
                        options={{flow: 'column'}}
                    >
                        <Subtitle>What Makes a <br/>Healthy Diet?</Subtitle>
                        <Author>
                            <img src={author4}/>
                            <span>Kevin Ibrahim</span>
                        </Author>
                    </Card>
                </WrapperCard>
            </InnerBlogPosts>
        </Page>
    )
}

export default BlogPosts

const ButtonArrow = styled.button<{showArrows: ShowArrows}>`
    --size: 56px;
    --margin: 40px;
    height: var(--size);
    width: var(--size);
    position: absolute;
    top: calc(50% - var(--size) / 2);
    right: var(--margin);
    z-index: 1;
    background: ${colors.white};
    box-shadow: 0px 15px 30px #4099F114;
    border-radius: 100%;
    cursor: pointer;
    transition: .25s opacity;

    svg{
        width: 19px;
    }

    &:first-child{
        right: 0;
        left: var(--margin);
        transform: rotate(180deg);
        box-shadow: 0px -15px 30px #4099F114;
    
        ${({showArrows}) => {
            if(showArrows.prev === false) return `
                opacity: 0;
                pointer-events: none;
            `
            return `
                opacity: 1;
            `
        }}
    }

    &:nth-child(2){
        ${({showArrows}) => {
            if(showArrows.next === false) return `
                opacity: 0;
                pointer-events: none;
            `
            return `
                opacity: 1;
            `
        }}
    }

    @media(max-width: ${breakpoints.tbl}){
        --size: 64px;
        svg{
            width: 24px;
        }
    }

    @media(max-width: 768px){
        display: none;
    }
`

const Author = styled.figure`
    margin: 24px 0 0 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    img{
        height: 52px;
        width: 52px;
        object-fit: cover;
        border-radius: 100%;
    }

    span{
        margin: 0 0 0 8px;
    }
`

const WrapperCard = styled.div`
    margin: 0 ${cardGap / 2}px 0 0;
    box-sizing: border-box;

    &:first-child{
        margin-left: ${cardGap / 2}px;

        @media(min-width: 1196px){
            margin-left: calc((100vw - var(--maxWidthContainer)) / 2);
        }
    }

    &:last-child{
        padding: 0 calc(${cardGap}px + var(--widthBlur) / 2) 0 0;

        @media(max-width: 768px){
            padding: 0 ${cardGap / 2}px 0 0;
        }
    }

    @media(max-width: 768px){
        ${CardStyled}{
            width: calc(100vw - var(--PageHorizontalSpacing) * 2 - (${cardGap}px / 2));
            ${CardFigure}{
                width: 100%;
            }
        }
    }

    @media(max-width: 340px){
        ${CardStyled}{
            ${CardContent}{
                --textFontSize: 1.25rem;
            }
        }
    }

    @media(max-width: ${breakpoints.smp}){
        ${CardStyled}{
            ${CardContent}{
                --textFontSize: 1.15rem;
            }
        }
    }
`

const InnerBlogPosts = styled.nav`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    padding: 0 ${cardGap}px calc(15px + var(--PageVerticalSpacing)) 0;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display: none;
    }
`

const Page = styled(page)`
    margin: 32px 0 0 0;
    padding: 0;
    overflow-x: show;
    display: flex;
    align-items: center;
    position: relative;
    --widthBlur: 119.5px;

    &::before,
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: calc(100% - var(--PageVerticalSpacing));
        width: var(--widthBlur);
        background: linear-gradient(to right, #FFFFFFD9, transparent);
        user-select: none;
        pointer-events: none;
    }

    &::after{
        left: inherit;
        right: 0;
        background: linear-gradient(to left, #FFFFFFD9, transparent);
    }

    @media(min-width: ${breakpoints.xlp}){
        --widthBlur: 239px;
    }

    @media(max-width: ${breakpoints.tbl}){
        --widthBlur: ${cardGap}px;
    }

    @media(max-width: ${breakpoints.tbp}){
        &:before,
        &:after{
            content: inherit;
        }
    }

`