import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {Props} from './types'
import Title, {H2 as Th2, H3 as Th3, H4 as Th4, H5 as Th5, H6 as Th6} from '../../elements/Title/Title'
import Subtitle, {H3 as Sh3, H4 as Sh4, H5 as Sh5, H6 as Sh6} from '../../elements/Subtitle/Subtitle'
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'

const Card: React.FC<Props> = (props) => {
    return(
        <ThemeProvider theme={props}>
            <CardStyled>
                {
                    props.image ?
                    <CardFigure>
                        <img src={props.image.src} alt={props.image.alt} />
                    </CardFigure>
                    : <></>
                }
                <CardContent>
                    {props.children}
                </CardContent>
            </CardStyled>
        </ThemeProvider>

    )
}

export const CardContent = styled.div`
    flex: 1 0 0;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    --textFontSize: ${metrics.card.font.size};

    ${Title}, ${Subtitle},
    ${Th2},
    ${Th3}, ${Sh3},
    ${Th4}, ${Sh4},
    ${Th5}, ${Sh5},
    ${Th6}, ${Sh6}{
        font-size: var(--textFontSize);
        font-weight: ${metrics.card.font.weight};
        line-height: ${metrics.card.font.lineHeight};
        letter-spacing: ${metrics.card.font.letterSpacing};
        text-align: ${metrics.card.font.align};
        color: ${colors.card.font.color};
    }

    ${({theme}: {theme: Props}) => {
        if(theme.options?.flow === 'column') return`
            border-bottom-left-radius: ${metrics.card.border.radius};
            border-bottom-right-radius: ${metrics.card.border.radius};
            padding: 16px;
        `
        return`
            border-top-right-radius: ${metrics.card.border.radius};
            border-bottom-right-radius: ${metrics.card.border.radius};
            padding: 16px 32px;
        `
    }}
`

export const CardFigure = styled.figure`
    ${({theme}: {theme: Props}) => {
        if(theme.options?.flow === 'column') return`
            width: 348px;
            height: 247px;
        `
        return `
            height: 225px;
            width: 253px;
        `
    }}
    
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;

        ${({theme}) => {
            if(theme.options?.flow === 'column') return`
                border-top-left-radius: ${metrics.card.border.radius};
                border-top-right-radius: ${metrics.card.border.radius};
            `
            else return `
                border-top-left-radius: ${metrics.card.border.radius};
                border-bottom-left-radius: ${metrics.card.border.radius};
            `
        }}
    }
` 

export const CardStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: ${({theme}) => theme.options?.flow || 'row'};
    flex-wrap: nowrap;
    box-shadow: ${metrics.effects.shadow};
    

    ${({theme}) => {
        if(theme.options?.flow === 'column')
            return `
                min-height: 450px;
            `
    }}
    width: 100%;
`

export default Card