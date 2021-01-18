import React from 'react'
import BasicLayout from '../components/layout/BasicLayout/BasicLayout'
import Register from '../components/templates/Register/Register'

const Page = () => {
    return(
        <BasicLayout options={{showHeaderBackground: true}}>
            <Register/>
        </BasicLayout>
    )
}

export default Page