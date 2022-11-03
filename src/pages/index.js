import * as React from "react"
import * as containerStyles from "./index.module.css"

import machine from "../images/icons/machine.png"
import cut from "../images/icons/cut.png"
import industry from "../images/icons/industry.png"
import print from "../images/icons/print.png"
import rolls from "../images/icons/rolls.png"
import recycle from "../images/icons/recycle.png"

import logo1 from "../images/logos/logo1.png"
import logo2 from "../images/logos/logo2.png"
import logo3 from "../images/logos/logo3.png"
import logo4 from "../images/logos/logo4.png"
import logo5 from "../images/logos/logo5.png"
import logo6 from "../images/logos/logo6.png"
import logo7 from "../images/logos/logo7.png"
import logo8 from "../images/logos/logo8.png"
import logo9 from "../images/logos/logo9.png"
import logo10 from "../images/logos/logo10.png"
import logo11 from "../images/logos/logo11.png"
import logo12 from "../images/logos/logo12.png"
import logo13 from "../images/logos/logo13.png"
import logo14 from "../images/logos/logo14.png"
import logo15 from "../images/logos/logo15.png"
import logo16 from "../images/logos/logo16.png"

import gallery1 from "../images/gallery/gallery1.png"
import gallery2 from "../images/gallery/gallery2.png"
import gallery3 from "../images/gallery/gallery3.png"
import gallery4 from "../images/gallery/gallery4.png"
import gallery5 from "../images/gallery/gallery5.png"
import gallery6 from "../images/gallery/gallery6.png"
import gallery7 from "../images/gallery/gallery7.png"

import quotes from "../images/papa_icons/quotes.png"
import papa from "../images/papa_icons/papa.png"
import call from "../images/papa_icons/call.png"
import mail from "../images/papa_icons/mail.png"
import location from "../images/papa_icons/location.png"


const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  overflow:"hidden",
}

const rowStyles = {
  marginLeft : "3vw",
  display:"flex",
  flexDirection: "row",
}

const logoblackStyles = {
  backgroundColor: "#121212",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className={containerStyles.bg}>
      <div className={containerStyles.bgImage}>
        <h2 className={containerStyles.heading}> TOGETHER TRADING COMPANY</h2>
        <h4 className={containerStyles.subHeading}> MANUFACTURERS OF LDPE AND PP POLYBAGS </h4>
      </div>
      </div> 

      <div> 
      <div className={containerStyles.iconSection}>
        <div className={containerStyles.iconBox}>
          <img className={containerStyles.icon} src={rolls} />
          <div className={containerStyles.iconText}> Manufacturing  plain, printed, hanger cut, self-sealed, bio-oxy & PLA corn based polybags </div> 
        </div>
        <div className={containerStyles.iconBox}>
          <img className={containerStyles.icon} src={industry} />
          <div className={containerStyles.iconText}> Running business since 1990 with garment exporters </div> 
        </div>
        <div className={containerStyles.iconBox}>
          <img className={containerStyles.icon} src={recycle} />
          <div className={containerStyles.iconText}> Environment friendly and Recyced Claim Standard Approved Polybags </div> 
        </div> 
      </div>

      <div className={containerStyles.iconSection}>
        <div className={containerStyles.iconBox}>
          <img className={containerStyles.icon} src={machine} />
          <div className={containerStyles.iconText}> Equipped with industry-standard 5 extruder machinery units </div> 
        </div>
        <div className={containerStyles.iconBox}>
          <img className={containerStyles.icon} src={cut} />
          <div className={containerStyles.iconText}> Automated with 4 cutting machines for variety, specifications and precision </div> 
        </div>
        <div className={containerStyles.iconBox}>
          <img className={containerStyles.icon} src={print} />
          <div className={containerStyles.iconText}> Facilitated with 3 printing machines to replicate given designs </div> 
        </div> 
      </div>
      </div>

      <div className={containerStyles.business}>
        <div className={containerStyles.businessQuote}> WE PRODUCE <span className={containerStyles.quoteAccent}> ONE LAKH PIECES DAILY </span> FOR RENOWNED BRANDS AND CLOTHING APPAREL STORES.</div>
        <div className={containerStyles.logoContainer}> 
          <div style={rowStyles} className={containerStyles.logoRow} > 
            <div className={containerStyles.logoBox}> <img src={logo1} alt="logo1"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo2} alt="logo2"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo3} alt="logo3"></img>  </div>
            <div className={containerStyles.logoBox}> <img src={logo4} alt="logo4"></img>  </div>
            <div className={containerStyles.logoBox}> <img src={logo5} alt="logo5"></img>  </div>
          </div>
          <div className={containerStyles.logoRow}> 
            <div className={containerStyles.logoBox}> <span style={logoblackStyles}> <img src={logo6} alt="logo6"></img> </span> </div>
            <div className={containerStyles.logoBox}> <img src={logo7} alt="logo7"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo8} alt="logo8"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo9} alt="logo9"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo10} alt="logo10"></img> </div>
            <div className={containerStyles.logoBox}> <span style={logoblackStyles}> <img src={logo11} alt="logo11"></img> </span> </div>
          </div>
          <div style={rowStyles} className={containerStyles.logoRow} > 
            <div className={containerStyles.logoBox}> <img src={logo12} alt="logo12"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo13} alt="logo13"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo14} alt="logo14"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo15} alt="logo15"></img> </div>
            <div className={containerStyles.logoBox}> <img src={logo16} alt="logo16"></img> </div>
          </div>
        </div>
      </div>

      <div className={containerStyles.masonry}>
        <div className={containerStyles.galleryItem}> <img src={gallery1} alt="gallery1"/>  </div>
        <div className={containerStyles.galleryItem}> <img src={gallery2} alt="gallery2"/>  </div>
        <div className={containerStyles.galleryItem}> <img src={gallery3} alt="gallery3"/>  </div>
        <div className={containerStyles.galleryItem}> <img src={gallery4} alt="gallery4"/>  </div>
        <div className={containerStyles.galleryItem}> <img src={gallery5} alt="gallery5"/>  </div>
        <div className={containerStyles.galleryItem}> <img src={gallery6} alt="gallery6"/>  </div>
        <div className={containerStyles.galleryItem}> <img src={gallery7} alt="gallery7"/>  </div>
      </div>

      <div className={containerStyles.footer}>
        <div className={containerStyles.footerQuote}> <img src={quotes} alt="quotes"></img> </div>
        <div className={containerStyles.footerSection}> 
          <div> 
            <div className={containerStyles.footerText}> We are committed to excellence, high quality and assurance, while catering to your requirements and protecting the environment. Being in this line of business for the last 30 years, we offer fulfilling products at best possible prices. </div>
            <div className={containerStyles.footerName}> Anuj Garg, Sole Proprietor </div> 
            <div> <img src={papa} alt="Founder"/> </div>
          </div>
          <div>
            <a href="tel:+919811036352" className={containerStyles.footerLink}> <img src={call} alt="Phone Number" className={containerStyles.footerImage} /> +91-9811036352 </a>
            <a href="mailto:anujgargonline@hotmail.com" className={containerStyles.footerLink}> <img src={mail} alt="EmailID" className={containerStyles.footerImage}/> anujgargonline@hotmail.com </a>
            <a href="https://goo.gl/maps/TNZs3cFvp3uUm82n9" className={containerStyles.footerLink}> <img src={location} alt="Location" className={containerStyles.footerImage}/> Plot no. 8, Daulatabad, Gurugram, Haryana 122006 </a>
            <a href="https://goo.gl/maps/W3k1kd1s5apWd7Qt5" className={containerStyles.footerLink}> <img src={location} alt="Location" className={containerStyles.footerImage}/> 295, Sector-7, IMT Manesar, Gurugram </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
