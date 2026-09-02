import logo from "./assets/icons/logo.svg";
import logoLight from "./assets/icons/logo-light.svg";
import heroBackground from "./assets/images/heroBackground.webp";
import heroTower from "./assets/images/heroTower.webp";
import heroChurch from "./assets/images/heroChurch.webp";
import heroGrass from "./assets/images/heroGrass.webp";
import heroTablet from "./assets/images/heroTablet.webp";
import heroThumb from "./assets/images/heroThumb.webp";
import missionSky from "./assets/images/missionSky.webp";
import missionSkyMobile from "./assets/images/missionSkyMobile.webp";
import missionSkyTablet from "./assets/images/missionSkyTablet.webp";
import missionTemple from "./assets/images/missionTemple.webp";
import missionRed from "./assets/images/missionRed.webp";
import aboutHero from "./assets/images/aboutHero.webp";
import aboutRoof from "./assets/images/aboutRoof.webp";
import aboutInterior from "./assets/images/aboutInterior.webp";
import aboutWide from "./assets/images/aboutWide.webp";
import aboutDetail from "./assets/images/aboutDetail.webp";
import lecture1 from "./assets/images/lecture1.webp";
import lecture2 from "./assets/images/lecture2.webp";
import lecture3 from "./assets/images/lecture3.webp";
import product1 from "./assets/images/product1.webp";
import product2 from "./assets/images/product2.webp";
import product3 from "./assets/images/product3.webp";
import donationCloudLeft from "./assets/images/donation-cloud-left.webp";
import donationCloudCenter from "./assets/images/donation-cloud-center.webp";
import donationCloudRight from "./assets/images/donation-cloud-right.webp";
import donationLand from "./assets/images/donation-land.webp";
import team1 from "./assets/images/team_1.webp";
import team2 from "./assets/images/team_2.webp";
import team3 from "./assets/images/team_3.webp";
import team4 from "./assets/images/team_4.webp";
import team5 from "./assets/images/team_5.webp";
import arrowIcon from "./assets/icons/arrow.svg";
import { useCarousel } from "./hooks/useCarousel";
import { useSwipeCarousel } from "./hooks/useSwipeCarousel";
import { useParallax } from "./hooks/useParallax";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useCountUp } from "./hooks/useCountUp";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const LECTURES = [
  {
    title: "The Northern Lands: Architecture and Folklore",
    author: "Anja Kowalska",
    description:
      'The culture of the northern lands took shape in the 16th and 17th centuries, giving rise to distinctive northern "schools" of wooden architecture, painting, and carving. In this lecture, we\'ll explore what sets the northern schools apart from those of the southern regions and take a closer look at some of the most remarkable works of art from the region.',
    price: "12€",
    image: lecture1,
  },
  {
    title: "Wooden Churches of the North: A Vanishing World",
    author: "Marek Vilkas",
    description:
      "For centuries, the villages of the North were home to some of the most extraordinary wooden churches ever built - soaring tented roofs, onion domes shaped by axe alone, and interiors painted with quiet devotion. Today, many of these monuments are on the brink of being lost forever. In this lecture, we'll trace the story of northern wooden church-building, from its medieval roots to the master carpenters of the 18th century, and consider what it means to save what still stands.",
    price: "12€",
    image: lecture2,
  },
  {
    title: "Life Along the Northern Dvina: Villages, Trades, and Traditions",
    author: "Marek Vilkas",
    description:
      "The northern lands were never truly isolated - they were shaped by rivers, trade routes, and centuries of exchange between peasants, monks, merchants, and the peoples of the surrounding forests. This lecture takes you into everyday life in a northern village: the rhythm of the seasons, the crafts passed down through generations, the songs and rituals that filled the long winter nights, and the quiet resilience of communities living at the edge of the settled world.",
    price: "12€",
    image: lecture3,
  },
];

const PRODUCTS = [
  {
    title: "Dotted Notebook: Wooden North",
    description:
      "A hardcover dot-grid notebook for sketching, planning, or thinking on paper. 160 pages of thick cream stock, sewn binding that opens flat, and a cover embossed with the silhouette of a traditional wooden church. Made in small batches, printed locally.",
    price: "22€",
    image: product1,
  },
  {
    title: "Wooden Temples of the North: Structure and Craft",
    description:
      "An illustrated book on the architecture of northern wooden churches - from the joinery of log walls to the geometry of tented roofs, from foundation stones to iconostasis screens. Written for anyone curious about how these buildings actually stand, with technical drawings, historical photographs, and diagrams by working restorers. 240 pages, hardcover.",
    price: "42€",
    image: product2,
  },
  {
    title: "Miniature Wooden Church Model",
    description:
      "A hand-carved wooden model of the Church of the Prophet Elijah, made by a master carver from restoration workshop offcuts. Roughly 20 cm tall, mounted on a small wooden base with brass plaque. Each piece is unique - no two are exactly alike.",
    price: "180€",
    image: product3,
  },
];

const TEAM = [
  { name: "Anja Kowalska", role: "Founder & Restoration Lead", image: team1 },
  { name: "Elena Kalinina", role: "Field Coordinator", image: team2 },
  { name: "Katrin Berzins", role: "Educational Programs", image: team3 },
  { name: "Marek Vilkas", role: "Architectural Historian", image: team4 },
  { name: "Andrei Petrov", role: "Volunteer Coordinator", image: team5 },
];

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  const backgroundRef = useParallax(-0.1);
  const towerRef = useParallax(-0.25);
  const churchRef = useParallax(-0.4);
  const grassRef = useParallax(-0.6);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)",
  );
  const isDesktop = !isMobile && !isTablet;

  const [churchesCount, churchesRef] = useCountUp(14);
  const [expeditionsCount, expeditionsRef] = useCountUp(47);
  const [raisedCount, raisedRef] = useCountUp(450);

  const missionScrollRef = useScrollProgress();
  const donationScrollRef = useScrollProgress("through");

  const [activeLecture, nextLecture] = useCarousel(LECTURES.length);
  const [activeProduct, nextProduct] = useCarousel(PRODUCTS.length);

  const lecturesSwipe = useSwipeCarousel(LECTURES.length);
  const productsSwipe = useSwipeCarousel(PRODUCTS.length);

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <div>
      <header className="header">
        <div className="header__inner container">
          <a href="/" className="header__logo logo" aria-label="Northern Soul Foundation - home">
            <img
              className="logo__image"
              src={logo}
              alt=""
              width="178"
              height="48"
              fetchPriority="high"
            />
          </a>

          <nav className="header__menu hidden-mobile">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href="#mission" className="header__menu-link">
                  Our Mission
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#church" className="header__menu-link">
                  The Church
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#shop" className="header__menu-link">
                  Shop
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#lectures" className="header__menu-link">
                  Lectures
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#donate"
            className="header__button button button--accent hidden-mobile"
          >
            Donate
          </a>

          <button
            className="header__burger-button burger-button visible-mobile"
            type="button"
            onClick={() => document.getElementById("mobileOverlay").showModal()}
          >
            <span className="visually-hidden">Open navigation menu</span>
          </button>
        </div>
      </header>

      <main className="content">
        <section className="section section--hero">
          <div className="hero">
            {/* Media: for parallax effect*/}
            <div className="hero__media hero__media--back">
              {isDesktop && (
                <>
                  <img
                    ref={backgroundRef}
                    className="hero__layer hero__layer--background"
                    src={heroBackground}
                    alt=""
                    fetchPriority="high"
                  />
                  <img
                    ref={towerRef}
                    className="hero__layer hero__layer--tower"
                    src={heroTower}
                    alt=""
                    fetchPriority="high"
                  />
                </>
              )}

              {isMobile && (
                <img
                  className="hero__mobile-image"
                  src="/images/heroMobile.webp"
                  alt=""
                  fetchPriority="high"
                />
              )}

              {isTablet && (
                <img
                  className="hero__tablet-image"
                  src={heroTablet}
                  alt=""
                  fetchPriority="high"
                />
              )}
            </div>

            <div className="hero__media hero__media--front">
              {isDesktop && (
                <>
                  <img
                    ref={churchRef}
                    className="hero__layer hero__layer--church"
                    src={heroChurch}
                    alt=""
                    fetchPriority="high"
                  />
                  <img
                    ref={grassRef}
                    className="hero__layer hero__layer--grass"
                    src={heroGrass}
                    alt=""
                    fetchPriority="high"
                  />
                </>
              )}
            </div>

            <div className="hero__content">
              <h1 className="hero__title">Northern Soul</h1>
              <p className="hero__subtitle">
                Wooden Architecture & Rural
                <br />
                Heritage Foundation
              </p>
            </div>

            {/* Current project card */}
            <div className="hero__project project-card">
              <div className="project-card__info">
                <div className="project-card__content">
                  <img
                    className="project-card__thumb hidden-mobile"
                    src={heroThumb}
                    alt=""
                    width="80"
                    height="80"
                  />
                  <div className="project-card__text">
                    <span className="project-card__label">Current project</span>
                    <span className="project-card__title text-bold">
                      Wooden Church of the Prophet Elijah
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop: heart / Mobile: simple button */}
              <a
                href="#current-project"
                className="project-card__like hidden-mobile"
                aria-label="Donate"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="project-card__like-text">Donate</span>
              </a>
              <a
                href="#current-project"
                className="project-card__cta button button--accent visible-mobile"
              >
                Donate now
              </a>
            </div>
          </div>
        </section>

        <section className="section section--stats">
          <div className="stats container">
            <div className="stats__item">
              <p ref={churchesRef} className="stats__number">
                {churchesCount}
              </p>
              <p className="stats__label">Churches Restored</p>
            </div>

            <div className="stats__item">
              <p ref={expeditionsRef} className="stats__number">
                {expeditionsCount}
              </p>
              <p className="stats__label">Expeditions</p>
            </div>

            <div className="stats__item">
              <p ref={raisedRef} className="stats__number">
                {raisedCount}
                <span className="stats__number-accent">K</span>
              </p>
              <p className="stats__label">Raised</p>
            </div>
          </div>
        </section>

        <section
          id="mission"
          ref={missionScrollRef}
          className="section section--mission mission"
          aria-labelledby="mission-title"
        >
          {/* Content: top half */}
          <div className="mission__body">
            {/* Sky background: desktop/tablet version (no temple) */}
            <img
              className="mission__sky hidden-mobile hidden-tablet"
              src={missionSky}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />

            {/* Tablet only */}
            <img
              className="mission__sky visible-tablet"
              src={missionSkyTablet}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />

            {/* Mobile only */}
            <img
              className="mission__sky visible-mobile"
              src={missionSkyMobile}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />

            <div className="mission__body-inner container">
              <h2 id="mission-title" className="mission__title">Our Mission</h2>

              <ul className="mission__pillars">
                <li className="mission__pillar mission__pillar--left-1">
                  <h3 className="mission__pillar-title">Restoration</h3>
                  <p className="mission__pillar-description">
                    of the wooden Church of the Prophet Elijah in the village of
                    Seltso
                  </p>
                </li>

                <li className="mission__pillar mission__pillar--right-1">
                  <h3 className="mission__pillar-title">Revival</h3>
                  <p className="mission__pillar-description">
                    of northern villages and churches
                  </p>
                </li>

                <li className="mission__pillar mission__pillar--left-2">
                  <h3 className="mission__pillar-title">Education</h3>
                  <p className="mission__pillar-description">
                    sharing and preserving knowledge of Slavic culture
                  </p>
                </li>

                <li className="mission__pillar mission__pillar--right-2">
                  <h3 className="mission__pillar-title">Preservation</h3>
                  <p className="mission__pillar-description">
                    of our culture and identity
                  </p>
                </li>

                <li className="mission__pillar mission__pillar--left-3">
                  <h3 className="mission__pillar-title">Community</h3>
                  <p className="mission__pillar-description">
                    bringing together those who love the northern lands
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Content: bottom banner */}
          <div className="mission__banner">
            {/* Temple: desktop/tablet only, spans both parts */}
            <img
              className="mission__temple hidden-mobile hidden-tablet"
              src={missionTemple}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <img
              className="mission__red"
              src={missionRed}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <div className="mission__banner-inner container">
              <a href="#donate" className="mission__cta button button--outline">
                Donate now
              </a>

              <p className="mission__banner-text">
                All proceeds go toward the restoration
                <br />
                of the Church of the Prophet Elijah
                <br />
                in the village of Seltso
              </p>
            </div>
          </div>
        </section>

        <section id="church" className="section section--about about" aria-labelledby="church-title">
          <div className="container">
            <h2 id="church-title" className="about__title">About the Church</h2>

            {/* Desktop/tablet: hero image with gradient darkening + Read more hint on top */}
            <div className="about__hero-wrapper hidden-mobile">
              <figure className="about__hero">
                <img
                  className="about__hero-image"
                  src={aboutHero}
                  alt="Seletsky Pogost overview showing three historic structures"
                  loading="lazy"
                />
              </figure>

              <div className={`about__hero-overlay ${isAboutOpen ? "about__hero-overlay--open" : ""}`}>
                <button
                  type="button"
                  className={`about__toggle ${isAboutOpen ? "about__toggle--open" : ""}`}
                  onClick={() => setIsAboutOpen((prev) => !prev)}
                  aria-expanded={isAboutOpen}
                >
                  <span className="about__toggle-label">
                    {isAboutOpen ? "Show less" : "Read more"}
                  </span>
                  <span className="about__toggle-chevron-wrap">
                    <img
                      className="about__toggle-chevron"
                      src={arrowIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile only: Row 1 always visible as teaser */}
            <div className="about__row grid grid--2 visible-mobile">
              <div className="about__text">
                <p>
                  The Seletsky Pogost stands on a hill near the Northern Dvina
                  River, in the village of Seltso in Arkhangelsk Oblast. The
                  ensemble originally sat closer to the water but was moved
                  twice due to the risk of flooding, finally settling at its
                  present site in 1798.
                </p>
              </div>
              <figure className="about__image">
                <img
                  className="about__image-picture"
                  src={aboutRoof}
                  alt="Restoration work on the church roof"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* Mobile only: standalone Read more / Show less hint */}
            <div className="about__toggle-wrapper visible-mobile">
              <button
                type="button"
                className={`about__toggle ${isAboutOpen ? "about__toggle--open" : ""}`}
                onClick={() => setIsAboutOpen((prev) => !prev)}
                aria-expanded={isAboutOpen}
              >
                <span className="about__toggle-label">
                  {isAboutOpen ? "Show less" : "Read more"}
                </span>
                <span className="about__toggle-chevron-wrap">
                  <img
                    className="about__toggle-chevron"
                    src={arrowIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>

            {/* Collapsible content */}
            <div className={`about__details ${isAboutOpen ? "about__details--open" : ""}`}>
              <div className="about__details-inner">
                {/* Row 1 - desktop/tablet only (mobile copy is above) */}
                <div className="about__row grid grid--2 hidden-mobile">
                  <div className="about__text">
                    <p>
                      The Seletsky Pogost stands on a hill near the Northern Dvina
                      River, in the village of Seltso in Arkhangelsk Oblast. The
                      ensemble originally sat closer to the water but was moved
                      twice due to the risk of flooding, finally settling at its
                      present site in 1798.
                    </p>
                  </div>
                  <figure className="about__image">
                    <img
                      className="about__image-picture"
                      src={aboutRoof}
                      alt="Restoration work on the church roof"
                      loading="lazy"
                    />
                  </figure>
                </div>

                {/* Row 2 */}
                <div className="about__row grid grid--2">
                  <figure className="about__image">
                    <img
                      className="about__image-picture"
                      src={aboutInterior}
                      alt="Church interior with wooden beams"
                      loading="lazy"
                    />
                  </figure>
                  <div className="about__text">
                    <p>
                      The pogost comprises three structures: the wooden Church of
                      the Prophet Elijah (1607), the bell tower (1800), and the
                      stone Church of the Exaltation of the Holy Cross (1802-1806).
                    </p>
                    <p>
                      The 1798 relocation involved dismantling the church and
                      reassembling it on its new site, though many of its elements
                      are believed to date back to the 17th century.
                    </p>
                  </div>
                </div>

                {/* Wide photo */}
                <figure className="about__wide">
                  <img
                    className="about__wide-image"
                    src={aboutWide}
                    alt="Wooden church exterior with visitor pointing to structure"
                    loading="lazy"
                  />
                </figure>

                {/* Row 3 */}
                <div className="about__row grid grid--2">
                  <div className="about__text">
                    <p>
                      The church is a quintessential example of 18th-century
                      northern wooden architecture - crowned with a tented roof and
                      clad in plank boarding - and it is the only tented-roof church
                      in the Podvinye region still standing with its top intact.
                    </p>
                    <p>
                      Conservation work began in the late 1980s but was left
                      unfinished. It resumed in 2023, though full restoration is
                      still a long way off - the monument requires comprehensive
                      restoration.
                    </p>
                  </div>
                  <figure className="about__image">
                    <img
                      className="about__image-picture"
                      src={aboutDetail}
                      alt="Detail of wooden church construction"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="lectures" className="section section--lectures lectures" aria-labelledby="lectures-title">
          <div className="container">
            <h2 className="lectures__title visible-mobile">Lectures</h2>
            <div className="lectures__inner">
              {/* Mobile card */}
              <div className="lectures__carousel visible-mobile">
                {/* Progress bars on top */}
                <div className="lectures__progress">
                  {LECTURES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`lectures__progress-bar ${
                        index === lecturesSwipe.activeIndex
                          ? "lectures__progress-bar--active"
                          : ""
                      }`}
                      onClick={() => lecturesSwipe.goTo(index)}
                      aria-label={`Show lecture ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Scroll container with cards */}
                <div
                  className="lectures__track"
                  ref={lecturesSwipe.containerRef}
                >
                  {LECTURES.map((lecture, index) => (
                    <div key={index} className="lectures__slide">
                      <div
                        className="lectures__mobile-tile"
                        onClick={() =>
                          lecturesSwipe.goTo(
                            (lecturesSwipe.activeIndex + 1) % LECTURES.length,
                          )
                        }
                      >
                        <img
                          className="lectures__mobile-image"
                          src={lecture.image}
                          alt=""
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="lectures__mobile-overlay">
                          <div className="lectures__mobile-header">
                            <h3 className="lectures__mobile-title">
                              {lecture.title}
                            </h3>
                            <span className="lectures__mobile-price">
                              {lecture.price}
                            </span>
                          </div>
                          <p className="lectures__mobile-author">
                            A video lecture by {lecture.author}
                          </p>
                          <p className="lectures__mobile-description">
                            {lecture.description}
                          </p>
                          <a
                            href="#buy"
                            className="lectures__mobile-buy button button--accent"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop layout */}
              <div className="lectures__content hidden-mobile">
                <h2 id="lectures-title" className="lectures__title">Lectures</h2>

                <div className="lectures__card">
                  <h3 className="lectures__card-title">
                    {LECTURES[activeLecture].title}
                  </h3>
                  <p className="lectures__card-author">
                    A video lecture by {LECTURES[activeLecture].author}
                  </p>
                  <p className="lectures__card-description">
                    {LECTURES[activeLecture].description}
                  </p>
                  <p className="lectures__card-price">
                    {LECTURES[activeLecture].price}
                  </p>
                  <a
                    href="#buy"
                    className="lectures__card-button button button--accent"
                  >
                    Buy
                  </a>
                </div>
              </div>

              <button
                type="button"
                className="lectures__preview hidden-mobile"
                onClick={nextLecture}
                aria-label="Show next lecture"
              >
                <img
                  className="lectures__preview-image"
                  src={LECTURES[activeLecture].image}
                  alt=""
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </section>

        <section id="shop" className="section section--products products" aria-labelledby="products-title">
          <div className="container">
            {/* Mobile title on top */}
            <h2 className="products__title visible-mobile">Our Products</h2>

            <div className="products__inner">
              {/* Mobile card */}
              <div className="products__carousel visible-mobile">
                <div className="products__progress">
                  {PRODUCTS.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`products__progress-bar ${
                        index === productsSwipe.activeIndex
                          ? "products__progress-bar--active"
                          : ""
                      }`}
                      onClick={() => productsSwipe.goTo(index)}
                      aria-label={`Show product ${index + 1}`}
                    />
                  ))}
                </div>

                <div
                  className="products__track"
                  ref={productsSwipe.containerRef}
                >
                  {PRODUCTS.map((product, index) => (
                    <div key={index} className="products__slide">
                      <div
                        className="products__mobile-tile"
                        onClick={() =>
                          productsSwipe.goTo(
                            (productsSwipe.activeIndex + 1) % PRODUCTS.length,
                          )
                        }
                      >
                        <img
                          className="products__mobile-image"
                          src={product.image}
                          alt=""
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="products__mobile-overlay">
                          <div className="products__mobile-header">
                            <h3 className="products__mobile-title">
                              {product.title}
                            </h3>
                            <span className="products__mobile-price">
                              {product.price}
                            </span>
                          </div>
                          <p className="products__mobile-description">
                            {product.description}
                          </p>
                          <a
                            href="#buy"
                            className="products__mobile-buy button button--accent"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="products__preview hidden-mobile"
                onClick={nextProduct}
                aria-label="Show next product"
              >
                <img
                  className="products__preview-image"
                  src={PRODUCTS[activeProduct].image}
                  alt=""
                  loading="lazy"
                />
              </button>

              <div className="products__content hidden-mobile">
                {/* Title stays inside for desktop */}
                <h2 id="products-title" className="products__title">Our Products</h2>

                <div className="products__card">
                  <h3 className="products__card-title">
                    {PRODUCTS[activeProduct].title}
                  </h3>
                  <p className="products__card-description">
                    {PRODUCTS[activeProduct].description}
                  </p>
                  <p className="products__card-price">
                    {PRODUCTS[activeProduct].price}
                  </p>
                  <a
                    href="#buy"
                    className="products__card-button button button--accent"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="donate"
          ref={donationScrollRef}
          className="section section--donation donation"
          aria-labelledby="donation-title"
        >
          {/* Background decorative elements */}
          <img
            className="donation__cloud donation__cloud--left"
            src={donationCloudLeft}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="donation__cloud donation__cloud--center"
            src={donationCloudCenter}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="donation__cloud donation__cloud--right"
            src={donationCloudRight}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="donation__land"
            src={donationLand}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />

          {/* Content */}
          <div className="container">
            <div className="donation__content">
              <h2 id="donation-title" className="donation__title">Make a Donation</h2>

              <div className="donation__form">
                <form
                  className="donation-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <p className="donation-form__hint">
                    Choose your contribution
                  </p>
                  {/* Type toggle */}
                  <div className="donation-form__toggle">
                    <button
                      type="button"
                      className={`donation-form__toggle-button ${
                        donationType === "one-time"
                          ? "donation-form__toggle-button--active"
                          : ""
                      }`}
                      onClick={() => setDonationType("one-time")}
                    >
                      One time
                    </button>
                    <button
                      type="button"
                      className={`donation-form__toggle-button ${
                        donationType === "monthly"
                          ? "donation-form__toggle-button--active"
                          : ""
                      }`}
                      onClick={() => setDonationType("monthly")}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Amount buttons */}
                  <div className="donation-form__amounts">
                    {[10, 25, 50].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`donation-form__amount ${
                          selectedAmount === amount
                            ? "donation-form__amount--active"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        {amount}€
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <input
                    type="number"
                    inputMode="numeric"
                    min="1"
                    placeholder="Enter amount..."
                    className="donation-form__input"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                  />

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="donation-form__submit button button--accent"
                    disabled={!finalAmount || finalAmount < 1}
                  >
                    Donate {finalAmount ? `- ${finalAmount}€` : ""}{" "}
                    {donationType === "monthly" ? "Monthly" : ""}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--team team" aria-labelledby="team-title">
          <div className="container">
            <h2 id="team-title" className="team__title">Our Team</h2>

            <ul className="team__list">
              {TEAM.map((member, index) => (
                <li key={index} className="team__item">
                  <div className="team__photo-wrapper">
                    <img
                      className="team__photo"
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__role">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer__grid">
              {/* Column 1: Logo + description + socials */}
              <div className="footer__column footer__column--brand">
                <a href="/" className="footer__logo">
                  <img
                    src={logoLight}
                    alt="Northern Soul Foundation"
                    className="footer__logo-image"
                    width="272"
                    height="48"
                    loading="lazy"
                  />
                </a>
                <p className="footer__tagline">
                  A registered non-profit dedicated to preserving the wooden
                  heritage of the Baltic-Slavic north.
                </p>
                <ul className="footer__socials">
                  <li>
                    <a
                      href="https://instagram.com"
                      className="footer__social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      className="footer__social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://patreon.com"
                      className="footer__social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Patreon
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Menu */}
              <nav className="footer__column">
                <h3 className="footer__heading">Menu</h3>
                <ul className="footer__menu">
                  <li>
                    <a href="#mission" className="footer__link">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#church" className="footer__link">
                      The Church
                    </a>
                  </li>
                  <li>
                    <a href="#lectures" className="footer__link">
                      Lectures
                    </a>
                  </li>
                  <li>
                    <a href="#shop" className="footer__link">
                      Shop
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Column 3: Contact */}
              <div className="footer__column">
                <h3 className="footer__heading">Contact</h3>
                <address className="footer__contact">
                  <a
                    href="mailto:hello@northernsoul.org"
                    className="footer__link"
                  >
                    hello@northernsoul.org
                  </a>
                  <p className="footer__address">
                    Gedimino pr. 24
                    <br />
                    Vilnius LT-01103
                    <br />
                    Lithuania
                  </p>
                </address>
              </div>

              {/* Column 4: Support the work */}
              <div className="footer__column">
                <h3 className="footer__heading">Support the work</h3>
                <p className="footer__cta-text">
                  Every restoration, lecture, and expedition is funded by our
                  supporters.
                </p>
                <a href="#donate" className="footer__cta button button--accent">
                  Donate - from 10€
                </a>
              </div>
            </div>

            <div className="footer__bottom">
              <p className="footer__copyright">
                © 2026 Northern Soul Foundation · Reg. No. 2015/473 · Vilnius,
                LT
              </p>
              <ul className="footer__legal">
                <li>
                  <a href="#privacy" className="footer__link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="footer__link">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="footer__link">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>

      <dialog className="mobile-overlay visible-mobile" id="mobileOverlay">
        <form className="mobile-overlay__close-button-wrapper" method="dialog">
          <button
            className="mobile-overlay__close-button cross-button"
            type="submit"
          >
            <div className="visually-hidden">Close navigation menu</div>
          </button>
        </form>

        <div className="mobile-overlay__body">
          <ul className="mobile-overlay__list">
            <li className="mobile-overlay__item">
              <a href="#mission" className="mobile-overlay__link">
                Our Mission
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a href="#church" className="mobile-overlay__link">
                The Church
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a href="#shop" className="mobile-overlay__link">
                Shop
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a href="#lectures" className="mobile-overlay__link">
                Lectures
              </a>
            </li>
          </ul>
        </div>
      </dialog>
    </div>
  );
};

export default App;
