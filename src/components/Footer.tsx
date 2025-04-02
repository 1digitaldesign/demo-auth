import Link from 'next/link';


function Footer() {
  return (
    <footer className="usa-footer usa-footer--slim">
      <div className="grid-container usa-footer__return-to-top">
        <Link href="#">Return to top</Link>
      </div>
      <div className="usa-footer__primary-section">
        <div className="grid-container">
          <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" href="#">
                  Account Access
                </Link>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" href="#">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="usa-footer__logo grid-row grid-gap-2">
            <div className="mobile-lg:grid-col-auto">
              <h3 className="usa-footer__logo-heading">Thrift Savings Plan</h3>
            </div>
            <div className="mobile-lg:grid-col-auto">
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">(877) 968-3778</div>
                  <div className="grid-col-auto">
                    <a href="mailto:info@tsp.gov">info@tsp.gov</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
          <div className="usa-footer__social-links">
            <ul className="usa-social-links">
              <li>
                <a href="#" className="usa-social-link">
                  <span className="usa-sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="usa-social-link">
                  <span className="usa-sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="usa-social-link">
                  <span className="usa-sr-only">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="usa-footer-icon">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;