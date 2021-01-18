import styled from 'styled-components'
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'

const Paragraph = styled.p`
    font-size: ${metrics.fontSize.text};
    font-weight: ${metrics.fontWeight.text};
    letter-spacing: ${metrics.letterSpacing.text};
    line-height: ${metrics.lineHeight.text};
    color: ${colors.font.text};
    margin: ${metrics.fontSpacing.text.top} ${metrics.fontSpacing.text.right} ${metrics.fontSpacing.text.bottom} ${metrics.fontSpacing.text.left}; 
`

export default Paragraph