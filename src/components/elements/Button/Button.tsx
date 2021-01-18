import styled from 'styled-components'
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'
import {ButtonProps} from './types'

const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 25px;
    font-size: ${metrics.fontSize.button};
    font-weight: ${metrics.fontWeight.button};
    border-radius: ${metrics.border.radius};
    letter-spacing: ${metrics.letterSpacing.button};
    line-height: 1;
    cursor: pointer;
    --background: ${colors.background.button};
    --color: ${colors.font.button};
    background: var(--background);
    color: var(--color);
    transition: background .25s, color .25s, box-shadow .25s, backdrop-filter .25s;

    ${({btnStyle: style, effects}) => {
        let css = ''

        if(style === 'primary' || style === 'bold-primary'|| !style)
            css += `
                --background: ${colors.background.button};
                --color: ${colors.font.button};
            `
        else if(style === 'secondary' || style === 'bold-secondary')
            css += `
                --background: ${colors.white};
                --color: ${colors.primary};
            `
        
        if(style === 'bold-primary' || style === 'bold-secondary'){
            css += `
                font-weight: ${metrics.fontWeight.boldButton};
                letter-spacing: ${metrics.letterSpacing.boldButton};
            `
        }

        if(effects?.blur === true) css += `
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 1;

            &:before{
                content: '';
                --widthPseudo: 83.3%;
                --heightPseudo: 82.6%;
                width: var(--widthPseudo);
                height: var(--heightPseudo);
                background: var(--background);
                position: absolute;
                left: calc((100% - var(--widthPseudo)) / 2);
                bottom: -5px;
                filter: blur(10px);
                z-index: -1;
            }
        `
        if(effects?.boxShadow === true) css += `
            box-shadow: ${metrics.effects.shadow};
        `
        if(effects?.boxShadowOnHover === true) css += `
            &:hover{
                box-shadow: ${metrics.effects.shadow};
            }
        `


        return css

    }}
`

export default Button