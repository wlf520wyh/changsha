import React from "react";
import { connect } from "dva";
import Xnavcss from '../components/Xcss/Xnav.css'
import nav_1 from '../assets/img/nav_1.png';
import nav_2 from '../assets/img/nav_2.png';
import nav_3 from '../assets/img/nav_3.png';
import nav_4 from '../assets/img/nav_4.png';
import nav_5 from '../assets/img/nav_5.png';
import nav_6 from '../assets/img/nav_6.png';


function Xnav() {
  	return (
    	<div className="con">
            <ul className={Xnavcss.Xnav_ul}>
                <li className={Xnavcss.li_1}>
                    <img src={nav_1} alt="" />
                    <p>智慧校园</p>
                </li>
                <li className={Xnavcss.li_2}>
                    <img src={nav_2} alt="" />
                    <p>智慧校园</p>
                </li>
                <li className={Xnavcss.li_3}>
                    <img src={nav_3} alt="" />
                    <p>智慧校园</p>
                </li>
                <li className={Xnavcss.li_4}>
                    <img src={nav_4} alt="" />
                    <p>智慧校园</p>
                </li>
                <li className={Xnavcss.li_5}>
                    <img src={nav_5} alt="" />
                    <p>智慧校园</p>
                </li>
                <li className={Xnavcss.li_6}>
                    <img src={nav_6} alt="" />
                    <p>智慧校园</p>
                </li>
            </ul>
    	</div>
    );
}

Xnav.propTypes = {};

export default connect()(Xnav);