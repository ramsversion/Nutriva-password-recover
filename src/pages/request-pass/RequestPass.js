import React from 'react';
import { FormRequestPass } from '../../components/FormRequestPass';

function RequestPass() {
    return (
        <div>
            <div className="form-gap"></div>
            <div className="container">
                <div className="row" style={{ marginTop: '0%' }}>
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel">
                            <div className="panel-body">
                                <div className="text-center">
                                    <FormRequestPass></FormRequestPass>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestPass;
