import React from 'react'
import styled from 'styled-components'
import container from '../../../elements/Container/Container'
import page from '../../../elements/Page/Page'
import {H3 as Subtitle} from '../../../elements/Subtitle/Subtitle'
import Paragraph from '../../../elements/Paragraph/Paragraph'
import colors from '../../../../styles/colors'
import BlogPosts from './BlogPosts'


const ReadOurBlog = () => {
    return(
        <>
            <Page id="our-blog">
                <Container>
                    <Subtitle>Read Our Blog</Subtitle>
                    <Paragraph>
                        Far far away, behind the word mountains, far from the countries <br/>
                        Vokalia and Consonantia, there live the blind texts.
                    </Paragraph>
                </Container>
            </Page>
            <BlogPosts/>
        </>
    )
}

const Container = styled(container)`
    display: flex;
    flex-flow: column nowrap;
    
    & > ${Subtitle},
    & > ${Paragraph}{
        text-align: center;
    }
`

const Page = styled(page)`
    background: ${colors.whiteSmoke};
    padding-bottom: 0;
`

export default ReadOurBlog
