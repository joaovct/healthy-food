import styled, {css} from 'styled-components'
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'
import breakpoints from '../../../styles/breakpoints'

const style = css`
    font-size: ${metrics.fontSize.subtitle};
    font-weight: ${metrics.fontWeight.subtitle};
    line-height: ${metrics.lineHeight.subtitle};
    letter-spacing: ${metrics.letterSpacing.subtitle};
    color: ${colors.font.subtitle};

    @media(max-width: ${breakpoints.sml}){
        font-size: 28px;
    }
    @media(max-width: ${breakpoints.smp}){
        font-size: 24px;
    }
`

const Subtitle = styled.h2`${style}`
export const H1 = styled.h1`${style}`
export const H3 = styled.h3`${style}`
export const H4 = styled.h4`${style}`
export const H5 = styled.h5`${style}`
export const H6 = styled.h6`${style}`

export default Subtitle