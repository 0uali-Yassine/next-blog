
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <h1 className="brand-title">NextBlog</h1>
            </div>
            <p>
              Our vision is to make all people <br />
              the best place to live for them.
            </p>
          </div>
          <div className="footer-links">
            <ul>
              <li className="link-title">About</li>
              <li><p>About Us</p></li>
              <li><p>Features</p></li>
              <li><p>News & Blog</p></li>
            </ul>
            <ul>
              <li className="link-title">Company</li>
              <li><p>How We Work?</p></li>
              <li><p>Capital</p></li>
              <li><p>Security</p></li>
            </ul>
            <ul>
              <li className="link-title">Support</li>
              <li><p>FAQs</p></li>
              <li><p>Support Center</p></li>
              <li><p>Contact Us</p></li>
            </ul>
            <ul>
              <li className="link-title">Movement</li>
              <li><p>What is Homyz?</p></li>
              <li><p>Support Us</p></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&#169; NextBlog. All rights reserved</p>
          <ul>
            <li><p>Terms & Agreements</p></li>
            <li><p>Privacy Policy</p></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
