import React from 'react'
import styled from 'styled-components'
import page from '../../../elements/Page/Page'
import container from '../../../elements/Container/Container'
import Subtitle, {H3} from '../../../elements/Subtitle/Subtitle'
import paragraph from '../../../elements/Paragraph/Paragraph'
import Subsection from '../../../elements/Subsection/Subsection'
import Card, {CardStyled, CardFigure, CardContent} from '../../../modules/Card/Card'
import Button from '../../../elements/Button/Button'
import colors from "../../../../styles/colors"
//@ts-ignore
import image1 from '../../../../assets/images/home/best-recipes-1.png'
//@ts-ignore
import image2 from '../../../../assets/images/home/best-recipes-2.png'
//@ts-ignore
import image3 from '../../../../assets/images/home/best-recipes-3.png'
//@ts-ignore
import image4 from '../../../../assets/images/home/best-recipes-4.png'
import breakpoints from '../../../../styles/breakpoints'

const OurRecipes = () => {
    return(
        <Page id="our-best-recipes">
            <Container>
                <SectionSubtitle>Our Best Recipes</SectionSubtitle>
                <Paragraph>Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</Paragraph>
                <Subsection>
                    <GridCards>
                        <Card image={{src: image1, alt: 'Broccoli Salad with Bacon'}}>
                            <H3>Broccoli Salad <br/> with Bacon</H3>
                            <Button>See Recipe</Button>
                        </Card>
                        <Card image={{src: image2, alt: 'Classic Beef Burgers'}}>
                            <H3>Classic Beef <br/> Burgers</H3>
                            <Button>See Recipe</Button>
                        </Card>
                        <Card image={{src: image3, alt: 'Classic Potato Salad'}}>
                            <H3>Classic Potato <br/> Salad</H3>
                            <Button>See Recipe</Button>
                        </Card>
                        <Card image={{src: image4, alt: 'Cherry Cobbler on the Grill'}}>
                            <H3>Cherry Cobbler <br/> on the Grill</H3>
                            <Button>See Recipe</Button>
                        </Card>
                    </GridCards>
                </Subsection>
            </Container>
        </Page>
    )
}

const GridCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;

    ${CardStyled}{
        ${Button}{
            margin: 16px 0 0 0;
            padding: 16px 24px;
        }

        @media(max-width: 1200px){
            ${CardFigure}{
                width: 225px;
                height: 200px;
            }

            ${CardContent}{
                --textFontSize: 20px;
            }
        }

        @media(max-width: 1100px){
            ${CardFigure}{
                width: 200px;
                height: 178px;
            }
        }

        @media(max-width: ${breakpoints.lg}){
            ${CardContent}{
                --textFontSize: 18px;
            }
        }

        @media(max-width: 960px){
            ${CardContent}{
                padding-right: 8px;
                
                ${Button}{
                    font-size: 14px;
                }
            }
        }

        @media(max-width: 930px){
            ${CardFigure}{
                width: 180px;
                height: 180px;
            }
        }
    }

    @media(max-width: 890px){
        grid-template-columns: 1fr;
        justify-content: center;

        ${CardStyled}{
            max-width: 532px;
            margin: 0 auto; 

            ${CardFigure}{
                width: 253px;
                height: 225px;
            }

            ${CardContent}{
                --textFontSize: 24px;
            }
        }
    }

    @media(max-width: 650px){
        ${CardStyled}{
            ${CardFigure}{
                width: 225px;
                height: 200px;
            }
        }
    }

    @media(max-width: ${breakpoints.tbp}){
        ${CardStyled}{
            ${CardFigure}{
                width: 40%;
                height: 180px;
            }
        }
    }

    @media(max-width: 540px){
        ${CardStyled}{
            ${CardContent}{
                --textFontSize: 20px;
            }
        }
    }

    @media(max-width: ${breakpoints.sml}){
        ${CardStyled}{
            ${CardFigure}{
                height: 160px;
            }
        }
    }

    @media(max-width: 400px){
        ${CardStyled}{
            ${CardFigure}{
                min-height: 100%;
                height: 140px;
            }
            ${CardContent}{
                --textFontSize: 18px;
                padding-left: 16px;
            }
            ${Button}{
                font-size: 12px;
                padding: 12px 16px;
                margin: 8px 0 0 0;
            }
        }
    }

    @media(max-width: 360px){
        ${CardStyled}{
            ${CardContent}{
                --textFontSize: 1rem;
            }
        }
    }

    @media(max-width: ${breakpoints.smp}){
        ${CardStyled}{
            ${CardFigure}{
                height: 120px;
            }
            ${Button}{
                font-size: 12px;
                padding: 8px 12px;
                margin: 8px 0 0 0;
            }
        }
    }
`

const Paragraph = styled(paragraph)`
    text-align: center;

    @media(max-width: 650px){
        br{
            display: none;
        }
    }
`

const SectionSubtitle = styled(Subtitle)`
    text-align: center;
`

const Container = styled(container)`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Page = styled(page)`
    background: ${colors.whiteSmoke};
`

export default OurRecipes