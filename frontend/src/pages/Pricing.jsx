import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

function Pricing(){
  const {t} = useTranslation()
    return(
        <>
        <Navbar />
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
              <h1 className="banner-title">{t("Pricing.pricing")}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">{t("Pricing.home")}</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="About">{t("Pricing.company")}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  {t("Pricing.pricing")}
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
      <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">{t("Pricing.exploreOurPackages")}</h2>
          <h3 className="section-sub-title">{t("Pricing.pricingPlans")}</h3>
        </div>
      </div>
      {/*/ Title row end */}
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="ts-pricing-box">
            <div className="ts-pricing-header">
              <h2 className="ts-pricing-name">{t("Pricing.buildingRemodels")}</h2>
              <h2 className="ts-pricing-price">
                <span className="currency">$</span>
                <strong>89.9</strong>
                <small>/{t("Pricing.month")}</small>
              </h2>
            </div>
            {/* Pricing header */}
            <div className="ts-pricing-features">
              <ul className="list-unstyled">
                <li>{t("Pricing.comprehensiveProjectManagement")}</li>
                <li>{t("Pricing.preConstructionPlanning")}</li>
                <li>{t("Pricing.onSiteSupervision")}</li>
                <li>{t("Pricing.qualityControlInspections")}</li>
                <li>{t("Pricing.scheduleManagementAndClaims")}</li>
                <li>{t("Pricing.phasedProjectDevelopment")}</li>
              </ul>
            </div>
            {/* Features end */}
            <div className="plan-action">
              <a href="https://wa.me/+212660435648?text=Building%20Remodels%0A89.9%20/%20Month%0A%0AComprehensive%20Project%20Management%0APre-construction%20Planning%0AOn-site%20Supervision%0AQuality%20Control%20Inspections%0ASchedule%20Management%20and%20Claims%0APhased%20Project%20Development" className="btn btn-dark" target="_blank">
              {t("Pricing.orderNow")}
              </a>
            </div>
          </div>
          {/* Plan 1 end */}
        </div>
        {/* Col end */}
        <div className="col-lg-4 col-md-6">
          <div className="ts-pricing-box ts-pricing-featured">
            <div className="ts-pricing-header">
              <h2 className="ts-pricing-name">{t("Pricing.renovationProjects")}</h2>
              <h2 className="ts-pricing-price">
                <span className="currency">$</span>
                <strong>179.9</strong>
                <small>/{t("Pricing.month")}</small>
              </h2>
            </div>
            {/* Pricing header */}
            <div className="ts-pricing-features">
              <ul className="list-unstyled">
                <li>{t("Pricing.dedicatedProjectManagement")}</li>
                <li>{t("Pricing.detailedFeasibilityStudies")}</li>
                <li>{t("Pricing.expertOnSiteRepresentation")}</li>
                <li>{t("Pricing.thoroughQualityInspections")}</li>
                <li>{t("Pricing.comprehensiveScheduleManagement")}</li>
                <li>{t("Pricing.strategicProjectPhasing")}</li>
              </ul>
            </div>
            {/* Features end */}
            <div className="plan-action">
              <a href="https://wa.me/+212660435648?text=Renovation%20Projects%0A179.9%20/%20Month%0A%0ADedicated%20Project%20Management%0ADetailed%20Feasibility%20Studies%0AExpert%20On-site%20Representation%0AThorough%20Quality%20Inspections%0AComprehensive%20Schedule%20Management%0AStrategic%20Project%20Phasing" className="btn btn-primary" target="_blank">
              {t("Pricing.orderNow")}
              </a>
            </div>
          </div>
          {/* Plan 2 end */}
        </div>
        {/* Col end */}
        <div className="col-lg-4 col-md-6">
          <div className="ts-pricing-box">
            <div className="ts-pricing-header">
              <h2 className="ts-pricing-name">{t("Pricing.homeConstruction")}</h2>
              <h2 className="ts-pricing-price">
                <span className="currency">$</span>
                <strong>279.9</strong>
                <small>/{t("Pricing.month")}</small>
              </h2>
            </div>
            {/* Pricing header */}
            <div className="ts-pricing-features">
              <ul className="list-unstyled">
                <li>{t("Pricing.expertProjectManagement")}</li>
                <li>{t("Pricing.inDepthFeasibilityAnalysis")}</li>
                <li>{t("Pricing.fullOnSiteSupervision")}</li>
                <li>{t("Pricing.stringentQualityControl")}</li>
                <li>{t("Pricing.effectiveScheduleAndClaimsManagement")}</li>
                <li>{t("Pricing.completeProjectPhasing")}</li>
              </ul>
            </div>
            {/* Features end */}
            <div className="plan-action">
            <a href="https://wa.me/+212660435648?text=Home%20Construction%0A279.9%20/%20Month%0A%0AExpert%20Project%20Management%0AIn-depth%20Feasibility%20Analysis%0AFull%20On-site%20Supervision%0AStringent%20Quality%20Control%0AEffective%20Schedule%20and%20Claims%20Management%0AComplete%20Project%20Phasing" className="btn btn-dark" target="_blank">

            {t("Pricing.orderNow")}
              </a>
            </div>
          </div>
          {/* Plan 3 end */}
        </div>
        {/* Col end */}
      </div>
      {/*/ Content row end */}
    </div>
    {/* Container end */}
  </section>


  {/* Main container end */}
  <Footer />
</>

    )
}

export default Pricing;