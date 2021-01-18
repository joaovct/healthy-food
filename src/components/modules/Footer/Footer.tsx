import React from 'react'
import styled from 'styled-components'
import container from '../../elements/Container/Container'
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'
import breakpoints from '../../../styles/breakpoints'
import {ReactComponent as Github} from '../../../assets/images/svg/icons/github.svg'

const Footer = () => {
    return(
        <FooterStyled>
            <Container>
                <Copyright>© Copyrights 2021 Stack. All Rights Reserved.</Copyright>
                <Nav>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms and Conditians</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/joaodjtr/healthy-food">
                        <Github/>
                    </a>
                </Nav>
            </Container>
        </FooterStyled>
    )
}

const Nav = styled.nav`
    a{
        letter-spacing: 0.32px;
        color: ${colors.font.text};
        margin: 0 32px 0 0;

        svg{
            color: ${colors.font.text};
            height: ${metrics.fontSize.text};
            width: ${metrics.fontSize.text};
            transition: .25s color;
        }

        &:hover svg{
            color: ${colors.secondary};
        }

        &:last-child{
            margin: 0;
        }
    }

    @media(max-width: 991px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 16px 0 0 0;

        a{
            padding: 16px 4px;
            text-align: center;
        }
    }

    @media(max-width: ${breakpoints.tbp}){
        flex-flow: column nowrap;

        a{
            margin: 0;
            width: 100%;
        }
    }
`

const Copyright = styled.small`
    font-size: ${metrics.fontSize.text};
    font-weight: 600;
    font-style: normal;
    color: ${colors.secondary};
    letter-spacing: 0px;
`

const Container = styled(container)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 991px){
        flex-flow: column nowrap;
        align-items: center;
    }
`

const FooterStyled = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: var(--FooterVerticalSpacing) var(--FooterHorizontalSpacing);
`

export default Footer