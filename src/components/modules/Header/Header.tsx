import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import container from '../../elements/Container/Container'
import Button from '../../elements/Button/Button'
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'
import breakpoints from '../../../styles/breakpoints'
import logo from '../../../assets/images/logo.png'
import {ReactComponent as Close} from '../../../assets/images/svg/icons/close.svg'
import {ReactComponent as Menu} from '../../../assets/images/svg/icons/menu.svg'

const Header = (props: {showBackground?: boolean}) => {
    const headerRef = useRef<HTMLDivElement>(null)
    const [showBackground, setShowBackground] = useState(props.showBackground ? true : false)
    const [showMenu, setShowMenu] = useState(false)

    const handleScroll = () => {
        if(window.innerWidth > 950){
            if(headerRef.current && window.scrollY > headerRef.current?.getBoundingClientRect().bottom)
                setShowBackground(true)
            else
                setShowBackground(false)
        }else
            handleResize()
    }

    const handleResize = () => {
        if(window.innerWidth <= 950)
            setShowBackground(true)
        else
            setShowBackground(false)
    }

    useEffect(() => {
        if(!props.showBackground){
            handleScroll()
            handleResize()
            window.addEventListener('resize', handleResize)
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('resize', handleResize)
                window.removeEventListener('scroll', handleScroll)
            }
        }
    },[])

    return(
        <>
            <HeaderStyled showBackground={showBackground} ref={headerRef}>
                <Container>
                    <Logo>
                        <Link to="/">
                            <img src={logo} alt=""/>
                        </Link>
                    </Logo>    
                    <Nav showBackground={showBackground}>
                        <a href="#our-best-recipes">
                            <span>Healthy recipes</span>
                        </a>
                        <a href="#our-blog">
                            <span>Blog</span>
                        </a>
                        <a href="#join-membership">
                            <span>Join</span>
                        </a>
                        <Link to="/register">
                            <Button
                                btnStyle={!showBackground ? "bold-secondary" : "bold-primary"}
                                effects={{boxShadowOnHover: true}}
                            >
                                Register
                            </Button>
                        </Link>
                    </Nav>
                    <MenuButton onClick={() => setShowMenu(true)} showBackground={showBackground}>
                        <Menu/>
                    </MenuButton>            
                </Container>   
            </HeaderStyled>    
            <WrapperHeaderMenu showMenu={showMenu}>
                <HeaderMenu showMenu={showMenu}>
                    <button onClick={() => setShowMenu(false)}>
                        <Close/>
                    </button>
                    <a href="#our-best-recipes">
                        <span>Healthy recipes</span>
                    </a>
                    <a href="#our-blog">
                        <span>Blog</span>
                    </a>
                    <a href="#join-membership">
                        <span>Join</span>
                    </a>
                    <Link to="/register">
                        <Button
                            btnStyle="bold-primary"
                            effects={{blur: true}}
                        >Register</Button>
                    </Link>
                </HeaderMenu>
            </WrapperHeaderMenu>
        </>
    )
}

const HeaderMenu = styled.nav<{showMenu: boolean}>`
    height: 100%;
    width: auto;
    position: relative;
    box-shadow: -15px 0 20px 20px #1D164D14;
    background: ${colors.white};
    padding: 32px;
    display: flex;
    flex-flow: column nowrap;
    opacity: 0;
    transition: opacity .75s;
    
    & > button{
        width: 100%;
        display: flex;
        justify-content: flex-end;

        svg{
            height: 48px;
            height: 48px;
            color: ${colors.secondary};
            cursor: pointer;
        }
    }

    a{
        margin: 20px 0 0 0;

        &:first-of-type{
            margin: 40px 0 0 0;
        }

        span, ${Button}{
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }

        span{
            color: ${colors.secondary};
            position: relative;
            transition: color .5s;

            &:before{
                content: '';
                display: block;
                height: 2px;
                width: 100%;
                position: absolute;
                bottom: calc(${metrics.spacing[1]} * -1);
                background: ${colors.secondary};
                transition: opacity .25s;
                opacity: 0;
            }

            &:hover:before{
                opacity: 1;
            }
        }

        ${Button}{
            margin: 10px 0 0 0;
            text-align: center;
            width: 100%;
            padding-top: 14px;
            padding-bottom: 14px;
        }
    }

    @media(max-width: ${breakpoints.tbl}){
        ${({showMenu}) => {
            if(showMenu) return `
                transition: opacity .5s;
                opacity: 1;
                pointer-events: inherit;
                user-select: inherit;
            `
        }}
    }
`

const WrapperHeaderMenu = styled.div<{showMenu: boolean}>`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background: #ffffff09;
    z-index: ${metrics.zIndex.header};
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    pointer-events: none;
    user-select: none;
    overflow: hidden;
    transition: opacity .25s;

    @media(max-width: ${breakpoints.tbl}){
        ${({showMenu}) => {
            if(showMenu) return `
                transition: opacity .5s;
                opacity: 1;
                pointer-events: inherit;
                user-select: inherit;
            `
        }}
    }
`

const MenuButton = styled.div<{showBackground: boolean}>`
    display: none;
    cursor: pointer;

    @media(max-width: ${breakpoints.tbl}){
        display: block;
    }

    svg{
        height: 40px;
        width: 40px;
        color: ${({showBackground}) => showBackground ? colors.white : colors.secondary};
        transition: color .25s;
    }
`

const Nav = styled.nav<{showBackground: boolean}>`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    a{
        padding: 0 5px;
        margin: 0 10px;

        @media(max-width: ${breakpoints.tbl}){
            display: none;
        }

        span, ${Button}{
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
        }

        span{
            color: ${colors.white};
            position: relative;
            transition: color .5s;

            &:before{
                content: '';
                display: block;
                height: 2px;
                width: 100%;
                position: absolute;
                bottom: calc(${metrics.spacing[1]} * -1);
                background: ${colors.white};
                transition: opacity .25s;
                opacity: 0;
            }

            ${({showBackground}) => {
                if(showBackground) return `
                    color: ${colors.secondary};

                    &:before{
                        background: ${colors.secondary};
                    }
                `
            }}

            &:hover:before{
                opacity: 1;
            }
        }

        &:first-child{
            margin-left: 0;
        }
        &:last-child{
            margin-right: 0;
        }
    }
`

const Logo = styled.figure`
    height: auto;
    width: auto;

    a{
        cursor: pointer;
        
        img{
            height: 39px;
            width: auto;

            @media(max-width: ${breakpoints.sml}){
                height: 30px;
            }
        }
    }
`

const Container = styled(container)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const HeaderStyled = styled.header<{showBackground: boolean}>`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${metrics.zIndex.header};
    padding: var(--HeaderVerticalSpacing) var(--PageHorizontalSpacing);
    transition: background .5s, box-shadow .25s;

    ${({showBackground}) => {
        if(showBackground) return `
            background: ${colors.white};
            box-shadow: ${metrics.effects.shadow};
        `
    }}
`

export default Header