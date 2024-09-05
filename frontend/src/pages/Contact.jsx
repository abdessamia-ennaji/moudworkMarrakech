import React,{ useEffect , useState} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from 'axios'; // Import Axios
import { useTranslation } from "react-i18next";


function Contact(props){
    
   

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
              const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submitcontact`, { name, email, subject, message });
  
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
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d848.892414753697!2d-8.03625409257834!3d31.67299138709751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1725541632834!5m2!1sen!2sus"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    
                        

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