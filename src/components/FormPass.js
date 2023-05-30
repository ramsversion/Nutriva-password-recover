import React, { useState } from 'react';
import { requestPassword } from '../requests/server';

const FormPass = () => {
  const [ending, setEnding] = useState(false);
  const [loading, setLoading] = useState(false);

  const [endMessage, setEndMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target.elements.email.value.trim() === '') {
      return false;
    }
    setLoading(true);
    const email = event.target.elements.email.value;
    const status = await requestPassword(email);
    setLoading(false);
    setEnding(status.data.Success);
    setEndMessage(status.data.Message);
    console.log(status.data.Success);
  };

  const mystyle = {
    position: "absolute",
    right: "8px;top:60px",
    fontSize: "20px",
    marginTop: "8px",
    color: "#9e9e9e"

  };
  const stylePositionAbsolute = {
    position: 'relative'
  }

  const styleTextUpInput = {
    fontWeight: 'bold',
    fontSize: "10px",
  }
  return (
    <>
      {!ending ? (
        <form id="register-form" className="form" method="post" onSubmit={handleSubmit} >
          <p className="text-center">Enter the email address you used to sign up for your account and we'll email you instructions on resetting your password.</p>
          <br />
          <span className="text-xs-left font-weight-bold" style={styleTextUpInput}>Email Address</span>
          <div className="form-group ">
            <div className="form-group has-feedback">
              <input className="form-control " style={stylePositionAbsolute} name="email" type="email" placeholder="Email Address" />
              <span style={mystyle} className="fa fa-envelope-o form-control-feedback"></span>
            </div>
          </div>

          <br />

          <div className="form-group">
            <button disabled={loading} className="btn btn-lg btn-primary btn-block">
              Send Email &nbsp;
              {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="text-center">{endMessage}</p>
          <br />
          <br />
          <button onClick={() => setEnding(false)} className="btn btn-lg btn-primary btn-block">
            Go Back &nbsp;
          </button>
        </>
      )}
    </>
  )
};

export { FormPass };