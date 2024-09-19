import { useTranslation } from "react-i18next";

import LanguageSelector from "./languageSelector";

function Footer(){
    const {t} = useTranslation()
    return(
        <>
<footer id="footer" className="footer bg-overlay">
    <div className="footer-main">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6 footer-widget footer-about">
                    <h3 className="widget-title">{t("Footer.aboutmoudwork")}</h3>
                    <img
                        loading="lazy"
                        width="200px"
                        className="footer-logo"
                        src="../assets/images/footer-logo.png"
                        alt="Moudwork"
                    />
                    <p>
                        {t("Footer.moudworkdescription")}
                    </p>
                    <div className="footer-social">
                        <ul>
                            <li>
                                <a href="https://facebook.com/moudwork" aria-label="Facebook">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/moudwork" aria-label="Twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/moudwork" aria-label="Instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/moudwork" aria-label="Github">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer social end */}
                </div>
                {/* Col end */}
                <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                    <h3 className="widget-title">{t("Footer.workinghours")}</h3>
                    <div className="working-hours">
                        {t("Footer.operatinghours")}
                        <br />
                        <br /> {t("Footer.mondaytofriday")} <span className="text-right">09:00 - 18:00</span>
                        <br /> {t("Footer.saturday")} <span className="text-right">10:00 - 16:00</span>
                        <br /> {t("Footer.sundayandholidays")} <span className="text-right">Closed</span>
                    </div>
                </div>
                {/* Col end */}
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                    <h3 className="widget-title">{t("Footer.ourservices")}</h3>
                    <ul className="list-arrow">
                        <li>
                            <a href="/pricing">{t("Footer.buildingRemodels")}</a>
                        </li>
                        <li>
                            <a href="/pricing">{t("Footer.renovationProjects")}</a>
                        </li>
                        <li>
                            <a href="/pricing">{t("Footer.homeConstruction")}</a>
                        </li>
                        
                    </ul>
                </div>
                {/* Col end */}
            </div>
            {/* Row end */}
        </div>
        {/* Container end */}
    </div>
    {/* Footer main end */}
    <div className="copyright">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="copyright-info">
                        <span>
                        {t("Footer.copyright")}{" "}
                            <a href="https://github.com/abdessamia-ennaji">Abdessamia Ennaji</a>
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-menu text-center text-md-right">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/About">{t("Footer.aboutUs")}</a>
                            </li>
                            
                            <li>
                                <a href="/faq">{t("Footer.faqs")}</a>
                            </li>
                            <li>
                                <a href="/news">{t("Footer.news")}</a>
                            </li>
                            <li>
                                <a href="/pricing">{t("Footer.pricing")}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Row end */}
            <div
                id="back-to-top"
                data-spy="affix"
                data-offset-top={10}
                className="back-to-top position-fixed"
            >
                <button className="btn btn-primary" title="Back to Top">
                    <i className="fa fa-angle-double-up" />
                </button>
            </div>
        </div>
        {/* Container end */}
    </div>
    {/* Copyright end */}
</footer>

        </>
    )
}

export default Footer;