import React from 'react'
import page from '../../../elements/Page/Page'
import Container from '../../../elements/Container/Container'
import button from '../../../elements/Button/Button'
import input from '../../../elements/Form/Input/Input'
import styled from 'styled-components'
import illustration from '../../../../assets/images/home/illustration3.png' 
import {H3 as Subtitle} from '../../../elements/Subtitle/Subtitle'
import colors from '../../../../styles/colors'
import breakpoints from '../../../../styles/breakpoints'

const JoinMembership = () => {
    return(
        <Page id="join-membership">
            <Container>
                <Content>
                    <MainText>
                        <Subtitle>
                            Join our membership <br/>
                            to get special offer
                        </Subtitle>
                        <Fieldset>
                            <Input type="e-mail" placeholder="Enter your email address"/>
                            <Button effects={{blur: true}}>Join</Button>
                        </Fieldset>
                    </MainText>
                    <SvgStyled>
                        <img src={illustration} alt="Illustration" />
                    </SvgStyled>
                </Content>
            </Container>
        </Page>
    )
}

const Button = styled(button)`
    margin: 0 0 0 16px;
    padding-left: 32px;
    padding-right: 32px;

    @media(max-width: ${breakpoints.sml}){
        height: 40px;
        padding-left: 24px;
        padding-right: 24px;
        margin: 0 0 0 8px;
    }
`

const Input = styled(input)`
    width: 100%;
    max-width: 344px;
    padding-left: 24px;
    padding-right: 24px;

    @media(max-width: ${breakpoints.sml}){
        padding: 8px 16px;
    }
    @media(max-width: ${breakpoints.smp}){
        font-size: 11px;
    }
`

const Fieldset = styled.fieldset`
    margin: 32px 0 0 0;
    display: inline-flex;
    flex-flow: row nowrap;
`

const MainText = styled.span`
    display: flex;
    flex-flow: column nowrap;
    flex: var(--widthText) 0 0;
    position: relative;
    z-index: 1;

    @media(max-width: 1200px){
        ${Subtitle}{
            font-size: 28px;
        }
    }

    @media(max-width: 1060px){
        ${Subtitle}{
            font-size: 26px;
        }
    }

    @media(max-width: 991px){
        ${Subtitle}{
            font-size: 32px;
        }
    }

    @media(max-width: ${breakpoints.sml}){
        width: 100%;

        ${Subtitle}{
            font-size: 1.75rem;
        }
    }
    @media(max-width: 400px){
        ${Subtitle}{
            font-size: 1.35rem;
        }
    }
    @media(max-width: ${breakpoints.smp}){
        ${Subtitle}{
            font-size: 1.2rem;
        }
    }
`


const SvgStyled = styled.figure`
    min-height: 694px;
    flex: var(--widthSvgVw) 0 0;
    user-select: none;

    img{
        top: 0;
        right: 0;
        width: 49.09vw;
    }
    
    @media(min-width: 991px){
        margin-left: -5%;
    }

    @media(min-width: ${breakpoints.xlg}){
        margin-left: -3%;
    }

    @media(max-width: ${breakpoints.xlg}){

        img{
            width: 100%;
        }
    }

    @media(max-width: 991px){
        min-height: inherit;
        margin: 32px 0 0 0;
        width: 100%;
        position: relative;

        img{
            position: relative;
            right: calc(var(--PageHorizontalSpacing) * -1);
            width: 100%;
        }
    }

    @media(max-width: ${breakpoints.tbl}){
    }
`

const Content = styled.div`
    --widthSvg: 49.09%;
    --widthSvgVw: 49.09vw;
    --widthText: calc(100% - var(--widthSvg));
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    
    @media(min-width: 991px){
        /* overflow-x: hidden; */
    }

    @media(max-width: ${breakpoints.xlg}){
        --widthSvg: 60%;
        --widthSvgVw: 60vw;
    }

    @media(max-width: 1200px){
        --widthSvg: 65%;
        --widthSvgVw: 65vw;
    }

    @media(max-width: 991px){
        align-items: center;
        flex-flow: column nowrap;
    }
`

const Page = styled(page)`
    position: relative;
    background: ${colors.white};
    padding-top: 0;
    padding-bottom: 0;

    @media(min-width: 991px){
        padding-right: 0;
    }
`

export default JoinMembership