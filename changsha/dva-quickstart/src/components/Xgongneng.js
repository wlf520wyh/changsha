import React from 'react';
import { connect } from 'dva';
import Xgongnengcss from '../components/Xcss/Xgongneng.css';
import gongnengImg1 from '../assets/img/manli_pic.png';
import gongnengImg2 from '../assets/img/sf_pic.png';
import gongnengImg3 from '../assets/img/newicon.png';
import gongnengImg4 from '../assets/img/bcstodayicon.png';
import kuaile from '../assets/img/kuaile.png';
import jiaotong from '../assets/img/jiaotong.png';


function Xgongneng() {
    return (
        <div className={Xgongnengcss.box}>
            <div className="con">
                <div className={Xgongnengcss.pig}>
                    <img src={gongnengImg1} alt=""/>
                    <img src={kuaile} alt=""/>
                    <div className={Xgongnengcss.genduo}>了解更多</div>
                </div>
                <div className={Xgongnengcss.pig}>
                    <img src={gongnengImg2} alt=""/>
                    <img src={jiaotong} alt=""/>
                    <div className={Xgongnengcss.genduo}>了解更多</div>
                </div>
                
                <div className={Xgongnengcss.pig}>
                    <img style={{display:"inline-block",float:"left",width:"188px"}} src={gongnengImg3} alt=""/>
                    <h2>新闻公告</h2>
                    <br/><br/><br/>
                    <ul>
                        <li>
                            长行新闻
                        </li>
                        <li>
                            媒体聚焦
                        </li>
                        <li>
                            金融咨询
                        </li>
                    </ul>
                    <ul>
                        <li>
                            人才招聘
                        </li>
                        <li>
                            公告信息
                        </li>
                    </ul>
                </div><div className={Xgongnengcss.pig}>
                <img style={{display:"inline-block",float:"left",width:"188px"}} src={gongnengImg4} alt=""/>
                    <h2>今日长行</h2>
                    <br/><br/><br/>
                    <ul>
                        <li>
                        长行介绍
                        </li>
                        <li>
                            联系我们
                        </li>
                        <li>
                           投资者关系
                        </li>
                    </ul>
                    <ul>
                        <li>
                            人才招聘
                        </li>
                        <li>
                            公告信息
                        </li>
                    </ul>
                    
                    
                </div>

            </div>
        </div>
    );
}

Xgongneng.propTypes = {
};

export default connect()(Xgongneng);