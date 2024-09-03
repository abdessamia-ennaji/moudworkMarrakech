import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NoPage(){
    return(
        <>
        <div className="body-inner">
 
        <Navbar />
  <div
    id="banner-area"
    className="banner-area"
    style={{ backgroundImage: "url(images/banner/banner1.jpg)" }}
  >
    <div className="banner-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-heading">
              <h1 className="banner-title">Features</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Features</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    404
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
        <div className="col-12">
          <div className="error-page text-center">
            <div className="error-code">
              <h2>
                <strong>404</strong>
              </h2>
            </div>
            <div className="error-message">
              <h3>Oops... Page Not Found!</h3>
            </div>
            <div className="error-body">
              Try using the button below to go to main page of the site <br />
              <a href="/home" className="btn btn-primary">
                Back to Home Page
              </a>
            </div>
          </div>
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
    )
};

export default NoPage;