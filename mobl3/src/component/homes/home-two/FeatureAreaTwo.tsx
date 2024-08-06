import Image from "next/image"

import thumb_1 from "@/assets/img/update/normal/intro_1-1.png"
import thumb_2 from "@/assets/img/update/feature/feature-thumb-3-1.png"

const FeatureAreaTwo = () => {
   return (
      <div className="pt-140 pb-140 overflow-hidden position-relative z-index-common" id="feature">
         <div className="bg-gradient-5"></div>
         <div className="feature-shape-3-1 alltuchtopdown"></div>
         <div className="feature-shape-3-2 alltuchtopdown"></div>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 text-center">
                  <div className="feature-thumb-wrap">
                     <div className="feature-thumb-circle spin"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FeatureAreaTwo
