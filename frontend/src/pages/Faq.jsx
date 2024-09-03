import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

function Faq(){
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
              <h1 className="banner-title">Faq</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/home">{t("Faq.home")}</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/about">{t("Faq.company")}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Faq
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
        <div className="col-lg-8">
          <h3 className="border-title border-left mar-t0">
            {t("Faq.GeneralConstruction")}
          </h3>
          <div
            className="accordion accordion-group accordion-classic"
            id="construction-accordion"
          >
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {t("Faq.headProtectionRequired")}
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#construction-accordion"
              >
                <div className="card-body">
                  {t("Faq.headProtectionRequiredExplanation")}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {t("Faq.firstAidRequirements")}
                
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#construction-accordion"
              >
                <div className="card-body">
                  {t("Faq.firstAidRequirementsExplanation")}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {t("Faq.appointedPersonRole")}
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#construction-accordion"
              >
                <div className="card-body">
                {t("Faq.appointedPersonRoleExplanation")}
                </div>
              </div>
            </div>
          </div>
          {/*/ Accordion end */}
          <div className="gap-40" />
          <h3 className="border-title border-left">{t("Faq.safety")}</h3>
          <div
            className="accordion accordion-group accordion-classic"
            id="safety-accordion"
          >
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingFour">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    {t("Faq.keySafetyMeasures")}
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                className="collapse show"
                aria-labelledby="headingFour"
                data-parent="#safety-accordion"
              >
                <div className="card-body">
                {t("Faq.keySafetyMeasuresExplanation")}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingFive">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    {t("Faq.firstAidRequirements")}
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#safety-accordion"
              >
                <div className="card-body">
                  {t("Faq.firstAidRequirementsExplanation")}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0 bg-transparent" id="headingSix">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    {t("Faq.appointedPersonSafetyRole")}
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#safety-accordion"
              >
                <div className="card-body">
                  {t("Faq.appointedPersonSafetyRoleExplanation")}
                </div>
              </div>
            </div>
          </div>
          {/*/ Accordion end */}
        </div>
        {/* Col end */}
        
        {/* Col end */}
      </div>
      {/* Content row end */}
    </div>
    {/* Container end */}
  </section>

  {/* Main container end */}
  <Footer />
</>

    )
}

export default Faq;