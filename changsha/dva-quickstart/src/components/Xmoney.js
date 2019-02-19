import React from 'react';
import { connect } from 'dva';
import Xmoneycss from '../components/Xcss/Xmoney.css';
import moneyImg from '../assets/img/qian.png';
import ma from '../assets/img/ewm.png';
import qian_r_t from '../assets/img/qian_r.png';
import qian_r_b from '../assets/img/qian_r_b.png';
import money_banner_1 from '../assets/img/money_banner1.jpg';
import money_banner_2 from '../assets/img/money_banner2.png';
import money_banner_3 from '../assets/img/money_banner3.jpg';

function Xmoney() {
    return (
        <div className={Xmoneycss.money}>
            <div className="con">
                <div className={Xmoneycss.money_l}>
                    <img className={Xmoneycss.qian} src={moneyImg} alt=""/>
                    <h3>长行理财 收益更高</h3>
                    <p>打开手机 随时随地 乐享生活</p>
                    <h2>227,120</h2><span>人</span>
                    <h5>累计收益：423,451.96 万元</h5>
                    <img className={Xmoneycss.ma} src={ma} alt=""/>
                    <h4>扫码通过e钱庄购买</h4>
                </div>
                <div className={Xmoneycss.money_r}>
                    <br/>
                    <img className={Xmoneycss.qian_t} src={qian_r_t} alt=""/>
                    <div className={Xmoneycss.xuanze1}>
                        立即购买
                    </div>
                    <div className={Xmoneycss.xuanze2}>
                        更多产品
                    </div>
                    
                    <img className={Xmoneycss.qian_b} src={qian_r_b} alt=""/>
                    <div className={Xmoneycss.xuanze3}>
                        立即购买
                    </div>
                    <div className={Xmoneycss.xuanze4}>
                        更多产品
                    </div>
                </div>
            </div>


            <div className={Xmoneycss.banner2}>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={money_banner_1} alt=''/>
                        </div>
                        <div className="carousel-item">
                            <img src={money_banner_2} alt=''/>
                        </div>
                        <div className="carousel-item">
                            <img src={money_banner_3} alt=''/>
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
        </div>
        
    );
}

Xmoney.propTypes = {
};

export default connect()(Xmoney);
