import React from 'react';
import { connect } from 'dva';
import Smaincss from '../components/Scss/Smain.css';
import Sjiantou from '../assets/img/S_jiantou.png';
import S_footer from '../assets/img/S_footer.png';

function Smain() {
    return (
        <div className={Smaincss.Smain_box}>
            <div className={Smaincss.Smain_box_main}>
                <div className={Smaincss.Smain_box_t}>
                    <div className={Smaincss.Smain_box_tl}>新用户注册</div>
                </div>
                <div style={{margin:"28px 0 0 10px"}}>
                    <span>新用户操作流程:</span>&nbsp;&nbsp;
                    <img src={Sjiantou} alt=""/>&nbsp;&nbsp;
                    <span>填写凭证信息</span>&nbsp;&nbsp;
                    <img src={Sjiantou} alt=""/>&nbsp;&nbsp;
                    <span>填写手机号及密码</span>
                </div>
                <p style={{color:"#D64747",fontSize:"12px",margin:"22px 0 0 10px"}}>第一步:&nbsp;填写凭证信息</p>
                <div className={Smaincss.Smain_box_biao}>
                    <ul className={Smaincss.Smain_box_biao_u1}>
                        <div style={{borderBottom:"none",borderRight:"none"}}>凭证类型</div>
                        <div style={{borderBottom:"none",borderRight:"none"}}>卡号/账号</div>
                        <div style={{borderRight:"none"}}>交易密码</div>
                    </ul>
                    <ul className={Smaincss.Smain_box_biao_u2}>
                        <div style={{borderBottom:"none"}}>
                            <select>
                                <option>
                                    借记卡
                                </option>
                                <option>
                                    存储卡
                                </option>
                                <option>
                                    信用卡
                                </option>
                            </select>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                        <div style={{borderBottom:"none"}}>
                            <input style={{margin:"-5px 0 0 0"}} className={Smaincss.Smain_box_biao_in1} type="txt" placeholder="请输入"/>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                        <div>
                            <input  style={{margin:"-5px 0 0 0"}} className={Smaincss.Smain_box_biao_in1} type="password" placeholder="密码"/>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                    </ul>
                    <ul className={Smaincss.Smain_box_biao_u2}>
                        <div style={{borderBottom:"none",borderLeft:"none"}}></div>
                        <div style={{borderBottom:"none",borderLeft:"none",lineHeight:"40px"}}>选择卡时输入卡号，选择折时输入账号</div>
                        <div style={{borderLeft:"none"}}></div>
                    </ul>
                </div>


                <p style={{color:"#D64747",fontSize:"12px",margin:"22px 0 0 10px"}}>第二步:&nbsp;填写手机号及密码</p>
                <div className={Smaincss.Smain_box_biao}>
                    <ul className={Smaincss.Smain_box_biao_u1}>
                        <div style={{borderBottom:"none",borderRight:"none"}}>手机号码</div>
                        <div style={{borderBottom:"none",borderRight:"none"}}>输入动态验证码</div>
                        <div style={{borderRight:"none"}}>网银用户登录密码</div>
                        <div style={{borderRight:"none",borderTop:"none"}}>再次确认登录密码</div>
                        <div style={{borderRight:"none",borderTop:"none"}}>推荐人</div>
                    </ul>
                    <ul className={Smaincss.Smain_box_biao_u2}>
                        <div style={{borderBottom:"none"}}>
                            <input style={{margin:"-5px 0 0 0"}} className={Smaincss.Smain_box_biao_in1} type="txt" placeholder="请输入"/>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                        <div style={{borderBottom:"none"}}>
                            <input  style={{margin:"-5px 0 0 0"}} className={Smaincss.Smain_box_biao_in1} type="txt" placeholder="请输入"/>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                        <div>
                            <input  style={{margin:"-5px 0 0 0"}} className={Smaincss.Smain_box_biao_in1} type="password" placeholder="密码"/>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                        <div style={{borderTop:"none"}}>
                            <input  style={{margin:"-5px 0 0 0"}} className={Smaincss.Smain_box_biao_in1} type="password" placeholder="密码"/>
                            <span style={{color:"red",fontSize:"20px",fontWeight:"900"}}>*</span>
                        </div>
                        <div style={{borderTop:"none"}}>
                            <input className={Smaincss.Smain_box_biao_in1} type="password" placeholder="(可选)银行工作人员工号"/>
                        </div>
                    </ul>
                    <ul className={Smaincss.Smain_box_biao_u2}>
                        <div style={{borderBottom:"none",borderLeft:"none"}}></div>
                        <div style={{borderBottom:"none",borderLeft:"none",lineHeight:"40px",cursor:"pointer"}}>点击获取验证码</div>
                        <div style={{borderLeft:"none"}}></div>
                        <div style={{borderLeft:"none",borderTop:"none"}}></div>
                        <div style={{borderLeft:"none",borderTop:"none"}}></div>
                    </ul>
                </div><br /><br /><br /><br />

                <div className={Smaincss.xieyi}>
                    <a href="javascript:void(0)">《长沙银行网络银行个人客户服务协议》</a>
                    <a href="javascript:void(0)">《长沙银行股份有限公司隐私政策》</a>
                </div>
                <div className={Smaincss.Ssigin}>
                    <button className={Smaincss.button1}>已观看协议并同意协议且注册</button>
                    <a href="http://10.3.143.101:8000/#/Login" className={Smaincss.button2}>返回上一级</a>
                    <img src={S_footer} alt=""/>
                </div>
                
            </div>
        </div>
    );
}

Smain.propTypes = {
};

export default connect()(Smain);