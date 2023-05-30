import React from 'react';
import { FormPass } from '../../components/FormPass';

function ResetPass() {
    return (
        <div>
            <div className="form-gap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel">
                            <div className="panel-body">
                                <h3 className="text-center" style={{ marginTop: 0 }}>Reset Password</h3>
                                <br />
                                <div className="panel-body">
                                    <FormPass></FormPass>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPass;
