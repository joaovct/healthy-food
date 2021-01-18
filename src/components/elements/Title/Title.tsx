import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'
import styled, {css} from 'styled-components'

const style = css`
    font-size: ${metrics.fontSize.title};
    font-weight: ${metrics.fontWeight.title};
    line-height: ${metrics.lineHeight.title};
    color: ${colors.font.title};
`

const Title = styled.h1`${style}`
export const H2 = styled.h2`${style}`
export const H3 = styled.h3`${style}`
export const H4 = styled.h4`${style}`
export const H5 = styled.h5`${style}`
export const H6 = styled.h6`${style}`

export default Title