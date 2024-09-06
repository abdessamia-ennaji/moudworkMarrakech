import { useTranslation } from "react-i18next";
// import AddNewsPost from "./AddNewsPost";
import LanguageSelector from "./languageSelector";
// import { Link } from "react-router-dom";
function  Navbar(){

    const {t} = useTranslation()

    return(
        <>
        {/* <AddNewsPost /> */}
        
                <div id="top-bar" className="top-bar">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                            <ul className="top-info text-center text-md-left">
                                <li>
                                <i className="fas fa-map-marker-alt" />{" "}
                                <p className="info-text">Douar Ahmed Belhaj Al Ouidane Marrakech, Morocco</p>
                                </li>
                            </ul>
                            </div>
                            {/*/ Top info end */}
                            <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                            <ul className="list-unstyled">
                                <li>
                                <a title="Facebook" href="https://facebbok.com" target="_blank" rel="noreferrer noopener" >
                                    <span className="social-icon">
                                    <i className="fab fa-facebook-f" />
                                    </span>
                                </a>
                                <a title="Twitter" href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                                    <span className="social-icon">
                                    <i className="fab fa-twitter" />
                                    </span>
                                </a>
                                <a title="Instagram" href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                                    <span className="social-icon">
                                    <i className="fab fa-instagram" />
                                    </span>
                                </a>

                                <a title="Linkdin" href="https://github.com/" target="_blank" rel="noreferrer noopener">
                                    <span className="social-icon">
                                    <i className="fab fa-github" />
                                    </span>
                                </a>

                                <a href="/login">
                                    <button className="btn btn-secondary btn-sm">
                                        
                                    Login
                                    </button>
                                    </a>

                                
                                
                                </li>
                            </ul>
                            </div>
                            {/*/ Top social end */}
                        </div>
                        {/*/ Content row end */}
                        </div>
                        {/*/ Container end */}
                    </div>
                    {/*/ Topbar end */}
                    {/* Header start */}
                    <header id="header" className="header-one">
                        <div className="bg-white">
                        <div className="container">
                            <div className="logo-area">
                            <div className="row align-items-center">
                                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                                <a className="d-block" href="/home ">
                                    <img loading="lazy" src="../assets/images/logo.png" alt="Moudwork" />
                                </a>
                                </div>
                                {/* logo end */}
                                <div className="col-lg-9 header-right">
                                <ul className="top-info-box">
                                    <li>
                                    <div className="info-box">
                                        <div className="info-box-content">
                                        <p className="info-box-title">{t("Navbar.CallUs")}</p>
                                        <p className="info-box-subtitle">
                                        <a href="tel:+212660435648">(+212) 660-435648</a>
                                        </p>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="info-box">
                                        <div className="info-box-content">
                                        <p className="info-box-title">{t("Navbar.EmailUs")}</p>
                                        <p className="info-box-subtitle">
                                        <a href= "mailto: moudwork.sarl@gmail.com"> moudwork.sarl@gmail.com </a>
                                        </p>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="last">
                                    <div className="info-box last">
                                        <div className="info-box-content">
                                        <p className="info-box-title">{t("Navbar.GlobalCertificate")}</p>
                                        <p className="info-box-subtitle">ICE 002729844000050</p>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="header-get-a-quote">
                                    <a className="btn btn-primary" Link href="/contact">
                                    {t("Navbar.GetQuote")}
                                    </a>
                                    </li>
                                </ul>
                                {/* Ul end */}
                                </div>
                                {/* header right end */}
                            </div>
                            {/* logo area end */}
                            </div>
                            {/* Row end */}
                        </div>
                        {/* Container end */}
                        </div>
                        <div className="site-navigation">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                    aria-controls="navbar-collapse"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div id="navbar-collapse" className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav mr-auto">
                                    <li className="nav-item dropdown active">
                                        <a
                                        href="/home"
                                        className="nav-link dropdown-toggle"
                                        >
                                        {t("Navbar.Home")} 
                                        
                                        </a>
                                        
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        >
                                        {t("Navbar.Company")} <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                        <li>
                                            <a href="/about">{t("Navbar.AboutUs")}</a>
                                        </li>
                                        
                                        <li>
                                            <a href="/faq">Faq</a>
                                        </li>
                                        <li>
                                            <a href="/pricing">{t("Navbar.pricing")}</a>
                                        </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                        href="/projects"
                                        className="nav-link dropdown-toggle"
                                        
                                        >
                                        Projects 
                                        </a>
                                        
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                        href="/services"
                                        className="nav-link dropdown-toggle"
                                        
                                        >
                                        Services 
                                        </a>
                                        
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a
                                        href="/news"
                                        className="nav-link dropdown-toggle"
                                        
                                        >
                                        News 
                                        </a>
                                        
                                    </li>
                                    <li className="nav-item">


                                        <a className="nav-link" href="/contact">
                                        Contact
                                        </a>

                                        



                                    </li>
                                    </ul>
                                </div>
                                </nav>
                            </div>
                            {/*/ Col end */}
                            </div>
                            {/*/ Row end */}
                            <div className="nav-search">
                            <span id="search">
                                {/* <i className="fa fa-search" /> */}
                                <LanguageSelector />

                                
                            </span>
                            </div>
                            {/* Search end */}
                            
                            {/* Site search end */}
                        </div>
                        {/*/ Container end */}
                        </div>
                        {/*/ Navigation end */}
                    </header>
                    {/*/ Header end */}
        </>
    )
};

export default Navbar;