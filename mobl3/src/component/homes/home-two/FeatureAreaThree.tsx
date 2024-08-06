import Image from "next/image"
import Link from "next/link"

import thumb_1 from "@/assets/img/update/normal/why_1-1.png";

const FeatureAreaThree = () => {
   return (
      <div className="pt-140 pb-140 overflow-hidden position-relative z-index-common">
         <div className="feature-shape-4-1  spin"></div>
         <div className="feature-shape-4-2 alltuchtopdown"></div>
         <div className="feature-shape-4-3 alltuchtopdown"></div>
         <div className="feature-shape-4-4"></div>
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-xl-5">
                  <div className="section-title mb-50">
                     <span className="sub-title">POSSIBILITIES</span>
                     <h2 className="title style2">What this means for the Mob Ecosystem?</h2>
                     <p className="mt-25"></p>
                  </div>
               </div>
               <div className="col-xl-6">
                  <ul className="feature-category-list mb-xl-0 mb-60">
                     <li>
                        <Link href="#">REDACTED</Link>
                     </li>
                     <li>
                        <Link href="#">REDACTED</Link>
                     </li>
                     <li>
                        <Link href="#">REDACTED</Link>
                     </li>
                     <li>
                        <Link href="#">REDACTED</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FeatureAreaThree
