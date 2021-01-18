import React from 'react'
import styled from 'styled-components'
import page from '../../../elements/Page/Page'
import container from '../../../elements/Container/Container'
import Title from '../../../elements/Title/Title'
import input from '../../../elements/Form/Input/Input'
import button from '../../../elements/Button/Button'
import {ReactComponent as Illustration} from '../../../../assets/images/svg/home/illustration.svg' 
import {ReactComponent as Search} from '../../../../assets/images/svg/icons/search.svg' 
import breakpoints from '../../../../styles/breakpoints'
import metrics from '../../../../styles/metrics'

const Landing = () => {
    return(
        <Page>
            <Container>
                <Content>
                    <MainText>
                        <Title>
                            Ready for <br/>
                            Trying <Tbr/> a new <br/>
                            recipe?
                        </Title>
                        <Fieldset>
                            <Input placeholder="Search Healthy recipes"/>
                            <Button>
                                <Search/>
                            </Button>
                        </Fieldset>
                    </MainText>
                    <SvgStyled>
                        <Illustration/>
                    </SvgStyled>
                </Content>
            </Container>
        </Page>
    )
}

const Button = styled(button)`
    padding: 0;
    --size: 50px;
    min-height: var(--size);
    max-height: var(--size);
    min-width: var(--size);
    max-width: var(--size);
    margin: 0 0 0 16px;

    svg{
        height: 24px;
        width: 24px;
    }

    @media(max-width: ${breakpoints.sml}){
        --size: 40px;
        margin: 0 0 0 8px;
        svg{
            height: 20px;
            width: 20px;
        }
    }
`

const Input = styled(input)`
    width: 100%;
    max-width: 344px;

    @media(max-width: ${breakpoints.sml}){
        padding: 8px 16px;
    }
    @media(max-width: ${breakpoints.smp}){
        font-size: 11px;
        padding: 8px;
    }
`

const Fieldset = styled.fieldset`
    margin: 32px 0 0 0;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 100%;

    @media(max-width: ${breakpoints.tbp}){
        margin: 24px 0 0 0;
    }

    @media(max-width: ${breakpoints.sml}){
        display: inline-flex;
    }
`

const Tbr = styled.br``

const MainText = styled.span`
    display: flex;
    flex-flow: column nowrap;
    flex: var(--widthText) 0 0;
    position: relative;
    z-index: 1;

    ${Title} ${Tbr}{
        display: none;
    }

    @media(max-width: ${breakpoints.lg}){
        padding: 0 24px 0 0;

        ${Title}{
            font-size: calc(${metrics.fontSize.title} - 5px);
        }
    }

    @media(max-width: 950px){
        flex: inherit;
        padding: 0;

        ${Title}{
            text-transform: lowercase;
            text-align: center;

            &::first-letter{
                text-transform: uppercase;
            }

            br{
                display: none;
            }
            ${Tbr}{
                display: inherit;
            }
        }
    }

    @media(max-width: ${breakpoints.tbp}){ 
        ${Title}{
            line-height: 1.15;
        }
    }

    @media(max-width: ${breakpoints.sml}){
        ${Title}{
            font-size: 38px;
        }
    }
    @media(max-width: 400px){
        ${Title}{
            font-size: 2rem;
        }
    }
    @media(max-width: 350px){
        ${Title}{
            font-size: 1.7rem;
        }
    }
    @media(max-width: 300px){
        ${Title}{
            font-size: 1.5rem;
        }
    }
`

const SvgStyled = styled.figure`
    flex: var(--widthSvg) 0 0;
    height: 100vh;
    user-select: none;

    svg{
        position: absolute;
        top: 0;
        right: 0;
        width: var(--widthSvg);
    }

    @media(max-width: ${breakpoints.xlg}){
        svg{
            --widthSvg: 65%;
        }
    }
    @media(max-width: ${breakpoints.lg}){
        svg{
            --widthSvg: 67.5%;
        }
    }
    @media(max-width: 950px){
        flex: inherit;
        width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;

        svg{
            min-width: inherit;
            height: inherit;
            position: relative;
            top: -32px;
            right: 50px;
            width: 600px;
            path[data-name="Caminho 1"]{
                display: none;
            }
        }
    }
    @media(max-width: ${breakpoints.tbp}){
        width: 110vw;
        height: auto;

        svg{
            right: 25px;
            height: inherit;
            width: inherit;
            top: inherit;
        }
    }
`

const Content = styled.div`
    --widthSvg: 60%;
    --widthText: calc(100% - var(--widthSvg));
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: 950px){
        justify-content: flex-start;
        align-items: center;
        flex-flow: column nowrap;
        padding: 132px 0 0 0;
    }
`

const Container = styled(container)`
    overflow-x: hidden;
`

const Page = styled(page)`
    position: relative;
    padding-top: 0;
    padding-bottom: 0;

    @media(max-width: 950px){
        flex: inherit;
    }
`

export default Landing