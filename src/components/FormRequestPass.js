import React, { useState } from 'react';
import { updatedPassword } from '../requests/server';

const FormRequestPass = () => {
  const href = window.location.pathname;
  let token = href.split('/restore-password/');
  token = token.toString().replace(',', '');

  const [ending, setEnding] = useState(false);
  const [loading, setLoading] = useState(false);

  const [endMessage, setEndMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const password = event.target.elements.password.value;
    const password_confirm = event.target.elements.password_confirm.value;
    const token = event.target.elements.token.value;

    const status = await updatedPassword(password, password_confirm, token);
    setLoading(false);
    setEnding(status.data.Success);
    setEndMessage(status.data.Message);
  };

  const styleTogglePassword = {
    float: 'right',
    // cursor: 'pointer',
    marginRight: '10px',
    marginTop: '-25px',
  };

  const styleTextUpInput = {
    fontWeight: 'bold',
    fontSize: "10px",
  }

  return (
    <>
      {!ending ? (
        <>
          <h3 className="text-center" style={{ marginTop: 0 }}>Reset Password</h3>
          <div className="panel-body">
            <form id="register-form" className="form" method="post" onSubmit={handleSubmit} >
              <div className="text-justify">
                <div className="form-group">
                  <span className="text-xs-left font-weight-bold" style={styleTextUpInput}>New Password</span>
                  <input type="password" id="password" name='password' className="form-control" />
                  <i style={styleTogglePassword} className="fa fa-fw fa-eye-slash"></i>
                </div>
              </div>

              <div className="text-justify">
                <div className="form-group">
                  <span className="text-xs-left font-weight-bold" style={styleTextUpInput}>Confirm New Password</span>
                  <input type="password" id="password_confirm" name="password_confirm" className="form-control" />
                  <i style={styleTogglePassword} className="fa fa-fw fa-eye-slash"></i>
                </div>
              </div>

              <div className="form-group">
                <button disabled={loading} className="btn btn-lg btn-primary btn-block">
                  Submit &nbsp;
                  {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
                </button>
              </div>
              <input type="hidden" name='token' id='token' value={token} />
            </form>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center">Password Updated</h3>
          <p className="text-center">{endMessage}</p>
          <br />
          <p className="text-center">Your password has been successfully updated! Open the Nutriva app and sing in using your new password.</p>
        </>
      )}
    </>
  )
};

export { FormRequestPass };