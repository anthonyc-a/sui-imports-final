import Image from "next/image";
import React from "react";
import Heading from "../components/common/Heading/Heading";
import VinesOne from "../components/common/Illustrations/VinesOne";
import VinesTwo from "../components/common/Illustrations/VinesTwo";
import Layout from "../components/Layout/Layout";

import styles from "../styles/about.module.css";

const Winemakers = () => {
  return (
    <div className="container">
      <Layout title="History & Winemakers">
        <h1>
          History & <span>Winemakers</span>
        </h1>
        <div className={styles["about-content"]}>
          <div className={styles["about-image"]}>
            <Image
              src="/img-w3.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>
              Lavaux Region Production
            </h2>
            <p>
              The production of wines in the region of Lavaux, Switzerland is a
              highly specialised process that results in unique, high-quality
              wines. This region is well-known for its steep terraced hillsides,
              which are ideal for cultivating vines. The grapevines are
              carefully chosen and hand-harvested in the fall.
            </p>
            <p>
              Once the grapes are harvested, the process of making wine begins.
              After sorting and destemming, fermentation takes place for two
              weeks in either tanks or barrels. During this time, the wine is
              aerated and stirred to enhance its flavour. After fermentation,
              the wine is aged for a minimum of six months in either barrels or
              tanks depending on the desired outcome.
            </p>
            <p>
              The ageing process is the key to producing high-quality wine in
              Lavaux. The ageing process helps the tannins develop and the
              flavours to come together. During this time, the winemakers will
              monitor the wines closely, tasting them to see how they are
              progressing and deciding when they are ready to be blended and
              bottled. When the wines are ready, they will be labelled and
              marketed to the public.
            </p>
            <p>
              The wines of Lavaux are unique and complex, exhibiting flavours of
              ripe fruits, spices, and herbs. This is largely due to the cool
              temperatures, generous sunshine, and the steep terraced hillsides
              that help protect the vines from the elements. The traditional
              process of making wines in Lavaux ensures their rarity and the
              quality of the end product.
            </p>
            <p>
              The meticulous process of producing wines in Lavaux is essential
              for producing the highest quality wines. The steep slopes, cool
              temperatures, and long ageing times give the wines their unique
              flavours, making them sought-after by connoisseurs. The wines of
              Lavaux are not only rare and high in quality, but also highly
              sought after for their complexity and depth of flavour.
            </p>
          </div>
        </div>
        <Heading text="Background & Culture" />

        <div className={styles["about-content"]}>
          <div className={styles["about-image"]}>
            <Image
              src="/fv.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Fête des Vignerons</h2>
            <p>
              How can we mention the Lavaux without the famously known
              &quot;Fête des Vignerons&quot; hosted in Vevey without which, the
              history and culture of Lavaux would not be complete.
            </p>
            <p>
              Organised by the “Confrérie des Vignerons”, this unique
              celebration takes place once every two decades in Vevey, a town
              located in the heart of the Lavaux vineyards in the canton of
              Vaud, Switzerland.
            </p>
            <p>
              The Winegrowers&apos; Festival pays tribute to the centuries-old
              winegrowing traditions of an entire region through a show and the
              crowning of the winegrower-crafters.
            </p>
            <p>
              The first Fête des Vignerons in 1797 used wooden stands with a
              capacity of less than 2000 seats. The 2019 open-air arena had a
              seating capacity of 20,000 and 30 metres high towers.
            </p>
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>
              Swiss Wine Awards by VINEA
            </h2>
            <p>
              The Grand Prix du Vin Suisse aims to promote the quality of Swiss
              wines. The aim of the “GPVS” is to highlight the quality of Swiss
              wines and to support the efforts of the Swiss wine industry to
              meet the requirements of the national and international wine
              market.
            </p>
            <p>
              All Swiss wine producers have the opportunity to participate in
              this competition.
            </p>
            <p>
              The wines are divided into different categories and assessed in a
              professional and neutral tasting.
            </p>
            <p>
              The Swiss Association of Enologists (SAEO) is the patron of the
              competition.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/awards.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Heading text="Winemakers" />

        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Neyroud-Fonjallaz</h2>
            <p>
              The Neyroud-Fonjallaz domain’s 7.4 acres sit in the heart of the
              millennium-old Lavaux region, in Chardonne, offering you a
              panoramic view over Lake Geneva and the Alps. This exceptional
              region is listed as a UNESCO World Heritage Site. Our vines are
              located in several renowned production areas: Chardonne, St.
              Saphorin, Calamin and Dézaley.
              <br />
              <br /> Chasselas, our “king” grape that originally comes from our
              Lake Geneva region, is at its finest here, expressing beautifully
              the individuality of each terroir. Other specialities such as
              Pinot Gris, Pinot Noir and Gamaret thrive here as well.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/neyroud.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Jean-Marc Favez</h2>
            <p>
              In 2000 Jean-Marc Favez, previously a banker decided to become a
              winemaker.
              <br />
              <br />
              Son of a winemaker, his father Raymond Favez was crowned during a
              unique celebration, in the “Confrerie des Vignerons” in 1999,
              dedicated to him. He started the construction of a cave, located
              in the heart of Lavaux, the vineyards are split in 3 main areas
              Vevey, Montreux and St-Saphorin.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/jean-marc.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Basile Monachon</h2>
            <p>
              United by blood and vines in Rivaz, Lavaux, the Monachon family
              has been faithfully and passionately dedicated to the vineyard and
              wine work for about three centuries.
              <br />
              <br />
              On the estate&apos;s hillsides, farming is performed with an
              uncompromising respect for terroir, each grape variety being
              sourced out of the most favourable soil and microclimate.
              <br />
              <br />
              The specific flavours linked to each plot and to each varietal are
              highlighted by rigorous vinifications. Shaped through a long
              maturing on fine lees, the wines are allowed to reach their full
              potential of expression, including a great diversity of styles and
              flavours.
              <br />
              <br />A dedication to environmental sustainability provides the
              wines with an extra guarantee of authenticity and truthfulness to
              our soils.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/basile.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>Christophe Francey</h2>
            <p>
              Exploited by the family Barbey since 1384. The domain is now
              belonging to Christophe Francey, he learned all the knowledge and
              skills from is grandfather.
              <br />
              <br />
              He developed his own idea and he contributes to the evolution of
              the 3 acres of vineyards. Located in the heart of lavaux,
              St-Saphorin, National World Heritage site Unesco.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/francey.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>François De Coulon</h2>
            <p>
              The Domaine du Château d&apos;Eclépens is one of the oldest wine
              estates in Switzerland. It has been in the hands of the De Coulon
              family since 1807. François has been managing the estate since
              2007 and represents the seventh generation of the family. In the
              Middle Ages, nobles built castles to control the surrounding area.
              They would also use them as centres of their administration and
              seat of their political and economic power.
              <br />
              <br />
              Today it is different. The de Coulon family and their employees
              work to transmit their values of respect for nature, a taste for
              great wines and the joy of sharing. The family&apos;s aim is to
              bring this historic place to life to the full, to inspire people
              of all ages, to make this heritage evolve and pass it on to future
              generations.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/coulon.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>
              Henri & Vincent Chollet
            </h2>
            <p>
              Nestled in the heart of the Lavaux hillsides, this domain is full
              of good surprises. The &quot;Domaine Mermetus&quot; is renowned
              for the quality and diversity of its wines, which are made from
              around twenty grape varieties spread over 7 hectares divided into
              70 parcels.
              <br />
              <br />
              There is a huge choice of more than 30 wines, with accessible and
              very good whites and reds of all ranges, with specificities that
              can only be found in this region.
              <br />
              <br />
              The production is constantly evolving, as evidenced by the
              domain&apos;s recent conversion to organic farming, with the
              ambition to sincerely transmit the identity of the place.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/chollet.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles["about-content"]}>
          <div className={styles["about-description"]}>
            <h2 className={styles["about-subheader"]}>
              Jean-Marc & Fabien Sordet
            </h2>
            <p>
              The &quot;Domaine des Sieurs&quot; has about 15 hectares of
              various grape varieties, a 700 square metre cellar, about 30
              stainless steel vats for the storage of some 140,000 litres of
              wine, and a barrel cellar. Inside the cellar, a banqueting room
              can accommodate up to 100 people.
              <br />
              <br />
              In 2005, Jean-Marc Sordet had the opportunity to take over a
              seven-hectare estate and a cellar in Luins. This acquisition
              allowed him to acquire a sufficient size to leave the cooperative
              and produce his own wine. From the start, the winegrower joined
              forces with his son, Fabien. A decade later, the Domaine des
              Sieurs, named after the largest parcel of land on the estate, has
              some 15 hectares in facilities built in 2010 next to the family
              home. The father-son duo works in a very complementary way.
              <br />
              <br />
              The comprehensive range includes a sparkling wine, a sweet wine,
              several oak-aged reds as well as the classic Chasselas, Pinot Noir
              and Gamay.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <Image
              src="/sordet.jpg"
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

export default Winemakers;
