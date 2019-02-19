import React from 'react';
import { connect } from 'dva';
import Xheader from '../components/Xheader.js';
import Xbanner from '../components/Xbanner.js';
import Xnav from '../components/Xnav.js';
import Xmoney from '../components/Xmoney.js';
import Xgongneng from '../components/Xgongneng.js';
import Xfooter from '../components/footer.js';


function IndexPage() {
  return (
    <div>
      <Xheader />
      <Xbanner />
      <Xnav />
      <Xmoney />
      <Xgongneng />
      <Xfooter />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
