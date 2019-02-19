import React from "react";
import { connect } from "dva";
import Xheadercss from "../components/Xcss/Xheader.css";
import logo from '../assets/img/logo.png';
import geren from '../assets/img/geren.png';
import qiye from '../assets/img/qiye.png';
import ka from '../assets/img/ka.png';
import touzi from '../assets/img/touzi.png';
import sousuo from '../assets/img/sousuo.png';
import denglu from '../assets/img/denglu.png';

function Xheader() {
  	return (
        <div className={Xheadercss.xiding} id="xiding">
            <div className="con">
                <div className={Xheadercss.box}>
                    <div className={Xheadercss.logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={Xheadercss.yewu}>
                        <ul className={Xheadercss.ul1}>
                            <li>
                                <img src={geren} alt=""/>
                                <span>
                                    个人业务
                                </span>
                                <div className={Xheadercss.erji}>
                                    <ul className={Xheadercss.ul2}>
                                        <li>
                                            投资理财
                                        </li>
                                        <li>
                                            金芙蓉理财
                                        </li>
                                        <li>
                                            代销基金
                                        </li>
                                        <li>
                                            实物贵金属代销
                                        </li>
                                        <li>
                                            三方存管
                                        </li>
                                        <li>
                                            更多>>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <img src={qiye} alt=""/>
                                <span>
                                    企业业务   
                                </span>
                            </li>
                            <li>
                                <img src={ka} alt=""/>
                                <span>
                                    信用卡
                                </span>
                            </li>
                            <li>
                                <img src={touzi} alt=""/>
                                <span>
                                    投资者中心
                                </span>
                            </li>
                        </ul>   
                    </div>
                    <div className={Xheadercss.sousuo}>
                        <img src={sousuo} alt=""/>
                        <input style={{border:"1px soild #D4D4D4",fontSize:"18px",width:"128px"}} type="txt" placeholder="请输入" />
                        <img src={denglu} alt=""/>
                        <span>登录</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

Xheader.propTypes = {};

export default connect()(Xheader);
