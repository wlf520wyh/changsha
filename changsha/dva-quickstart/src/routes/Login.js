import React from 'react';
import { connect } from 'dva';
import Lheader from '../components/Lheader.js';
import Lmain from '../components/Lmain.js';
import Lfooter from '../components/Lfooter.js';



function Login() {
  return (
    <div>
      <Lheader></Lheader>
      <Lmain></Lmain>
      <Lfooter></Lfooter>
    </div>
  );
}

Login.propTypes = {
};

export default connect()(Login);