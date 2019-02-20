import React from 'react';
import { connect } from 'dva';
import Smain from '../components/Smain.js'



function Sign() {
    return (
        <div>
            <Smain></Smain>
        </div>
    );
}

Sign.propTypes = {
};

export default connect()(Sign);