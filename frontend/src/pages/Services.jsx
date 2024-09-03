import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
function Services(){
  
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
              <h1 className="banner-title">Service</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">{t("Services.home")}</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/services">Services</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  {t("Services.allservices")}
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
  <section id="main-container" className="main-container pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service1.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon1.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href=" /pricing">{t("Services.innovativeConstructionSolutions")}</a>
                </h3>
                <p>
                {t("Services.moudworkVision")}
                </p>
                <a
                  className="learn-more d-inline-block"
                  href=" /pricing"
                  aria-label="service-details"
                >
                   
                </a>
              </div>
            </div>
          </div>
          {/* Service1 end */}
        </div>
        {/* Col 1 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service2.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon2.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href=" /pricing">{t("Services.sustainableBuildingPractices")}</a>
                </h3>
                <p>
                  {t("Services.sustainabilityCommitment")}
                </p>
                <a
                  className="learn-more d-inline-block"
                  href=" /pricing"
                  aria-label="service-details"
                >
                   
                </a>
              </div>
            </div>
          </div>
          {/* Service2 end */}
        </div>
        {/* Col 2 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service3.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon3.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href=" /pricing">{t("Services.customDesignAndBuild")}</a>
                </h3>
                <p>
                  {t("Services.customDesignAndBuildSpecialization")}
                </p>
                <a
                  className="learn-more d-inline-block"
                  href=" /pricing"
                  aria-label="service-details"
                >
                   
                </a>
              </div>
            </div>
          </div>
          {/* Service3 end */}
        </div>
        {/* Col 3 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service4.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon4.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href=" /pricing">{t("Services.exteriorDesignExcellence")}</a>
                </h3>
                <p>
                  {t("Services.exteriorDesignServices")}
                </p>
                <a
                  className="learn-more d-inline-block"
                  href=" /pricing"
                  aria-label="service-details"
                >
                   
                </a>
              </div>
            </div>
          </div>
          {/* Service4 end */}
        </div>
        {/* Col 4 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service5.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon5.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href=" /pricing">{t("Services.comprehensiveRenovation")}</a>
                </h3>
                <p>
                  {t("Services.renovationProjectManagement")}
                </p>
                <a
                  className="learn-more d-inline-block"
                  href=" /pricing"
                  aria-label="service-details"
                >
                   
                </a>
              </div>
            </div>
          </div>
          {/* Service5 end */}
        </div>
        {/* Col 5 end */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="ts-service-box">
            <div className="ts-service-image-wrapper">
              <img
                loading="lazy"
                className="w-100"
                src="./assets/images/services/service6.jpg"
                alt="service-image"
              />
            </div>
            <div className="d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="./assets/images/icon-image/service-icon6.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-info">
                <h3 className="service-box-title">
                  <a href=" /pricing">{t("Services.safetyManagement")}</a>
                </h3>
                <p>
                  {t("Services.safetyManagementExp")}
                </p>
                <a
                  className="learn-more d-inline-block"
                  href=" /pricing"
                  aria-label="service-details"
                >
                   
                </a>
              </div>
            </div>
          </div>
          {/* Service6 end */}
        </div>
        {/* Col 6 end */}
      </div>
      {/* Main row end */}
    </div>
    {/* Container end */}
  </section>

  {/* Main container end */}
</>
<Footer />
        
        </>
    )
}

export default Services;