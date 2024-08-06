import Image from "next/image";
import Link from "next/link";

import hero_thumb from "@/assets/img/update/hero/ethereum.svg";

const HeroArea = () => {
   return (
      <div className="hero-wrapper hero-2">
         <div className="hero-bg-gradient1"></div>
         <div className="hero-bg-gradient2"></div>
         <div className="hero-gradient-ball alltuchtopdown"></div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>
         <div className="container">
            <div className="hero-style2">
               <div className="row">
                  <div className="col-lg-12">
                     <h6 className="hero-subtitle">DEMOCRATIZING</h6>
                     <h1 className="hero-title">Liquidity</h1>
                     <div className="btn-wrap">
                        <h3 className="hero-title2">for Long-tail Assets</h3>
                        <div className="hero-content">
                           <p className="hero-text"> Mobl3 is a trading-optimised modular L3, Optimizing liquidity on the network level for improved capital efficiency utilized for creating High-performant environment for trading of synthetic markets and generation of Native Yield.</p>
                           <Link href="#" className="btn btn3" >
                              JOIN THE MOB
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroArea
