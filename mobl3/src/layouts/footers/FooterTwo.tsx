"use client"
import Image from "next/image"
import Link from "next/link"

import logo_1 from "@/assets/img/logo/logo.png"

const FooterTwo = () => {
   return (
      <footer className="footer-wrapper footer-layout2 pb-50">
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-xl-auto col-lg-6 order-xl-1">
                  <div className="widget footer-widget">
                     <div className="widget-about">
                        <div className="footer-logo">
                           <Link href="/"><Image src={logo_1} style={{ height: "120px" }} alt="iko" /></Link>
                        </div>
                        <p className="about-text">Iko is a cutting-edge blockchain technology company at the forefront of innovation in the decentralized ledger space. Established in 2024</p>
                        <div className="social-btn style2">
                           <Link href="https://x.com/mobl3xyz">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                 <path
                                    d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                    fill="currentColor"></path>
                              </svg>
                           </Link>
                        </div>
                     </div>
                     <p className="copyright-text">Copyright © 2024 <Link href="#">MOB Foundation.</Link> All rights reserved.</p>
                  </div>
               </div>
               <div className="col-xl-auto col-lg-6 order-xl-2">
                  <div className="footer-widget widget-contact">
                     <h3 className="fw-title">CONTACT US</h3>
                     <p className="contact-info-text">You can contact the Mob team, via opening a discord ticket or sending an email</p>
                     <div className="contact-info-link">Discord: <Link href="https://discord.com/invite/">Click here</Link></div>
                     <div className="contact-info-link">Email: <Link href="mailto:support@mobl3.xyz">support@mobl3.xyz</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
