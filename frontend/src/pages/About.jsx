import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

function About(){
  const {t} = useTranslation()
    return(
        <>
        <Navbar />
         <>
  <div
    id="banner-area"
    className="banner-area"
    style={{ backgroundImage: "url(./assets/images/banner/banner1.jpg)" }}
  >
    <div className="banner-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-heading">
              <h1 className="banner-title">{t("About.about")}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">{t("About.home")}</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/company">{t("About.company")}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  {t("About.aboutUs")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Col end */}
        </div>
        {/* Row end */}
      </div>
      {/* Container end */}
    </div>
    {/* Banner text end */}
  </div>


  {/* Banner area end */}
  <section id="main-container" className="main-container">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="column-title">{t("About.whoweare")}</h3>
                <p>
                    {t("About.atMoudwork")}
                    
                </p>
                <blockquote>
                    <p>
                        {t("About.quote")}
                        
                    </p>
                </blockquote>
                <p>
                    {t("About.ourapproach")}
                </p>
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-5 mt-lg-0">
                <div id="page-slider" className="page-slider small-bg">
                    <div
                        className="item"
                        style={{
                            backgroundImage: "url(./assets/images/slider-pages/slide-page1.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">{t("About.OurVision")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 1 end */}
                    <div
                        className="item"
                        style={{
                            backgroundImage: "url(./assets/images/slider-pages/slide-page2.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">{t("About.OurValues")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 end */}
                    <div
                        className="item"
                        style={{
                            backgroundImage: "url(./assets/images/slider-pages/slide-page3.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">{t("About.OurCommitment")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 end */}
                </div>
                {/* Page slider end */}
            </div>
            {/* Col end */}
        </div>
        {/* Content row end */}
    </div>
    {/* Container end */}
</section>



  {/* Main container end */}
  <section id="facts" className="facts-area dark-bg">
    <div className="container">
      <div className="facts-wrapper">
        <div className="row">
          <div className="col-md-3 col-sm-6 ts-facts">
            <div className="ts-facts-img">
              <img
                loading="lazy"
                src="./assets/images/icon-image/fact1.png"
                alt="facts-img"
              />
            </div>
            <div className="ts-facts-content">
              <h2 className="ts-facts-num">
                <span className="counterUp" data-count={96}>
                  0
                </span>
              </h2>
              <h3 className="ts-facts-title">{t("About.totalprojects")}</h3>
            </div>
          </div>
          {/* Col end */}
          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
            <div className="ts-facts-img">
              <img
                loading="lazy"
                src="./assets/images/icon-image/fact2.png"
                alt="facts-img"
              />
            </div>
            <div className="ts-facts-content">
              <h2 className="ts-facts-num">
                <span className="counterUp" data-count={35}>
                  0
                </span>
              </h2>
              <h3 className="ts-facts-title">{t("About.staffMembers")}</h3>
            </div>
          </div>
          {/* Col end */}
          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
            <div className="ts-facts-img">
              <img
                loading="lazy"
                src="./assets/images/icon-image/fact3.png"
                alt="facts-img"
              />
            </div>
            <div className="ts-facts-content">
              <h2 className="ts-facts-num">
                <span className="counterUp" data-count={43800}>
                  0
                </span>
              </h2>
              <h3 className="ts-facts-title">{t("About.hoursOfWork")}</h3>
            </div>
          </div>
          {/* Col end */}
          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
            <div className="ts-facts-img">
              <img
                loading="lazy"
                src="./assets/images/icon-image/fact4.png"
                alt="facts-img"
              />
            </div>
            <div className="ts-facts-content">
              <h2 className="ts-facts-num">
                <span className="counterUp" data-count={12}>
                  0
                </span>
              </h2>
              <h3 className="ts-facts-title">{t("About.citiesServed")}</h3>
            </div>
          </div>
          {/* Col end */}
        </div>{" "}
        {/* Facts end */}
      </div>
      {/*/ Content row end */}
    </div>
    {/*/ Container end */}
  </section>

</>
<Footer />
        </>
    )
}

export default About;