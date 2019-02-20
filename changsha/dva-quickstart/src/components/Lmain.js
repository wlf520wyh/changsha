import React from 'react';
import { connect } from 'dva';
import Lmaincss from '../components/Lcss/Lmain.css';
import L_datu from '../assets/img/L_datu.png';
import L_dazhong from '../assets/img/L_dazhong.png';
import L_ren from '../assets/img/L_ren.png';
import L_mima from '../assets/img/L_mima.png';
import L_anquan from '../assets/img/L_anquan.png';

function Lmain() {
    return (
        <div className={Lmaincss.L_box}>
            <div className={Lmaincss.L_box_con}>
                <img src={L_datu} alt="" />
                <div className={Lmaincss.L_box_r}>
                    <div className={Lmaincss.L_box_rt}>
                        <img src={L_dazhong} alt="" />
                    </div>
                    <div className={Lmaincss.L_box_rc}></div>
                    <div className={Lmaincss.L_box_rc2}>
                        <h2>用户名登录</h2>
                        <img className={Lmaincss.L_box_rcren} src={L_ren} alt=''/>
                        <img className={Lmaincss.L_box_rcmima} src={L_mima} alt=''/>
                        <input className={Lmaincss.L_box_input} type='txt' placeholder="手机号/身份证/登录名" />
                        <input className={Lmaincss.L_box_input2} type='password' placeholder="密码" />
                        <div className={Lmaincss.L_box_denglu}>登录</div>
                        <a href="http://10.3.143.101:8000/#/sign"><div className={Lmaincss.L_box_denglu}>注册</div></a>
                        <img style={{margin:"10px 0 0 22px"}} src={L_anquan} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

Lmain.propTypes = {
};

export default connect()(Lmain);