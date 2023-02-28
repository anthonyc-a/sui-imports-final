import Image from 'next/image'
import React from 'react'
import Heading from '../components/common/Heading/Heading'
import VinesOne from '../components/common/Illustrations/VinesOne'
import VinesTwo from '../components/common/Illustrations/VinesTwo'
import Layout from '../components/Layout/Layout'

import styles from '../styles/about.module.css';


const About = () => {
  return (
    <div className='container'>
      <Layout title="About">
        <h1 className={styles['about-header']}>About <span>SUI Imports</span> </h1>
        <div className={styles['about-content']}>
          <div className={styles['about-image']}>
            <Image
              src="/img-w2.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles['about-description']}>
            <h2 className={styles['about-subheader']}>Our Mission</h2>
            <p>
              Our goal is to allow a different culture to try new
              exciting tastes within the oenology
              community and create strong links
              between suppliers and customers in
              order to prioritize fast and efficient
              transactions/ deliveries.
              Our goal is to satisfy a different
              community with quality wines and
              express the Swiss passion for
              winemaking across the United
              Kingdom.
            </p>
            <p>The bridge between quality wine producers
              and high expectation businesses.
              <br />
              <br />
              <ul>
                <li>● Quality of production</li>
                <li>● Traditional winemaking techniques</li>
                <li>● Wine from this region benefits from 3
                  times more sun than other areas.</li>
                <li>● Protected Vines</li>
              </ul>
              <br />
              And most importantly an efficient
              importation of those products directly to
              your premises.

            </p>

          </div>
        </div>
        <div className={styles['about-content']}>
          <div className={styles['about-description']}>
            <h2 className={styles['about-subheader']}>Market Need</h2>
            <p>
              United Kingdom’s wine
              market has very few
              qualitative Swiss produced
              wine for sale.
              It can start a new trend
              within the
              amateur/experienced wine
              noses.
              <br /><br /> “Swiss wine is a rarity. Only about 1% is exported. That’s because the Swiss prefer to keep
              their wine to drink themselves. Domestic demand is so high that very little remains for
              export. Conclusion: a trip to Switzerland is (almost) essential if you wish to discover
              Swiss wines.”
            </p>
          </div>
          <div className={styles['about-image']}>
            <Image
              src="/img-w1.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles['about-content']}>
          <div className={styles['about-description']}>
            <h2 className={styles['about-subheader']}>What we offer</h2>
            <p>
              Secure access to supplies
              of quality wines found by
              our means with winemakers
              from our origin region.
              Wines from this region are
              very famous across
              Switzerland and almost the
              totality of wines are
              AOP/PDO certified.
              <br /><br />
              <ol>
                <li>Exclusivity -
                  We offer a connection with the winemaker for a stand-out in the menu to all the wine bars & restaurants.</li>
                <li>
                  Reliability -
                  We guarantee a professional relationship with all our collaborators.</li>
                <li>
                  Protected designation of origin -
                  All of our wines are coming from the Vaud region and most of them comes from the protected by UNESCO region “Lavaux”.</li>
                <li>
                  Eﬃciency -We schedule each shipment and take care of the deliveries from the place of departure until the arrival destination.</li>
                <li>
                  Long-term oriented -
                  We aim to build strong links with our future partners.</li>
                <li>
                  High-quality products -
                  We can provide bottles from different types of grape varieties, all coming from trusted winemakers with their traditional methods.</li>
              </ol>
            </p>
          </div>
          <div className={styles['about-image']}>
            <Image
              src="/img-w.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Layout>
      <VinesOne />
      <VinesTwo />
    </div>
  )
}

export default About