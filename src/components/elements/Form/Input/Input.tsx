import styled from 'styled-components'
import colors from '../../../../styles/colors'
import metrics from '../../../../styles/metrics'

const Input = styled.input`
    padding: 16px 16px;
    border: ${metrics.border.width} solid ${colors.border};
    border-radius: ${metrics.border.radius};
    background: ${colors.white};
    &, &::placeholder{
        font-size: ${metrics.fontSize.text};
        font-weight: ${metrics.fontSize.text};
        color: ${colors.font.text};
    }
`

export default Input