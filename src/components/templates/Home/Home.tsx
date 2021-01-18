import React from 'react'
import Landing from './Landing/Landing'
import OurRecipes from './OurRecipes/OurRecipes'
import BestServices from './BestServices/BestServices'
import ReadOurBlog from './ReadOurBlog/ReadOurBlog'
import JoinMembership from './JoinMembership/JoinMembership'

const Home = () => {
    return(
        <>
            <Landing/>
            <OurRecipes/>
            <BestServices/>
            <ReadOurBlog/>
            <JoinMembership/>
        </>
    )
}

export default Home