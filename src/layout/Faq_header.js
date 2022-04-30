import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

const Faq_header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-dark" : "navbar-white"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-01.png" alt="mobile-logo" />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/demo-1">
                <a className="logo-black">
                  <img src="/images/logo-01.png" alt="header-logo" />
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/demo-1">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo
                        ? "/images/logo-white.png"
                        : "/images/logo-02.png"
                    }`}
                    alt="header-logo"
                  />
                </a>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* MEGAMENU */}
            
                <li className="nl-simple">
                  <Link href={`${singlePage ? "/#" : "/#"}`}>
                    Home
                  </Link>
                </li>
                {/* END MEGAMENU */}
                {/* DROPDOWN MENU */}
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "home" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("home")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href={`${singlePage ? "/about" : "#"}`}>
                    <a>About <span className="wsarrow" /></a>
                  </Link>
                  
                    <ul
                      className="sub-menu"
                      style={{
                        display: mobileMenuToggle === "home" ? "block" : "",
                      }}
                    >
                      <li>
                        <Link href="#content-2">Why OLMO?</Link>
                      </li>
                      <li>
                        <Link href="#content-5">Best Solutions</Link>
                      </li>
                      <li>
                        <Link href="#content-3">Integrations</Link>
                      </li>
                      <li>
                        <Link href="#content-10">How It Works</Link>
                      </li>
                      <li>
                        <Link href="#reviews-1">Testimonials</Link>
                      </li>
                    </ul>
                  
                </li>
                {/* DROPDOWN MENU */}
               
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "home2" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("home2")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href={`${singlePage ? "/about" : "#"}`}>
                    <a>Projects  <span className="wsarrow" /></a>
                  </Link>
                
                    <ul
                      className="sub-menu"
                      style={{
                        display: mobileMenuToggle === "home2" ? "block" : "",
                      }}
                    >
                       <li>
                        <Link href="fast-oet">FAST OET</Link>
                      </li>
                      <li>
                        <Link href="first-aid">First Aid Made Easy</Link>
                      </li>
                      <li>
                        <Link href="sardar-family">Sardar Family Package</Link>
                      </li>
                      <li>
                        <Link href="the-lahore">The Lahore Diagnostics</Link>
                      </li>
                      <li>
                        <Link href="jstorez">J Storez</Link>
                      </li>
                    </ul>
                  
                </li>


                {/* END DROPDOWN MENU */}

                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "home22" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("home22")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href={`${singlePage ? "/about" : "#"}`}>
                    <a>Services  <span className="wsarrow" /></a>
                  </Link>
                 
                    <ul
                      className="sub-menu"
                      style={{
                        display: mobileMenuToggle === "home22" ? "block" : "",
                      }}
                    >
                      <li>
                        <Link href="/web-dev">Website Development</Link>
                        
                      </li>
                      <li>
                        <Link href="/software-dev">Software Development</Link>
                      </li>
                      <li>
                        <Link href="/mobile-dev">Mobile Application Development</Link>
                      </li>
                      <li>
                        <Link href="/digital-mar">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="/seo-ppc">SEO & PPC</Link>
                      </li>
                      <li>
                        <Link href="/networking">Networking & IT Infrastructure</Link>
                      </li>
                    </ul>
                  
                </li>


                {/* SIMPLE NAVIGATION LINK */}
                
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/blog-listing">Blog</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href={`${singlePage ? "/faqs" : "/faqs"}`}>FAQs</Link>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple">
                  <Link href={`${singlePage ? "/pricing" : "#content-4"}`}>
                    <a
                      className={`btn ${
                        btnCustomHover
                          ? btnCustomHover
                          : "btn-tra-white orange-red-hover"
                      } last-link`}
                    >
                      {getStartText ? "Get Started" : "Contact Us"}
                    </a>
                  </Link>
                </li>
                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>	
									</li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Faq_header;
