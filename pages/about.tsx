import Image from "next/image";
import React from "react";
import Heading from "../components/common/Heading/Heading";
import VinesOne from "../components/common/Illustrations/VinesOne";
import VinesTwo from "../components/common/Illustrations/VinesTwo";
import Layout from "../components/Layout/Layout";

import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className="container">
      <Layout title="About">
        <h1 className={styles["about-header"]}>
          About SUI Wine <span>Imports</span>{" "}
        </h1>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Who We Are</h2>
            <p>
              SUI Wine Imports Limited is a wine import business based in
              Switzerland and specialising in the import and sale of
              hand-selected wines from the Lavaux region to the United Kingdom.
              We are passionate about delivering the highest quality Swiss wines
              to the UK market, providing customers with a unique drinking
              experience.
              <br />
              <br />
              At SUI Wine Imports Limited, we are committed to providing our
              customers with only the highest quality Swiss wines. Our team
              works tirelessly to select and import the finest wines from the
              Lavaux region, ensuring each bottle meets our strict quality
              standards and that our customers are able to enjoy a truly
              memorable drinking experience.
              <br />
              <br />
              Our dedication to help winemakers from the Lavaux region produce
              and import top-tier wines extends to our relationships with our
              business partners. We pride ourselves on creating strong ties with
              our partners, ensuring they are well-equipped to provide customers
              with the best selection of wines that Switzerland has to offer.
              Our partners can be sure that they will be the first in the UK to
              benefit from the excellent quality and variety of premium Swiss
              wines that we supply.
            </p>
            <p>
              The wines from the Lavaux region of Switzerland are some of the
              most renowned in the world. Protected by Unesco since 2007, the
              region is famous for its terraced vineyards and breathtaking views
              over Lake Geneva. The wines themselves are excellent, with floral
              and citrus notes that make them stand out from many European
              wines. The region has a wide variety of white wines, as well as
              some reds. Many producers also make sparkling and sweet wines,
              ranging from light, refreshing wines to complex, full-bodied
              varieties. All in all, the wines of Lavaux are some of the best in
              the world, and they will not disappoint any connoisseur.
              <br />
              <br />
              We are committed to providing an outstanding customer experience.
              All of our wines are hand-picked from local vineyards in the
              Lavaux region, and each bottle is carefully inspected and tested
              to ensure that it meets our stringent quality requirements. In
              addition, we offer friendly and knowledgeable customer service, as
              well as flexible delivery options to make sure that each order
              arrives in perfect condition.
              <br />
              <br />
              At SUI Wine Imports Limited, we believe that our partners should
              enjoy the best Swiss wines the country has to offer. We are
              dedicated to providing high-quality wines and excellent customer
              service, helping to make sure that our partners are the first in
              the UK to benefit from the great range of Swiss wines that we
              supply.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/img-w4.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Our Mission</h2>
            <p>
              Our goal is to allow a different culture to try new exciting
              tastes within the oenology community and create strong links
              between suppliers and customers in order to prioritize fast and
              efficient transactions/ deliveries. Our goal is to satisfy a
              different community with quality wines and express the Swiss
              passion for winemaking across the United Kingdom.
            </p>
            <p>
              The bridge between quality wine producers and high expectation
              businesses.
              <br />
              <br />
              <ul>
                <li>● Quality of production</li>
                <li>● Traditional winemaking techniques</li>
                <li>
                  ● Wine from this region benefits from 3 times more sun than
                  other areas.
                </li>
                <li>● Protected Vines</li>
              </ul>
              <br />
              And most importantly an efficient importation of those products
              directly to your premises.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/img-w2.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>
              Choosing Your Perfect Wine With Us
            </h2>
            <p>
              Are you looking for the perfect wine to match your meal or special
              occasion? Our team of passionate people will help you find exactly
              what you’re looking for, no matter your budget or taste
              preferences.
              <br />
              <br />
              When it comes to finding the right wine, we understand that it can
              be overwhelming. With so many options to choose from, it can be
              difficult to know what will work best with your menu. That’s why
              we take the time to help you find the ideal match. Our team can
              guide you through the process, discussing your needs and helping
              you find the right wine for your occasion.
              <br />
              <br />
              We’ll also help you learn more about the wines we offer, so you
              can make an informed decision. From the unique characteristics of
              various grapes to the nuances of different vintages, we’ll share
              our knowledge and enthusiasm for wine with you. We’ll help you
              discover the stories behind every bottle and gain a better
              understanding of the region’s wine heritage.
              <br />
              <br />
              At SUI Wine Imports Limited, we take the stress and guesswork out
              of finding the perfect wine. Let us help you create an
              unforgettable experience for you and your guests. Contact us today
              to get started!
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/img-w5.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
            <p>
              <strong>Lavaux Vinoram:</strong>
              The discovery centre for the wines and terraced vineyards of
              Lavaux.
            </p>
          </div>
        </div>

        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Market Need</h2>
            <p>
              United Kingdom’s wine market has very few qualitative Swiss
              produced wine for sale. It can start a new trend within the
              amateur/experienced wine noses.
              <br />
              <br /> “Swiss wine is a rarity. Only about 1% is exported. That’s
              because the Swiss prefer to keep their wine to drink themselves.
              Domestic demand is so high that very little remains for export.
              Conclusion: a trip to Switzerland is (almost) essential if you
              wish to discover Swiss wines.”
              <br />
              <br />
              Source:{" "}
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.myswitzerland.com/en-ch/experiences/summer-autumn/oenotourism/swiss-wine/"
              >
                myswitzerland.com
              </a>
            </p>
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>What we offer</h2>
            <p>
              Secure access to supplies of quality wines found by our means with
              winemakers from our origin region. Wines from this region are very
              famous across Switzerland and almost the totality of wines are
              AOP/PDO certified.
              <br />
              <br />
              <ol>
                <li>
                  Exclusivity - We offer a connection with the winemaker for a
                  stand-out in the menu to all the wine bars & restaurants.
                </li>
                <li>
                  Reliability - We guarantee a professional relationship with
                  all our collaborators.
                </li>
                <li>
                  Protected designation of origin - All of our wines are coming
                  from the Vaud region and most of them comes from the protected
                  by UNESCO region “Lavaux”.
                </li>
                <li>
                  Eﬃciency -We schedule each shipment and take care of the
                  deliveries from the place of departure until the arrival
                  destination.
                </li>
                <li>
                  Long-term oriented - We aim to build strong links with our
                  future partners.
                </li>
                <li>
                  High-quality products - We can provide bottles from different
                  types of grape varieties, all coming from trusted winemakers
                  with their traditional methods.
                </li>
              </ol>
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/img-w.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>
              Enjoy the Exclusivity of Working with SUI Wine Imports Limited
            </h2>
            <p>
              Are you looking to benefit from the highest quality wines without
              worrying about the shortage of stock? Look no further than SUI
              Wine Imports Limited – the first company in the UK to offer
              exclusive contracts with the winemakers.
              <br />
              <br />
              At SUI Wine Imports Limited, we understand the importance of
              providing a steady supply of quality wines. That is why we have
              made sure to secure enough stock with the winemakers to never run
              out. Our customers can rest assured that they will always be able
              to benefit from the highest quality wines.
              <br />
              <br />
              We are proud to be one of the few companies in the UK that has
              access to a large selection of wines from Switzerland. In
              Switzerland, only 1% of wines are exported abroad, making these
              wines highly sought after and exclusive. With our exclusive
              contracts with the winemakers, SUI Wine Imports Limited customers
              have access to some of the rarest and finest wines in the world.
              <br />
              <br />
              We understand that the quality of the wines is of utmost
              importance to our customers. That is why we strive to make sure
              that each and every bottle of wine we offer is of the highest
              quality. We regularly inspect the wines to guarantee that they
              meet our highest standards.
              <br />
              <br />
              At SUI Wine Imports Limited, we are committed to providing the
              best possible service to our customers. Our dedicated team is
              always available to answer any questions you may have about our
              wines and services. We also offer customised services tailored to
              meet your specific needs and requirements.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/img-w1.jpg"
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
  );
};

export default About;
