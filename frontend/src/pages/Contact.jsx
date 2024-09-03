import React,{ useEffect , useState} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from 'axios'; // Import Axios
import { useTranslation } from "react-i18next";


function Contact(props){
    
    useEffect(() => {
        const mapScript = document.createElement('script');
        mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU";
        mapScript.defer = true;
        document.head.appendChild(mapScript);
        const mapJsScript = document.createElement('script');
        mapJsScript.src = "../assets/plugins/google-map/map.js";
        mapJsScript.defer = true;
        document.head.appendChild(mapJsScript);
    
        return () => {
          document.head.removeChild(mapScript);
          document.head.removeChild(mapJsScript);
        };
      }, []);

      const {t} = useTranslation()


      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [subject, setSubject] = useState('');
      const [message, setMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              // Clear previous messages
              setErrorMessage('');
              setSuccessMessage('');
  
              // Send request to server
              const response = await axios.post('http://localhost:5000/submitcontact', { name, email, subject, message });
  
              // If successful, display success message
              if (response.status === 200) {
                  setSuccessMessage(t("Contact.successMessage"));
                  setName('');  // Clear the form fields
                  setEmail('');
                  setSubject('');
                  setMessage('');
              }
          } catch (error) {
              console.error('Error:', error);
              setErrorMessage(t("Contact.errorMessage"));
          }
      };
    
    return(
        <>
            <div className="body-inner">
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
                            <h1 className="banner-title">Contact</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="#">{t("Contact.home")}</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">{t("Contact.company")}</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                {t("Contact.contactus")}
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
                        <h2 className="section-title">{t("Contact.reachingOurOffice")}</h2>
                        <h3 className="section-sub-title">{t("Contact.findOurLocation")}</h3>
                        </div>
                    </div>

                    
                    {/*/ Title row end */}
                    <div className="row">
                        <div className="col-md-4">
                        <div className="ts-service-box-bg text-center h-100">
                            <span className="ts-service-icon icon-round">
                            <i className="fas fa-map-marker-alt mr-0" />
                            </span>
                            <div className="ts-service-box-content">
                            <h4>{t("Contact.visitouroffice")}</h4>
                            <p>Douar Ahmed Belhaj Al Ouidane Marrakech, {t("Contact.morocco")}</p>
                            </div>
                        </div>
                        </div>
                        {/* Col 1 end */}
                        <div className="col-md-4">
                        <div className="ts-service-box-bg text-center h-100">
                            <span className="ts-service-icon icon-round">
                            <i className="fa fa-envelope mr-0" />
                            </span>
                            <div className="ts-service-box-content">
                            <h4>{t("Contact.emailus")}</h4>
                            <p>office@Moudwork.com</p>
                            </div>
                        </div>
                        </div>
                        {/* Col 2 end */}
                        <div className="col-md-4">
                        <div className="ts-service-box-bg text-center h-100">
                            <span className="ts-service-icon icon-round">
                            <i className="fa fa-phone-square mr-0" />
                            </span>
                            <div className="ts-service-box-content">
                            <h4>{t("Contact.callus")}</h4>
                            <p>(+212) 660-435648</p>
                            </div>
                        </div>
                        </div>
                        {/* Col 3 end */}
                    </div>
                    {/* 1st row end */}
                    <div className="gap-60" />
                    <div className="google-map">
                        <div
                        id="map"
                        className="map"
                        data-latitude="31.672977"
                        data-longitude="-8.036045"
                        data-marker="./assets/images/marker.png"
                        data-marker-name="Moudwork"
                        />
                    </div>


                    <div className="gap-40" />
                    <div className="row">
                        <div className="col-md-12">
                        <h3 className="column-title">{t("Contact.welovetohear")}</h3>
                        
                        {successMessage && (
                                <div className="alert alert-success" role="alert">
                                    {successMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                        <form id="contact-form" action="#" method="post" role="form" onSubmit={handleSubmit}>
                            <div className="error-container" />
                            <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                <label>{t("Contact.name")}</label>
                                <input
                                    className="form-control form-control-name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder=""
                                    type="text"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <label>Email</label>
                                <input
                                    className="form-control form-control-email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder=""
                                    type="email"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <label>{t("Contact.subject")}</label>
                                <input
                                    className="form-control form-control-subject"
                                    name="subject"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder=""
                                    required=""
                                />
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label>Message</label>
                            <textarea
                                className="form-control form-control-message"
                                name="message"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder=""
                                rows={10}
                                required=""
                                defaultValue={""}
                            />
                            </div>
                            <div className="text-right">
                            <br />
                            <button className="btn btn-primary solid blank" type="submit">
                                {t("Contact.sendMessage")}
                            </button>
                            
                            </div>
                        </form>
                        </div>
                    </div>
                    {/* Content row */}
                    </div>
                    {/* Conatiner end */}
                </section>
                {/* Main container end */}
                <Footer />
                
                </div>

        </>
    );
};

export default Contact;