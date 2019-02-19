import React from 'react';
import { connect } from 'dva';
import footer_box from '../components/Xcss/Xfooter.css';
import weihang from '../assets/img/weihang.jpg';
import dibu from '../assets/img/zuidibu.png';
import logo_footer from '../assets/img/logo.png';


function footer() {
	return (
		<div>
			<div className={footer_box.box}>
			</div>
			<div className={footer_box.box1}>
				<div className="con">
					<div className={footer_box.box1_l}>
						<ul>
							<li style={{fontSize:"18px"}}>联系我们</li>
							<li>总行地址：长沙市岳麓区滨江路长沙银行大厦</li>
							<li>邮 编：410205</li>
							<li>信用卡服务热线：40067-96511</li>
							<li>服务热线：0731-96511</li>
						</ul>
					</div>
					<div className={footer_box.box1_c}>
						<ul>
							<li style={{fontSize:"18px"}}>投诉管理</li>
							<li>电话渠道：0731-96511（转3）0731-85185750</li>
							<li>网络渠道：kfzx@cscb.cn 长沙银行投诉处理流程</li>
							<li>信函渠道：长沙市岳麓区滨江路长沙银行大厦客户服务部消费者</li>
							<li>权益保护及投诉管理中心</li>
						</ul>
					</div>
					<div className={footer_box.box1_r}>
						<img src={weihang} alt=""/>
					</div>
				</div>
			</div>
			<div className={footer_box.box3}>
				<div className="con">
					<img src={dibu} alt=""/>
					<img className={footer_box.logo_footer} src={logo_footer} alt=""/>
				</div>
			</div>
			
		</div>
		
	);
}

footer.propTypes = {
};

export default connect()(footer);
