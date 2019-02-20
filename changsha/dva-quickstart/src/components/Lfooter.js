import React from 'react';
import { connect } from 'dva';
import Lfootercss from '../components/Lcss/Lfooter.css'
import L_ewm from '../assets/img/L_footer_ewm.png'



function Lfooter() {
    return (
        <div className={Lfootercss.Lfooter}>
            <div className={Lfootercss.Lfooter_con}>
                <p>长沙银行&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;湘ICP证010023</p>
                <p>www.bankofchangsha.com</p>
                <img className={Lfootercss.Lfooter_ewm} src={L_ewm} alt=""/>
            </div>
        </div>
    );
}

Lfooter.propTypes = {
};

export default connect()(Lfooter);