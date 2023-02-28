import React from 'react'
import Heading from '../components/common/Heading/Heading'
import VinesOne from '../components/common/Illustrations/VinesOne'
import Layout from '../components/Layout/Layout'

const Winemakers = () => {
    return (
        <div className='container'>
            <Layout title="History & Winemakers">
                <h1>History & Winemakers</h1>
                <Heading text="Our Partners" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem eos quibusdam eius magni aut itaque officiis voluptate dolorem nisi!</p>
            </Layout>
            <VinesOne />
        </div>
    )
}

export default Winemakers