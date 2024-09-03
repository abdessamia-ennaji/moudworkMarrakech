// import $ from 'jquery';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import axios from 'axios';



import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Home(){
  const {t} = useTranslation()

  // /////////////////////////////////

  useEffect(() => {
    const trackVisit = async () => {
        try {
            await axios.post('http://localhost:5000/api/analytic/track-visit');
        } catch (error) {
            console.error('Error tracking visit', error);
        }
    };

    trackVisit();
}, []);

// /////////////////////////////////
  return(
        <>
<div className="body-inner">
  <Navbar />
  <div className="banner-carousel banner-carousel-1 mb-0">
  <div
    className="banner-carousel-item"
    style={{ backgroundImage: "url(../assets/images/slider-main/bg1.jpg)" }}
  >
    <div className="slider-content">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-12 text-center">
            <h2 className="slide-title" data-animation-in="slideInLeft">
              {t("Home.SlideTitle1")}
            </h2>
            <h3 className="slide-sub-title" data-animation-in="slideInRight">
            {t("Home.SlideSubTitle1")}
            </h3>
            <p data-animation-in="slideInLeft" data-duration-in="1.2">
              <a href="/services" className="slider btn btn-primary">
              {t("Home.slideInLeft1")}
              </a>
              <a
                href="/contact"
                className="slider btn btn-primary border"
              >
                {t("Home.ContactUs")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="banner-carousel-item"
    style={{ backgroundImage: "url(./assets/images/slider-main/bg2.jpg)" }}
  >
    <div className="slider-content text-left">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-12">
            <h2 className="slide-title-box" data-animation-in="slideInDown">
            {t("Home.SlideTitle2")}
            </h2>
            <h3 className="slide-title" data-animation-in="fadeIn">
            {t("Home.SlideSubTitle2")}
            </h3>
            <h3 className="slide-sub-title" data-animation-in="slideInLeft">
            {t("Home.slideInLeft2")}
            </h3>
            <p data-animation-in="slideInRight">
              <a
                href="/contact"
                className="slider btn btn-primary border"
              >
                {t("Home.ContactUs")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="banner-carousel-item"
    style={{ backgroundImage: "url(./assets/images/slider-main/bg3.jpg)" }}
  >
    <div className="slider-content text-right">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-12">
            <h2 className="slide-title" data-animation-in="slideInDown">
            {t("Home.SlideTitle3")}
            </h2>
            <h3 className="slide-sub-title" data-animation-in="fadeIn">
            {t("Home.SlideSubTitle3")}
            </h3>
            <p
              className="slider-description lead"
              data-animation-in="slideInRight"
            >
              {t("Home.slideInLeft3")}
            </p>
            <div data-animation-in="slideInLeft">
              <a
                href="/contact"
                className="slider btn btn-primary"
                aria-label="contact-with-us"
              >
                {t("Home.GetFreeQuote")}
                
              </a>
              <a
                href="/about"
                className="slider btn btn-primary border"
                aria-label="learn-more-about-us"
              >
                {t("Home.LearnMoreAboutUs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





<section className="call-to-action-box no-padding">
  <div className="container">
    <div className="action-style-box">
      <div className="row align-items-center">
        <div className="col-md-8 text-center text-md-left">
          <div className="call-to-action-text">
            <h3 className="action-title">
            {t("Home.ActionTitle1")}
            </h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
          <div className="call-to-action-btn">
            <a className="btn btn-dark" href="/contact">
            {t("Home.GetYourFreeQuote")}
            </a>
          </div>
        </div>
        {/* col end */}
      </div>
      {/* row end */}
    </div>
    {/* Action style box */}
  </div>
  {/* Container end */}
</section>





  {/* Action end */}
  <section id="ts-features" className="ts-features">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="ts-intro">
          <h2 className="into-title">{t("Home.AboutMoudwork")}</h2>
          <h3 className="into-sub-title">{t("Home.IntoSubTitle")}</h3>
          <p>
            {t("Home.TextIntro")}
          </p>
        </div>
        {/* Intro box end */}
        <div className="gap-20" />
        <div className="row">
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-award" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">
                {t("Home.ServiceBoxTitle1")}
                </h3>
              </div>
            </div>
            {/* Service 1 end */}
          </div>
          {/* col end */}
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-handshake" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">{t("Home.ServiceBoxTitle2")}</h3>
              </div>
            </div>
            {/* Service 2 end */}
          </div>
          {/* col end */}
        </div>
        {/* Content row 1 end */}
        <div className="row">
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-bullseye" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">{t("Home.ServiceBoxTitle3")}</h3>
              </div>
            </div>
            {/* Service 3 end */}
          </div>
          {/* col end */}
          <div className="col-md-6">
            <div className="ts-service-box">
              <span className="ts-service-icon">
                <i className="fas fa-users-cog" />
              </span>
              <div className="ts-service-box-content">
                <h3 className="service-box-title">{t("Home.ServiceBoxTitle4")}</h3>
              </div>
            </div>
            {/* Service 4 end */}
          </div>
          {/* col end */}
        </div>
        {/* Content row 2 end */}
      </div>
      {/* Col end */}
      <div className="col-lg-6 mt-4 mt-lg-0">
        <h3 className="into-sub-title">{t("Home.OurCoreValues")}</h3>
        <p>
        {t("Home.TextCoreValues")}
        </p>
        <div className="accordion accordion-group" id="our-values-accordion">
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
                  {t("Home.CollapseOne")}
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#our-values-accordion"
              >
              <div className="card-body">
                {t("Home.CollapseOneShow")}
                
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
                  {t("Home.CollapseTwo")}
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#our-values-accordion"
              >
              <div className="card-body">
              {t("Home.CollapseTwoShow")}
                
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
                  {t("Home.CollapseThree")}
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#our-values-accordion"
            >
              <div className="card-body">
                {t("Home.CollapseThreeShow")}
              </div>
            </div>
          </div>
        </div>
        {/*/ Accordion end */}
      </div>
      {/* Col end */}
    </div>
    {/* Row end */}
  </div>
  {/* Container end */}
</section>




  {/* Feature are end */}
  <section id="facts" className="facts-area dark-bg">
  <div className="container">
    <div className="facts-wrapper">
      <div className="row">
        <div className="col-md-3 col-sm-6 ts-facts">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact1.png"
              alt="Total Projects"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={96}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">{t("Home.FactsTitle1")}</h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact2.png"
              alt="Staff Members"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={35}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">{t("Home.FactsTitle2")}</h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact3.png"
              alt="Hours of Work"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={4000}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">{t("Home.FactsTitle3")}</h3>
          </div>
        </div>
        {/* Col end */}
        <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
          <div className="ts-facts-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/fact4.png"
              alt="Cities Experience"
            />
          </div>
          <div className="ts-facts-content">
            <h2 className="ts-facts-num">
              <span className="counterUp" data-count={12}>
                0
              </span>
            </h2>
            <h3 className="ts-facts-title">{t("Home.FactsTitle4")}</h3>
          </div>
        </div>
        {/* Col end */}
      </div>
      {/* Facts end */}
    </div>
    {/*/ Content row end */}
  </div>
  {/*/ Container end */}
</section>



  {/* Facts end */}
  <section id="ts-service-area" className="ts-service-area pb-0">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h2 className="section-title">{t("Home.SectionTitle1")}</h2>
        <h3 className="section-sub-title">{t("Home.SectionSubTitle1")}</h3>
      </div>
    </div>
    {/*/ Title row end */}
    <div className="row">
      <div className="col-lg-4">
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon1.png"
              alt="Home Construction"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">{t("Home.HomeConstru")}</a>
            </h3>
            <p>
            {t("Home.HomeConstruText")}
            </p>
          </div>
        </div>
        {/* Service 1 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon2.png"
              alt="Building Remodels"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">{t("Home.BuildingRemodels")}</a>
            </h3>
            <p>
            {t("Home.BuildingRemodelsText")}
            </p>
          </div>
        </div>
        {/* Service 2 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon3.png"
              alt="Interior Design"
              />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#"> {t("Home.InteriorDesign")}</a>
            </h3>
            <p>
              {t("Home.InteriorDesignText")}
              
            </p>
          </div>
        </div>
        {/* Service 3 end */}
      </div>
      {/* Col end */}
      <div className="col-lg-4 text-center">
        <img
          loading="lazy"
          className="img-fluid"
          src="./assets/images/services/service-center.png"
          alt="Our Services"
        />
      </div>
      {/* Col end */}
      <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon4.png"
              alt="Exterior Design"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">{t("Home.InteriorDesign")}</a>
            </h3>
            <p>
            {t("Home.InteriorDesignText")}
            </p>
          </div>
        </div>
        {/* Service 4 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon5.png"
              alt="Renovation"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">{t("Home.Renovation")}</a>
            </h3>
            <p>
            {t("Home.RenovationText")}
            </p>
          </div>
        </div>
        {/* Service 5 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img
              loading="lazy"
              src="./assets/images/icon-image/service-icon6.png"
              alt="Safety Management"
            />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">
              <a href="#">{t("Home.SafetyManagement")}</a>
            </h3>
            <p>
            {t("Home.SafetyManagementText")}
            </p>
          </div>
        </div>
        {/* Service 6 end */}
      </div>
      {/* Col end */}
    </div>
    {/* Content row end */}
  </div>
  {/*/ Container end */}
</section>



  {/* Service end */}
 





  {/* Project area end */}
  <section className="content">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="column-title">{t("Home.Témoignages")}</h3>
                <div id="testimonial-slide" className="testimonial-slide">
                    <div className="item">
                        <div className="quote-item">
                            <span className="quote-text">
                            {t("Home.QuoteText1")}
                            </span>
                            <div className="quote-item-footer">
                                <img
                                    loading="lazy"
                                    className="testimonial-thumb"
                                    src="./assets/images/clients/testimonial1.png"
                                    alt="testimonial"
                                />
                                <div className="quote-item-info">
                                    <h3 className="quote-author">{t("Home.QuoteAuthor1")}</h3>
                                    <span className="quote-subtext">{t("Home.QuoteSubtext1")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="quote-item">
                            <span className="quote-text">
                            {t("Home.QuoteText2")}
                            </span>
                            <div className="quote-item-footer">
                                <img
                                    loading="lazy"
                                    className="testimonial-thumb"
                                    src="./assets/images/clients/testimonial2.png"
                                    alt="testimonial"
                                />
                                <div className="quote-item-info">
                                    <h3 className="quote-author">{t("Home.QuoteAuthor2")}</h3>
                                    <span className="quote-subtext">{t("Home.QuoteSubtext2")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="quote-item">
                            <span className="quote-text">
                            {t("Home.QuoteText3")}
                            </span>
                            <div className="quote-item-footer">
                                <img
                                    loading="lazy"
                                    className="testimonial-thumb"
                                    src="./assets/images/clients/testimonial3.png"
                                    alt="testimonial"
                                />
                                <div className="quote-item-info">
                                    <h3 className="quote-author">{t("Home.QuoteAuthor3")}</h3>
                                    <span className="quote-subtext">{t("Home.QuoteSubtext3")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
                <h3 className="column-title">Clients Satisfaits</h3>
                <div className="row all-clients">
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.chabi-chic.com/" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://ehonline.eu/wp-content/uploads/2022/11/chabichiclogo.jpg"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://ar.wikipedia.org/wiki/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D9%8A%D8%A9_(%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8)"
                            target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://afriquiaplus.ma/wp-content/uploads/2020/11/interieur_604898347.png"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.sante.gov.ma/sites/Ar/Pages/AccueilAr.aspx" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/56/MS-Maroc.png"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.linkedin.com/in/ouvrage-contractor-1b3903135/?originalSubdomain=ma" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3N1pkkp4oGNuKpfM5I0WaJkXQlljwD7NJQ&s"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://mfe.ma/" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="./assets/images/clients/client5.png"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="clients-logo">
                            <a href="https://www.sgtm-maroc.com/en/" target="_blank">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://i0.wp.com/droneway.ma/wp-content/uploads/2019/10/SGTM-LOGO.png?resize=530%2C209"
                                    alt="clients-logo"
                                />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



  {/* Content end */}
  <section className="subscribe no-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="subscribe-call-to-acton">
            <h3>{t("Home.needourassistance")}</h3>
            <h4>(+212) 660-435648</h4>
          </div>
        </div>
        {/* Col end */}
        <div className="col-lg-8">
          <div className="ts-newsletter row align-items-center">
            <div className="col-md-5 newsletter-introtext">
              <h4 className="text-white mb-0">{t("Home.newslettersignup")}</h4>
              <p className="text-white">{t("Home.latestupdatesandnews")}</p>
            </div>
            <div className="col-md-7 newsletter-form">
              <form action="#" method="post">
                <div className="form-group">
                  <label htmlFor="newsletter-email" className="content-hidden">
                    Newsletter Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="newsletter-email"
                    className="form-control form-control-lg"
                    placeholder={t("Home.youremailandhitenter")}
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* Newsletter end */}
        </div>
        {/* Col end */}
      </div>
      {/* Content row end */}
    </div>
    {/*/ Container end */}
  </section>


  
  {/*/ subscribe end */}
 



  {/*/ News end */}
  <Footer />
  
</div>

        </>
    )
};

export default Home;