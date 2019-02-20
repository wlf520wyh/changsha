import React from 'react';
import { connect } from "dva";
import Lheadercss from '../components/Lcss/Lheader.css'
import L_logo from '../assets/img/login_logo.png';
import L_zhushou from '../assets/img/Lzhushou.png';
import L_xiazai from '../assets/img/Lxiazai.png';
import L_wenhao from '../assets/img/Lwenhao.png';

const Lheader = () => {
    return (
		<div className={Lheadercss.L_header}>
			<div className={Lheadercss.L_header_con}>
				<a href="http://10.3.143.101:8000/#/"><img className={Lheadercss.Llogo} src={L_logo} alt=''/></a>
				<div className={Lheadercss.L_header_r}>
					<img src={L_zhushou} alt=''/>
					<div style={{width:"20px",height:"10px",display:"inline-block"}}></div>
					<img src={L_xiazai} alt=''/><span>证书下载</span>
					<div style={{width:"10px",height:"10px",display:"inline-block"}}></div>
					<img src={L_wenhao} alt=''/><span>帮助中心</span><br />
					<div style={{width:"112px",height:"10px",display:"inline-block"}}></div>
					<span>电子回单</span>
					<div style={{width:"10px",height:"10px",display:"inline-block"}}></div>
					<span>卡本通激活</span>
				</div>
			</div>
		</div>
    );
};

Lheader.propTypes = {
};

export default connect()(Lheader);
