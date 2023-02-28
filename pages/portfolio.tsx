import Head from 'next/head'
import React from 'react'
import Heading from '../components/common/Heading/Heading'
import VinesOne from '../components/common/Illustrations/VinesOne'
import Layout from '../components/Layout/Layout'

const Portfolio = () => {
  return (
    <div className='container'>
      <Layout title="Home Page">
        <h1>SUI Wine Imports Limited.</h1>
        <Heading text="This is a Heading" />
        <p>This is the home page.</p>
      </Layout>
      <VinesOne/>
    </div>
  )
}

export default Portfolio