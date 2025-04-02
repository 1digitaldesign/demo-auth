import Image from "next/image";
import Link from "next/link";

// Mimics the top navigation bar of the TSP website.
function Header() {
  return (
    <header className="usa-header usa-header--basic" role="banner">
      <div className="usa-nav-container">
        <div className="usa-navbar">
          {/* Placeholder for TSP Logo */}
          <div className="usa-logo" id="basic-logo">
            <em className="usa-logo__text">
              <Link href="/" title="Home" aria-label="Home">
                TSP.GOV
              </Link>
            </em>
          </div>
          <button type="button" className="usa-menu-btn">
            Menu
          </button>
        </div>
        {/* Basic navigation - can be expanded */}
        <nav aria-label="Primary navigation" className="usa-nav">
          <button type="button" className="usa-nav__close">
            <Image
              src="/img/usa-icons/close.svg"
              role="img"
              alt="Close"
              width={24}
              height={24}
            />
          </button>
          <ul className="usa-nav__primary usa-accordion">
            <li className="usa-nav__primary-item">
              <Link href="/my-account" className="usa-nav__link">
                <span>My Account</span>
              </Link>
            </li>
            <li className="usa-nav__primary-item">
              <Link href="/plan-participants" className="usa-nav__link">
                <span>Plan Participants</span>
              </Link>
            </li>
            <li className="usa-nav__primary-item">
              <Link href="/forms-publications" className="usa-nav__link">
                <span>Forms & Publications</span>
              </Link>
            </li>
            <li className="usa-nav__primary-item">
              <Link href="/contact" className="usa-nav__link">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          {/* Placeholder for Search */}
          <form className="usa-search usa-search--small" role="search">
            <label className="usa-sr-only" htmlFor="basic-search-field-small">
              Search
            </label>
            <input
              className="usa-input"
              id="basic-search-field-small"
              type="search"
              name="search"
            />
            <button className="usa-button" type="submit">
              <span className="usa-sr-only">Search</span>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
// This component is a simplified version of the TSP header, focusing on the layout and structure.
