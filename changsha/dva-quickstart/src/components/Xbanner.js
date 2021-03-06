import React from "react";
import { connect } from "dva";
import Xbannercss from '../components/Xcss/Xbanner.css'
import banner_1 from '../assets/img/banner_1.png';
import banner_2 from '../assets/img/banner_2.png';
import banner_3 from '../assets/img/banner_3.png';
import banner_4 from '../assets/img/banner_4.png';

function Xbanner() {
  	return (
    	<div className={Xbannercss.banner}>
      		<div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1} alt=''/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner_2} alt=''/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner_3} alt=''/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner_4} alt=''/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
    	</div>
    );
}

Xbanner.propTypes = {};

export default connect()(Xbanner);