import React from 'react'
import Heading from '../components/common/Heading/Heading'
import VinesOne from '../components/common/Illustrations/VinesOne'
import VinesTwo from '../components/common/Illustrations/VinesTwo'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <div className='container'>
      <Layout title="About">
        <h1>About Us</h1>
        <Heading text="Who we are" />
        <p>This is the home page.</p>
      </Layout>
      <VinesOne/>
      <VinesTwo/>
    </div>
  )
}

export default About