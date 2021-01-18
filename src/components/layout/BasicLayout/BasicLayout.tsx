import React from 'react'
import Header from "../../modules/Header/Header"
import Footer from "../../modules/Footer/Footer"
import GlobalStyles from '../../../styles/GlobalStyles'
import styled from "styled-components"

const BasicLayout = ({options, children}: {options?: {showHeaderBackground?: boolean},children: any}) => {
    return (
        <BasicLayoutStyled>
            <GlobalStyles/>
            <Header showBackground={options?.showHeaderBackground}/>
            {children}
            <Footer/>
        </BasicLayoutStyled>
    )
}

const BasicLayoutStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`

export default BasicLayout