import React from 'react'
import styled from 'styled-components'
import page from "../../../elements/Page/Page"
import illustration from '../../../../assets/images/home/illustration2.png' 
import {H3 as Subtitle} from '../../../elements/Subtitle/Subtitle'
import Paragraph from '../../../elements/Paragraph/Paragraph'
import Button from '../../../elements/Button/Button'
import breakpoints from '../../../../styles/breakpoints'

const BestServices = () =>{
    return(
        <Page id="best-services">
            <Content>
                <SvgStyled>
                    <img src={illustration} alt="Ilustrattion"/>
                </SvgStyled>
                <Text>
                    <Subtitle>The best services ready <br/> To serve you</Subtitle>
                    <Paragraph>
                        Far far away, behind the word mountains, far from <br/>
                        the countries Vokalia and Consonantia,<br/>
                        there live the blind texts.
                    </Paragraph>
                    <Paragraph>
                        Separated they live in Bookmarksgrove right at the<br/>
                        coast of the Semantics, a large language ocean.
                    </Paragraph>
                    <Paragraph>
                        A small river named Duden flows by their place and<br/>
                        supplies it with the necessary regelialia.
                    </Paragraph>
                    <Button effects={{blur: true}}>Know More</Button>
                </Text>
            </Content>
        </Page>
    )
}

const Text = styled.span`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    flex: 1 0 0;

    ${Paragraph}, ${Button}{
        margin: 32px 0 0 0;
    }

    ${Button}{
        padding: 16px 32px;
    }

    @media(max-width: ${breakpoints.lg}){
        align-items: center;

        ${Subtitle}, ${Paragraph}{
            text-transform: lowercase;                

            &:first-letter{
                text-transform: uppercase;
            }

            br{
                display: none;
            }
        }

        ${Subtitle}{
            text-align: center;
        }

        ${Paragraph}{
            max-width: 463px;
        }
    }

    @media(max-width: 720px){
        ${Subtitle}{
            br{
                display: inherit;
            }
        }
    }
`

const SvgStyled = styled.figure`
    min-width: 800px;
    height: auto;
    
    img{
        width: 100%;
    }

    @media(max-width: ${breakpoints.xlg}){
        width: 45vw;
        min-width: inherit;
    }
    @media(max-width: ${breakpoints.lg}){
        display: none;
    }
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
`

const Page = styled(page)`
    @media(min-width: calc(${breakpoints.lg} + 1px)){
        padding-left: 0;
        padding-bottom: 0;
    }
`

export default BestServices