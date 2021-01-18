import {createGlobalStyle} from 'styled-components'
import metrics from './metrics'
import breakpoints from './breakpoints'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
    :root{
        --PageHorizontalSpacing: ${metrics.spacing[5]};
        --PageVerticalSpacing: 48px;
        --HeaderHorizontalSpacing: var(--PageHorizontalSpacing);
        --HeaderVerticalSpacing: 25.5px;
        --FooterHorizontalSpacing: var(--HeaderHorizontalSpacing);
        --FooterVerticalSpacing: 42px;
        --SubsectionMargin: 32px 0 0 0;
        --maxWidthContainer: 1100px;
        
        @media(max-width: ${breakpoints.tbl}){
            --PageHorizontalSpacing: ${metrics.spacing[4]};
        }
        @media(max-width: ${breakpoints.sml}){
            --PageHorizontalSpacing: ${metrics.spacing[3]};
        }
    }

    /* width */
    &::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
        background: ${colors.whiteSmoke};
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        &:hover{
            background: ${colors.border};
        }
    }

    html, body, #root{
        height: 100%;
        min-height: 100vh;
        min-height: -webkit-fill-available;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    table{
        border-collapse: collapse;
        border-spacing: 0;
    }
    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    *,
    button,
    input{
        font-family: ${metrics.fontFamily.text};
        font-weight: ${metrics.fontWeight.text};
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        background: none;
        border: none;
        appearance: none;
    }

    img, svg{
        user-select: none;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: ${metrics.fontFamily.title};
        font-weight: ${metrics.fontWeight.title};
        color: ${colors.font.title};
        letter-spacing: ${metrics.letterSpacing.title};
    }

    p, span, b, strong, i, em, mark, small, del, ins, sub, sup, pre, address, button{
        color: ${colors.font.text};
    }

    p{
        font-size: ${metrics.fontSize.text};        
        font-weight: ${metrics.fontWeight.text};
    }

    button{
        font-size: ${metrics.fontSize.button};        
        font-weight: ${metrics.fontWeight.button};
    }

    h1, h2, h3, h4, h5, h6, p, span, b, strong, i, em, mark, small, del, ins, sub, sup, pre, address, button, input{
        &::selection{
            background: ${colors.primary};
            color: ${colors.secondary};
        }
    }
`

export default GlobalStyles