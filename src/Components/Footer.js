import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-grid">
      <div className="footer-grid-container one"></div>
      <div className="footer-grid-container two"></div>
      <div className="footer-grid-container three">
        <div className="go-up-icon">
          Go
          <br />
          Up
        </div>
      </div>
      <div className="footer-grid-container four">
        <div className="footer-left-sided-menu-block">
          <div className="left-sided-menu-item">Shop</div>
          <div className="left-sided-menu-item">About</div>
          <div className="left-sided-menu-item">Journal</div>
          <div className="left-sided-menu-item">Support</div>
          <div className="left-sided-menu-item">COVID-19 Info</div>
          <div className="left-sided-menu-item">Order Status</div>
        </div>
      </div>
      <div className="footer-grid-container five">
        <div className="newsletter-signup-block">
          <h5 className="newsletter-signup-block-title">Newsletter Signup</h5>
          <p className="newsletter-signup-block-description">
            Sign up to our Newsletter to hear about new product releases, learn
            about our design process, and everything else going on behind the
            scenes at Grovemade.
          </p>
          <div className="newsletter-signup-form">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="newsletter-signup-input"
            ></input>
            <div className="submit-button">Submit</div>
            <div className="newsletter-form-underline"></div>
            <div className="submit-error-message">
              Please complete this required field.
            </div>
          </div>
        </div>
      </div>
      <div className="footer-grid-container six"></div>
      <div className="footer-grid-container seven">
        <div className="footer-left-sided-menu-block-social">
          <div className="social-icons">
            <img
              src="https://grovemade.com/static/img/icons/facebook.svg?_v=1502333300.56"
              alt=""
            />
          </div>
          <div className="social-icons">
            <img
              src="https://grovemade.com/static/img/icons/instagram.svg?_v=1502333300.56"
              alt=""
            />
          </div>
          <div className="social-icons">
            <img
              src="https://grovemade.com/static/img/icons/linkedin.svg?_v=1525642239.94"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer-grid-container eight"></div>
      <div className="footer-grid-container nine">
        <div className="footer-signature">
          <div className="signature-item">©2020 Grovemade</div>
          <div className="signature-item">Terms & Conditions</div>
          <div className="signature-item">Privacy Policy</div>
        </div>
        <div className="developer-signature signature-item">
          <div>Site by Department</div>
        </div>
      </div>
    </div>
  );
};

const NewFooter = () => {
  return (
    <div
      style={{
        margin: 20
      }}
    >
      <div
        style={{
          width: "80%",
          background: "red",
          margin: "0 auto",
          position: "relative",
          height: 0
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 100,
            height: 100,
            background: "black",
            color: "white"
          }}
        >
          GO UP
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewFooter;
